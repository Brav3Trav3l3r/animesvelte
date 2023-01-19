<script>
    export let info
    import { currentEp } from "../../store/store";


</script>

<div
		class="aside bg-black hidden lg:block pt-6 h-auto mt-0 w-80 lg:w-96 left-0 fixed top-16 bottom-0  overflow-hidden overflow-y-auto "
	>
		<div class="episodes flex flex-col p-2">
			{#each info.episodes as ep}
				<a href={`/a1/${info.id}/${ep.id}`} on:click={()=> currentEp.set(ep.id)}
					><div 
						class="ep {ep.id === $currentEp ? 'text-purple-400 hover:bg-purple-500/10 border-l-4 border-purple-400 px-4' :  'text-zinc-400 text-sm hover:text-white hover:bg-zinc-700/20 px-2 rounded-md ' }    
                        py-2 flex space-x-4 items-baseline"
					>
						<h1 class="md:text-lg">{ep.number}</h1>
						<h1 class="text-sm md:text-base line-clamp-1">{ep.title}</h1>
					</div></a
				>
			{/each}
		</div>
	</div>

    <style>
        .aside::-webkit-scrollbar {
            width: 12px;
            height: 12px;
        }
        .aside::-webkit-scrollbar-track {
            background:transparent;
        }
        .aside::-webkit-scrollbar-thumb {
            background: #545454;
            opacity: 0.5;
            visibility: hidden;
        }
        .aside:hover::-webkit-scrollbar-thumb {
            visibility: visible;
        }
    
        
    </style>
    
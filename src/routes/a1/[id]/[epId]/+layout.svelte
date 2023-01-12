<script>
	export let data;
	let info = data.info;
</script>


<div class="main flex flex-col pt-2 px-2 md:flex-row-reverse ">
	<div class="video mt-16 md:flex-1 md:ml-80 lg:ml-96 md:pt-6 md:px-16 lg:px-20">
		<slot>loading</slot>
	</div>
	<div class="aside md:border-r-4 border-zinc-900 md:pt-6 w-full h-[600px] md:h-auto mt-16 md:mt-0 md:w-80 lg:w-96 left-0 md:fixed top-16 bottom-0  overflow-hidden overflow-y-auto ">
		 <div
			class="episodes flex flex-col p-2 "
		>
			{#each info.episodes as ep}
				<a href={`/a1/${info.id}/${ep.id}`} 
					><div class="ep hover:bg-zinc-900 py-2 px-2 flex space-x-4 items-baseline">
						<h1 class="md:text-lg font-semibold">{ep.number}</h1>
						<h1 class="text-sm md:text-base line-clamp-1">{ep.title}</h1>
					</div></a
				>
			{/each}
		</div>
	</div>
</div>


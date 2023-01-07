<script>
	import { episode } from './store';
	$: console.log($episode);
	export let data;
	let info = data.info;
</script>


<div class="main flex flex-col  pt-2 px-2 md:flex-row-reverse ">
	<div class="video mt-16 md:flex-1 md:ml-80 md:px-16">
		<slot />
	</div>
	<div class="aside w-full h-[600px] md:h-auto mt-16 md:mt-0 border-4 md:w-80 left-0 md:fixed top-16 bottom-0  overflow-hidden overflow-y-auto ">
		 <div
			class="episodes border flex flex-col p-2 "
		>
			{#each info.episodes as ep}
				<a href={`/a1/${info.id}/${ep.id}`} on:click={() => episode.set(ep)}
					><div class="ep hover:bg-zinc-900 py-2 px-2">
						<h1>{ep.title}</h1>
					</div></a
				>
			{/each}
		</div>
	</div>
</div>


<!-- <div class="sticky top-0 bg-black space-y-2 py-4 px-4">
	<h1>Episodes</h1>
	<div class="search ">
		<input
			type="text"
			placeholder="Search for episodes"
			class="px-4 py-1 bg-zinc-900 rounded-md place placeholder:text-sm "
		/>
	</div>
</div> -->
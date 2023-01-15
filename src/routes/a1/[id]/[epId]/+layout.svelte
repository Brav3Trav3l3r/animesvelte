<script>
	export let data;
	let info = data.info;
</script>

<div class="main flex flex-col   ">
	<div class="sticky sm:relative video top-16 sm:top-0 md:flex-1 lg:ml-96 md:pt-6 md:px-10 xl:px-20">
		<slot>loading</slot>
	</div>

	<div
		class="aside bg-zinc-900/80 hidden lg:block pt-6 h-auto mt-0 w-80 lg:w-96 left-0 fixed top-16 bottom-0  overflow-hidden overflow-y-auto "
	>
		<div class="episodes flex flex-col p-2 ">
			{#each info.episodes as ep}
				<a href={`/a1/${info.id}/${ep.id}`}
					><div class="ep text-zinc-400 hover:bg-zinc-900 py-2 px-2 flex space-x-4 items-baseline">
						<h1 class="md:text-lg font-semibold">{ep.number}</h1>
						<h1 class="text-sm md:text-base line-clamp-1">{ep.title}</h1>
					</div></a
				>
			{/each}
		</div>
	</div>
</div>


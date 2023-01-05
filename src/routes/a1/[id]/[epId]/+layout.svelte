<script>
	import { episode } from './store';
	import { tempEpisode } from '../store';

	export let data;
	let info = data.info;
</script>

<div class="scrollbar-none">
	<div class="scrollbar-auto:hover scrollbar-thumb-black scrollbar-track-grey-light">
		<div class=" lg:fixed inset-0 mt-24 flex lg:flex-row flex-col ">
			<div class="slot flex-1 mx-2 lg:mx-4 lg:overflow-y-scroll ">
				<slot />
			</div>
			<div
				class="aside h-96 lg:h-full mx-2 lg:mx-0 mt-8 lg:mt-0 lg:w-72 xl:w-96 p-2 overflow-y-scroll bg-zinc-900/40 "
			>
				<div class="episodes flex flex-col my-4 ">
					{#each info.episodes as ep}
						<a href={`/a1/${info.id}/${ep.id}`}
							><div class="episode flex space-x-4 hover:bg-zinc-800/50 rounded p-2 px-4">
								<h1>{ep.number}</h1>
								<h1 class="line-clamp-1">{ep.title}</h1>
							</div></a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

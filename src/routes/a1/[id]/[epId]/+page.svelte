<script>
	import Controls from '../../../../components/epId/Controls.svelte';
	import Video from '../../../../components/Video.svelte';
	import { currentEp, currentIndex } from '../../../../store/store';

	export let data;
	const info = data.info;

	let {url} = data;
	$: url = data.url;

	let epId;
	$: epId = data.params;
	$: currentEp.set(epId)
	
	let index;
	$:index = info.episodes.findIndex( n=> n.id === $currentEp)
	$:currentIndex.set(index)

	let allEps;
	$: allEps = info.episodes;
	
</script>

<div class="main flex flex-col ">
	<Video {epId} {url} />
	<div class="info py-4 px-4 flex flex-col lg:hidden ">
		<div class="episode flex space-x-2 ">
			<h1 class="text-purple-400 font-bold ">{allEps[$currentIndex].number}</h1>
			<h1 class="text-zinc-100">{allEps[$currentIndex].title}</h1>
		</div>
		<a href={`/a1/${info.id}`} class="text-zinc-400 cursor-pointer hover:underline  underline-offset-2 text-sm line-clamp-1">
			{info.title.english ? info.title.english : info.title.romaji}
		</a>

	</div>

	<Controls {info} />
</div>

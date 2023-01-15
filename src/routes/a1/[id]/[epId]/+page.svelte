<script>
	import Controls from '../../../../components/epId/Controls.svelte';
import Video from '../../../../components/Video.svelte';   
	export let data
	const info = data.info
	
	let url = data.url
	$: url = data.url
	let epId = data.params
	$: epId = data.params

	let episode;
	let allEps = info.episodes
	$: episode = allEps.filter((n)=> n.id === epId)
</script>


<div class="main flex flex-col">
	<Video {epId} {url}/>
	<div class="info py-4 bg-black px-4 flex flex-col lg:hidden ">
		<div class="episode flex space-x-2 ">
			
			<h1 class="text-purple-400 font-bold ">{episode[0].number}</h1>
			<h1 class="text-zinc-100">{episode[0].title}</h1>
		</div>
		<h1 class="text-zinc-400 text-sm line-clamp-1">{info.title.english?info.title.english:info.title.romaji }</h1>
	</div>

	<Controls {info} {episode}/>
	
</div>


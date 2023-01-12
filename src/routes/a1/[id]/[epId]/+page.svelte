<script>
	import Video from '../../../../components/Video.svelte';   
	export let data
	const info = data.info
	let url = data.url
	$: url = data.url
	let parmas = data.params
	$: params = data.params
</script>


<div class="main flex flex-col">
	<Video {params} {url}/>
	<div class="info mt-4 px-2 flex">
		<div class="image h-32 aspect-[2/3] hidden md:block">
			<img src={info.image} alt="poster">
		</div>
		<div class="px-2">
			<!-- <h1>{$episode.number}. {$episode.title}</h1>
			<h1 class="text-zinc-200">{info.title.romaji}</h1> -->
		</div>
	</div>
</div>


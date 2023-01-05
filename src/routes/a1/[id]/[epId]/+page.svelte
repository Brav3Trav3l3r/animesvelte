<script>
	import Video from '../../../../components/Video.svelte';    
	export let data
	const info = data.info
	let url = data.url
	$: url = data.url
	let parmas = data.params
	$: params = data.params
</script>


<div class="main mx-auto">

	<Video {params} {url}/>
	<div class="info mt-4">
		<div class="image h-32 aspect-[2/3]">
			<img src={info.image} alt="poster">
		</div>
	</div>
</div>


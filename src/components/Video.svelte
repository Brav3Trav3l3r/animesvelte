<script>
	import { onMount, onDestroy } from 'svelte';
	import '@vidstack/player/define/vds-hls.js';
	import '@vidstack/player/define/vds-media.js';
	import '@vidstack/player/define/vds-video.js';

	export let params;
	export let url;
	import { episode } from '../routes/a1/[id]/[epId]/store';
</script>

<div class="video lg:mr-4 aspect-video bg-zinc-800 ">
	<vds-media class=" h-full w-full object-contain">
        
		<vds-hls 
        class="h-full w-full "
			controls		
		>
			<video class="" controls src={url} preload="none" />
		</vds-hls>
	</vds-media>
</div>
<h1>{params}</h1>
<!-- <h1>{url}</h1> -->

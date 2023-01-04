<script>
    
    import {episode} from '../routes/a1/[id]/[epId]/store'
</script>

<h1>{$episode}</h1>
	<vds-media>
		<vds-hls
            autoplay
			controls
			poster="https://customer-m033z5x00ks6nunl.cloudflarestream.com/b236bde30eb07b9d01318940e5fc3eda/thumbnails/thumbnail.jpg"
		>
			<video  controls src={$episode} preload="none" />
		</vds-hls>
	</vds-media>
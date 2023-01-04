<script>
    import {episode} from './store'
    import {tempEpisode} from '../store'

	export let data;
    let info = data.info
</script>

<div class="container mt-20 p-4">
	<main>
		<slot />
	</main>
    <!-- <button on:click={()=>episode.set("https://cache.387e6278d8e06083d813358762e0ac63.com/474fb952-8aee-11ed-a105-48df37e30218.m3u8?videoid=222973365548")} class="p-2 bg-purple-400"> change src</button> -->

    <div class="aside">
        {#each info.episodes as ep }
            <a on:click={()=> episode.set($tempEpisode)} href={`/a1/${info.id}/${ep.id}`}><div class="episode flex space-x-4">
                <h1>{ep.number}</h1>
                <h1>{ep.title}</h1>
            </div></a>
            
        {/each}
    </div>
</div>







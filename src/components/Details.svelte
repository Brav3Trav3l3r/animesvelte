<script>
	import {episode} from '../routes/a1/[id]/[epId]/store'

	import { styles } from '../styles/index';
	export let detail;


</script>


<div class="info mx-2 relative ">
	<a href={`/a1/${detail.id}/${detail.episodes[0].id}`} on:click={()=> episode.set(detail.episodes[0])}><div class="play fixed bottom-4 right-4 md:hidden">
		<iconify-icon icon="ic:round-play-circle" class="text-6xl text-purple-400" />
	</div></a>

	<div class="flex flex-col md:flex-row max-w-6xl md:space-x-16">
		<div class="image h-[40vh] md:h-[50vh] aspect-[2/3] select-none rounded-md ">
			<img src={detail.image} alt="poster" class="h-full object-cover rounded-md" />
		</div>

		<div class="info mt-4 md:mt-0">
			<h1 class="text-3xl text-white">{detail.title.romaji}</h1>
			<div class="group1 flex space-x-8 mt-4">
				<h1>{detail.releaseDate}</h1>
				<h1>{detail.rating}</h1>
			</div>
            <a  href={`/a1/${detail.id}/${detail.episodes[0].id}`}><di class="play hidden md:block mt-8">
                <button class="{`${styles.primeButton}`} px-16">Play</button>
            </di></a>

			<div class="description mt-6 text-zinc-300 text-sm">
				<p class="line-clamp-4">{@html detail.description}</p>
			</div>
			<div class="group2 mt-10 ">
				<div class="studios flex space-x-8">
					<h1 class="text-zinc-400 text-sm">Sudios</h1>
					<h1>{@html detail.studios}</h1>
				</div>
				<div class="genres flex space-x-8 ">
					<h1 class="text-zinc-400 text-sm">Genres</h1>
					<h1 class="line-clamp-1">{@html detail.genres}</h1>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="related" />

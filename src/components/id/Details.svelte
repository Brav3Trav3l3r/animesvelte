<script>
	import { styles } from '../../styles/index';
	export let detail;
</script>

<div class="info mx-2 relative ">
	<a href={`/a1/${detail.id}/${detail.episodes[0].id}`}
		><div class="play fixed bottom-4 right-4 md:hidden z-50">
			<iconify-icon icon="ic:round-play-circle" class="text-6xl text-purple-400 hover:scale-110 transition duration-200" />
		</div></a
	>

	<div class="flex flex-col md:flex-row md:items-end max-w-6xl md:space-x-16">
		<div class="image h-[35vh] md:h-[45vh] aspect-[2/3] select-none drop-shadow-2xl w-fit">
			<img src={detail.image} alt="poster" class="h-full object-cover rounded brightness-90" />
		</div>

		<div class="info mt-8 md:mt-0 space-y-6">
			<div class="group">
				<h1 class="text-3xl text-zinc-100">{detail.title.romaji}</h1>
				<div class="group1 flex space-x-8 mt-2 text-zinc-400">
					<h1>{detail.releaseDate}</h1>
					<div class="rating flex items-center space-x-2">
						<iconify-icon icon="simple-icons:anilist" class="text-blue-500 text-lg" />
						<h1>{detail.rating}</h1>
					</div>
				</div>
			</div>
			<a href={`/a1/${detail.id}/${detail.episodes[0].id}`}
				><di class="play hidden md:block mt-8">
					<button class="{`${styles.primeButton}`} px-20">Play</button>
				</di></a
			>

			<div class="description text-zinc-400 ">
				<p class="line-clamp-4 text-sm max-w-prose">{@html detail.description}</p>
			</div>
			<div class="group2  ">
				<div class="studios flex space-x-8 md:space-x-10">
					<h1 class="text-zinc-500 ">Sudios</h1>
					<h1 class="text-zinc-300">{@html detail.studios}</h1>
				</div>
				<div class="genres flex space-x-8 md:space-x-10 align-bottom">
					<h1 class="text-zinc-500 ">Genres</h1>
					<h1 class="line-clamp-1 text-zinc-300">{@html detail.genres}</h1>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="related" />

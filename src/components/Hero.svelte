<script>
	import { styles } from '../styles/index';
</script>

<div class="w-full h-[90vh] mb-20 relative flex flex-col md:grid grid-cols-2  justify-between border md:items-center md:gap-6">
	<div class="poster relative flex-1 border md:ml-4">
		<div
			class="back absolute bg-gradient-to-t from-black to-transparent h-3/4 bottom-0 inset-x-0 md:hidden"
		/>
		<img src="./animeposter/bleach.jpg" alt="poster" class=" h-full w-full object-cover" />
	</div>

	<div class="group m-4 mx-6 md:mx-0 felx-1">
		<div class="info">
			<div class="heading text-4xl mr-8  tracking-wide text-purple-50 ">Bleach: Thousand Year Blood War</div>
			<div class="info-group  mt-4 tracking-wider text-purple-50/80 font-light">Oct 12 <span class="text-purple-400">|</span> Fantasy Drama Action</div>
			<div class="description mt-6 text-sm ">
				<p class="line-clamp-5 leading-relaxed text-purple-50/60">
					Was it all just a coincidence, or was it inevitable? Ichigo Kurosaki gained the powers of
					a Soul Reaper through a chance encounter. As a Substitute Soul Reaper, Ichigo became
					caught in the turmoil of the Soul Society, a place where deceased souls gather. But with
					help from his friends, Ichigo overcame every challenge to become even stronger.
				</p>
			</div>
		</div>

		<div class="buttons flex gap-4 mt-10">
			<button class={`${styles.primeButton}`}>Play</button>
			<button class={`${styles.secButton}`}>More Info</button>
		</div>
	</div>
</div>


<style>
    @font-face{
        font-family: 'albra';
        src: url('./fonts/albra.ttf') format('truetype')
    }

    .heading{
        font-family: 'albra', sans-serif;
    }
</style>
<script>
	import { styles } from '../styles/index';
</script>

<div
	class="grid  realtive grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-1 h-[100vh] lg:px-20 lg:pb-20 lg:gap-x-8 "
>
	<div class="{`${styles.group}`} row-span-2 relative lg:h-[60%] flex items-center lg:mx-4 lg:self-center lg:rounded-md truncate ">
		<img src="./animeposter/bleach.jpg" alt="poster" class="h-full w-full object-cover z-20" />
		<!-- <div class="bg-purple-400 absolute inset-0 blur-lg hidden lg:inline-block" /> -->
		<div
			class="bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 lg:hidden z-30"
		/>
	</div>

	<div
		class="{`${styles.group}`} grid row-span-3 lg:row-span-1 lg:px-0 justify-center  z-30 relative w-full lg:w-fit mb-4 lg:mb-0 pb-4"
	>
		<div
			class="container h-full w-full flex flex-col justify-end lg:justify-center text-center lg:text-start "
		>
			<div class="info z-10 max-w-3xl px-4 ">
				<div
					class="{`${styles.primeTitle}`}"
				>
					Bleach: Thousand Year Blood War
				</div>
				<div class="info-group mt-4 tracking-wider text-purple-50/80 font-light">
					Oct 12 <span class="text-purple-400">|</span> Fantasy Drama Action
				</div>
				<div
					class="description mt-6 text-sm px-2 md:px-10 lg:px-0 grid grid-cols-1 lg:grid-cols-6 lg"
				>
					<h1 class="hidden lg:inline-block text-lg text-purple-100/90 w-1/2 pt-2 ">The Story</h1>
					<div class="flex gap-4 flex-col col-span-5">
						<p class="{`${styles.para}`}">
							Was it all just a coincidence, or was it inevitable? Ichigo Kurosaki gained the powers
							of a Soul Reaper through a chance encounter. As a Substitute Soul Reaper, Ichigo
							became caught in the turmoil of the Soul Society, a place where deceased souls gather.
							But with help from his friends, Ichigo overcame every challenge to become even
							stronger.
						</p>
						<div class="buttons flex gap-4 lg:gap-6 mt-8 ">
							<button class={`${styles.primeButton}`}>Play</button>
							<button class={`${styles.secButton}`}>More Info</button>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-gradient-to-b from-black to-transparent absolute inset-0 lg:hidden z-0" />
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: 'albra';
		src: url('./fonts/albra.ttf') format('truetype');
	}

	.heading {
		font-family: 'albra', sans-serif;
	}
</style>

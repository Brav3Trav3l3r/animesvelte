<script>
	import Card from "./Card.svelte";
	import {styles} from '../styles/index'
	export let animes;
	export let title;
</script>

<div class="cardgroup px-4 md:px-10 lg:px-20 mt-28">
	<div class="title mb-8 border-b-2 border-zinc-900 pb-2">
		<h1 class='{`${styles.secTitle}`} '>{title}</h1>
	</div>
	<div class="card-group grid grid-cols-2 min-[550px]:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-8">
		{#each animes as anime}
			<Card {anime}/>
		{/each}
	</div>
</div>

<!-- <style>
@font-face {
    font-family: 'Albra';
    src: url('.fonts/Albra-Regular') format('truetype');
  }

  .title{
	font-family: Albra;
  }
</style> -->


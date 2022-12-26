<script>
	import Card from "./Card.svelte";
	import {styles} from '../styles/index'
	export let animes;
	export let title;
</script>

<div class="cardgroup px-4 md:px-10 lg:px-20 mb-20">
	<div class="title flex text-lg">
		<hr />
		<h1 class='{`${styles.secTitle}`}'>{title}</h1>
	</div>
	<br />
	<div class="card-group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-8">
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


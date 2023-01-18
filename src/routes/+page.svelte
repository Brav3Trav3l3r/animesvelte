<script>
	import Grid from '../components/Grid.svelte';
	import Hero from '../components/Hero.svelte';
	import Cardgroup from '../shared/Cardgroup.svelte';
	export let data;
</script>

<div class="main">
	<Grid />
	<div class="cards">
		<Cardgroup title={'Trending'} animes={data.data1.results} />
		<Cardgroup title={'Recent Episodes'} animes={data.data2.results} />
		<Cardgroup title={'Popular'} animes={data.data3.results} />
	</div>
</div>

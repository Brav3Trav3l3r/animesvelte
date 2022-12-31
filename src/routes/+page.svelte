<script>
	import Grid from "../components/Grid.svelte";
	import Hero from "../components/Hero.svelte";
    import Cardgroup from "../shared/Cardgroup.svelte";
    export let data;
</script>

<!-- <Hero/> -->
<Grid/>

<Cardgroup title={'Trending'} animes = {data.data1.results}/>
<Cardgroup title={'Recent Episodes'} animes = {data.data2.results}/>
<Cardgroup title={'Popular'} animes = {data.data3.results}/>

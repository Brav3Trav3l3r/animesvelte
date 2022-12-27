<script>
	import Hero from "../components/Hero.svelte";
    import Cardgroup from "../shared/Cardgroup.svelte";
    export let data;
</script>

<Hero/>

<Cardgroup title={'Trending'} animes = {data.data1.results}/>
<Cardgroup title={'Recent'} animes = {data.data2.results.slice(0,12)}/>
<Cardgroup title={'Popular'} animes = {data.data3.results}/>

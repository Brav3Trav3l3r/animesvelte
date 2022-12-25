<script>
    import Cardgroup from "../shared/Cardgroup.svelte";
    export let data;
</script>

<Cardgroup title={'Trending'} animes = {data.data1.results}/>
<hr class="bg-white">
<Cardgroup title={'Recent'} animes = {data.data2.results}/>
<hr class="bg-white">
<Cardgroup title={'Popular'} animes = {data.data3.results}/>
<hr class="bg-white">


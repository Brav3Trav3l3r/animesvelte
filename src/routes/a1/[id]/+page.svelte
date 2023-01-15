<script>
	import Characters from '../../../components/id/Characters.svelte';
	import Details from '../../../components/id/Details.svelte';
	import Recommend from '../../../components/id/Recommend.svelte';
	import Related from '../../../components/id/Related.svelte';
	export let data;
	const detail = data.info;
</script>

<div class="absolute h-[50vh] lg: brightness-75 inset-0 bg-gradient-to-b from-red-600/70 to-black z-0" />
<div class="container px-2 md:px-10 lg:px-20 mt-24 md:mt-28 min-w-full z-10">
	<div class="detail">
		<Details {detail} />
	</div>
	<div class="main mt-20 md:mt-32">
		<Related {detail} />
	</div>
	<div class="main mt-20">
		<Characters {detail} />
	</div>
	<div class="main mt-20">
		<Recommend {detail} />
	</div>
</div>

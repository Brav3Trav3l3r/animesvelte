<script>
	import Characters from '../../../components/id/Characters.svelte';
	import Details from '../../../components/id/Details.svelte';
	import Recommend from '../../../components/id/Recommend.svelte';
	import Related from '../../../components/id/Related.svelte';
	export let data;
	let detail = data.info;
	$: detail = data.info
</script>

<div
	class="absolute h-[50vh] lg: brightness-75 inset-0 bg-gradient-to-b from-zinc-800 to-black z-0"
/>
<div class="container px-2 md:px-10 lg:px-20 mt-24 md:mt-28 min-w-full z-10">
	<div class="detail">
		<Details {detail} />
	</div>
	{#if detail.relations}
		<div class="main mt-20 md:mt-32">
			<Related {detail} />
		</div>
	{/if}
	{#if detail.characters}
		<div class="main mt-20">
			<Characters {detail} />
		</div>
	{/if}
	{#if detail.recommendations}
		<div class="main mt-20">
			<Recommend {detail} />
		</div>
	{/if}

</div>

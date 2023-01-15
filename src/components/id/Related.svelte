<script>
	import Card from '../../shared/Card.svelte';
	export let detail;
	let relations;
	$: relations = detail.relations;
</script>

<div class="related mx-2">
	<h1 class="text-xl text-zinc-400">Related</h1>
	<div class="cards mt-8 flex flex-nowrap overflow-x-auto gap-4 ">

		{#each relations as anime}
			<div class="card w-40 md:w-44 lg:w-48 shrink-0">
				<Card {anime} />
			</div>
		{/each}

</div>
</div>

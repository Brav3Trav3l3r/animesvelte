<script>
	import Card from '../../shared/Card.svelte';
	export let detail;
	let recommend;
	$: recommend = detail.recommendations;
</script>

<div class="related mx-2 ">
	<h1 class="text-xl text-zinc-400">Recommendations</h1>
	<div class="cards mt-8 flex flex-nowrap overflow-x-auto gap-4 ">

			{#each recommend as anime}
				<div class="card w-40 md:w-44 lg:w-48 shrink-0">
					<Card {anime} />
				</div>
			{/each}

	</div>
</div>

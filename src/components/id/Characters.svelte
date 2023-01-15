<script>

	import Card from '../../shared/Card.svelte';
	export let detail;
	let characters;
	$: characters = detail.characters;
</script>

<div class="related mx-2 ">
	<h1 class="text-xl text-zinc-400">Characters</h1>
	<div class="cards mt-8 flex flex-nowrap overflow-x-auto gap-4 ">

			{#each characters as person}
				<div class="card w-28 shrink-0 text-center space-y-4">
					<div class="image rounded-full truncate aspect-square hover:scale-95 transtion duration-200 hover:brightness-75">
						<img src={person.image} alt="">
					</div>
					<div class="name"><h1 class="text-sm text-zinc-300"> {person.name.userPreferred}</h1></div>
				</div>
				
			{/each}

	</div>
</div>

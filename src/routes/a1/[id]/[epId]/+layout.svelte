<script>
	import Aside from "../../../../components/epId/Aside.svelte";

	export let data;
	let info = data.info;
</script>

<div class="main flex flex-col">
	<div class="gradient absolute inset-0 bg-zinc-900/70 lg:left-96 "> </div>
	<div
		class="sticky  sm:relative video top-16 sm:top-0 md:flex-1 lg:ml-96 md:pt-6 md:px-10 xl:px-20"
	>
		<slot>loading</slot>
	</div>
	<Aside {info}/>
</div>


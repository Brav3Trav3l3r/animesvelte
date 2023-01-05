<script>
	import Details from '../../../components/Details.svelte';
	export let data;
	const detail = data.info;
	

	
</script>

<div class="fixed h-[100vh] opacity-40 inset-0 bg-gradient-to-br from-blue-400 to-red-900" />
<div class="watch h-screen w-full ">
	<div class="container px-4 md:px-10 lg:px-20 mt-24">
		<Details {detail}  />
	</div>
</div>

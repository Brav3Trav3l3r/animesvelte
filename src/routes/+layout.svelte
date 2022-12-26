<script>
	import '../app.css';
    import {styles} from '../styles'
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="slot mt-16 max-w-[]1690px">
	<slot />
</div>

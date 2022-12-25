<script>
	import '../app.css';
    import {styles} from '../styles'
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="slot mt-16 px-10 lg:px-20">
	<slot />
</div>

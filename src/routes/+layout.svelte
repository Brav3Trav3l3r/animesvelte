<script>
	import '../app.css';
    import {styles} from '../styles'
	import Navbar from '../components/Navbar.svelte';
</script>

<!-- <div class="image absolute top-0 bottom-0 left-0 right-0 opacity-40  -0 " >
	<img src="./animeposter/gr2.jpg" alt="background" class=" h-full w-full object-cover">
</div> -->
<Navbar />
<div class="slot">
	<slot />
</div>


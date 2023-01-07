<script>
    import {styles} from '../styles/index'
    import Icon from '@iconify/svelte';

    import { onMount } from 'svelte';

  let scrollY = 0;

  onMount(() => {
    // Update the scrollY value when the user scrolls
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    });
  });
</script>

<nav class="{scrollY > 0 ? 'bg-black/60 backdrop-blur': 'bg-black/60 backdrop-blur'} transition-colors border-b-2 border-zinc-900 text-baseline justify-between h-16 px-4 md:px-10 lg:px-20 fixed top-0 drop-shadow-2xl w-screen flex items-center z-50 ">
    <div class="topcontent flex items-center space-x-4 md:space-x-8">
        <Icon icon="gg:menu-left-alt" class={`${styles.navIcons}`}/>
        <a href="/"><h1 class="text-purple-50 text-2xl md:text-3xl font-medium ">aniverse</h1></a>
    </div>

    <div class="itemsend flex items-center space-x-4 md:space-x-8">
        <Icon icon="gg:search" class={`${styles.navIcons}`}/>
        <div class="profile w-10 h-10 rounded-full ring-2 ring-purple-400/40 realtive truncate ">
            <img src="./animeposter/eren.png" alt="profile" class="object-cover w-full h-full">
        </div>
    </div>
</nav>
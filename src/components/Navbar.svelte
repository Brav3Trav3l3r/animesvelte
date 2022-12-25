<script>
    import {styles} from '../styles'
    import Icon from '@iconify/svelte';
</script>

<nav class="text-baseline justify-between h-16 px-10 lg:px-20 fixed top-0 border-b-2 border-zinc-800 bg-zinc-900 w-full flex items-center">
    <div class="topcontent flex items-center space-x-4">
        <Icon icon="gg:menu-left-alt" class={`${styles.navIcons}`}/>
        <h1 class="text-2xl font-bold text-pink-400">ANIVERSE</h1>
    </div>

    <div class="itemsend flex items-center space-x-8">
        <Icon icon="gg:search" class={`${styles.navIcons}`}/>
        <div class="profile w-10 h-10 rounded-full ring-2 ring-pink-400 realtive truncate ">
            <img src="./animeposter/eren.png" alt="profile" class="object-cover w-full h-full">
        </div>
    </div>
</nav>
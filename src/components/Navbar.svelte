<script>
    import {styles} from '../styles/index'
    import Icon from '@iconify/svelte';
</script>

<nav class="text-baseline justify-between h-16 px-4 md:px-10 lg:px-20 fixed top-0 bg-black drop-shadow-2xl w-full flex items-center z-50">
    <div class="topcontent flex items-center space-x-4 md:space-x-8">
        <Icon icon="gg:menu-left-alt" class={`${styles.navIcons}`}/>
        <h1 class="{`${styles.primeColor}`} text-xl md:text-2xl font-semibold ">aniverse</h1>
    </div>

    <div class="itemsend flex items-center space-x-4 md:space-x-8">
        <Icon icon="gg:search" class={`${styles.navIcons}`}/>
        <div class="profile h-8 w-8 md:w-10 md:h-10 rounded-full ring-2 ring-purple-400/40 realtive truncate ">
            <img src="./animeposter/eren.png" alt="profile" class="object-cover w-full h-full">
        </div>
    </div>
</nav>
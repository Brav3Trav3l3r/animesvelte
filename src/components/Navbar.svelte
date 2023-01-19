<script>
    import Modal from '../shared/Modal.svelte';
    import {styles} from '../styles/index'
    import Icon from '@iconify/svelte';

    import { onMount, tick } from 'svelte';


  let inputVal;
  let searchFunc;
  let searchRes;
  $: searchFunc = async ()=>{
      const res = await fetch(`https://api.consumet.org/meta/anilist/${inputVal}`)
      searchRes = await res.json()
    }

  $:console.log(searchRes)

  

  let showModal = false;
  let toggleModal = () => {
    showModal = !showModal;
    inputVal=''
    
  };

  async function autofocus(el) {
		await tick();
		el.focus();
	}

  let scrollY = 0;
  onMount(() => {
    // Update the scrollY value when the user scrolls
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    });
  });
</script>


<div class="modal absolute top-10 z-50">
  <Modal {showModal} on:click={toggleModal}>
    <input type="text" placeholder="Search" class="w-full px-8 py-3 rounded-md text-zinc-200 focus:outline-none bg-slate-800" use:autofocus bind:value={inputVal}>
  </Modal>
</div>

<nav class="{scrollY > 0 ? 'bg-black backdrop-blur': 'bg-black backdrop-blur'}  transition-colors border-b border-zinc-800 text-baseline justify-between h-16 px-4 md:px-10 xl:px-20 fixed top-0 right-0 left-0 drop-shadow-2xl w- flex items-center z-50 ">
    <div class="topcontent flex items-center space-x-4 md:space-x-8">
        <Icon icon="gg:menu-left-alt" class={`${styles.navIcons}`}/>
        <div class="logo flex items-center space-x-4 text-3xl">
          <iconify-icon icon="logos:moon"></iconify-icon>
          <a href="/"><h1 class="text-white text-2xl md:text-3xl font-medium ">aniverse</h1></a>
        </div>
    </div>

    <div class="itemsend flex items-center space-x-4 md:space-x-8">
      <div class="serchIcon"  on:click={toggleModal} on:keypress>
        <Icon icon="gg:search" class={`${styles.navIcons}`}/>

      </div>
        <div class="profile w-10 h-10 rounded-full ring-2 ring-purple-400/40 realtive truncate ">
            <img src="./animeposter/eren.png" alt="profile" class="object-cover w-full h-full">
        </div>
    </div>
</nav>
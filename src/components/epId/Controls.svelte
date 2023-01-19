<script>
    import { onMount } from "svelte";
	import { goto } from '$app/navigation';
    import {currentEp, currentIndex} from '../../store/store'

    import Tooltip from "../../shared/Tooltip.svelte";
    
    export let info
    let eps 
    $: eps= info.episodes ; 
  

    function previous(){
        $currentIndex--
        if($currentIndex <0){
            $currentIndex = eps.length-1   
        }
        currentEp.set(eps[$currentIndex].id)
        currentIndex.set($currentIndex)
        goto(`/a1/${info.id}/${$currentEp}`)
    }


    function next(){
        $currentIndex++
        if($currentIndex >= eps.length){
            $currentIndex = 0   
        }
        currentEp.set(eps[$currentIndex].id)
        currentIndex.set($currentIndex)
        goto(`/a1/${info.id}/${$currentEp}`)
    }


</script>

<div class="fixed h-16 lg:ml-96 inset-x-0 bg-zinc-900 border-t border-zinc-700/80 bottom-0 grid grid-cols-2 lg:grid-cols-3 px-4 ">
		
    <div class="episodes hidden lg:flex flex-col justify-center overflow-hidden">
        <div class="episode flex space-x-2 group ">    
            <h1 class="text-purple-400 font-bold ">{eps[$currentIndex].number}</h1>
            <h1 class="text-zinc-100 line-clamp-1 cursor-pointer">{eps[$currentIndex].title}</h1>

        </div>
        <a href={`/a1/${info.id}`}  class="cursor-pointer hover:underline underline-offset-2 text-zinc-400 text-sm line-clamp-1">{info.title.english?info.title.english:info.title.romaji }</a>
    </div>

    <div class="controls flex space-x-2 text-4xl items-center col-span-1 lg:justify-self-center">
        <div
            class="prev cursor-pointer active:text-zinc-400 text-zinc-400 hover:text-zinc-300 rounded-full aspect-square overflow-hidden "
            on:click={previous} on:keydown
        >
            <iconify-icon icon="ri:skip-back-mini-fill" />
        </div>
        <div
            class="play cursor-pointer rounded-full active:scale-90 transition text-purple-50 active:text-purple-200 aspect-square overflow-hidden text-5xl"
        >
            <iconify-icon icon="ic:baseline-pause-circle"></iconify-icon>
        </div>
        <div
            class="next cursor-pointer active:text-zinc-400 text-zinc-400  hover:text-zinc-300 rounded-ful aspect-square overflow-hidden"
            on:click={next} on:keydown>
            <iconify-icon icon="ri:skip-forward-mini-fill" />
        </div>
    </div>

    <div class="extra flex text-2xl space-x-2 items-center col-span-1 text-zinc-500 justify-self-end">
        <div class="fullsecreen hover:bg-black hover:text-zinc-300 aspect-square p-2 flex rounded-full  truncate overflow-hidden">
            <iconify-icon icon="ic:round-settings"></iconify-icon>
        </div>
        <div class="camera hover:bg-black  hover:text-zinc-300 p-2 aspect-square rounded-full flex truncate overflow-hidden">
            <iconify-icon icon="ic:baseline-camera"></iconify-icon>
        </div>
        <div class="fullsecreen hover:bg-black hover:text-zinc-300 aspect-square p-2 flex rounded-full  truncate overflow-hidden">
            <iconify-icon icon="ic:round-fullscreen"></iconify-icon>
        </div>
    </div>
</div>
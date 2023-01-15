<script>
    export let episode
    export let info
</script>

<div class="fixed h-16 lg:ml-96 inset-x-0 bg-zinc-900/60 bottom-0 grid grid-cols-2 lg:grid-cols-3 px-4 ">
		
    <div class="episodes hidden lg:flex flex-col justify-center overflow-hidden">
        <div class="episode flex space-x-2 ">
        
            <h1 class="text-purple-400 font-bold ">{episode[0].number}</h1>
            <h1 class="text-zinc-100 line-clamp-1">{episode[0].title}</h1>
        </div>
        <h1 class="text-zinc-400 text-sm line-clamp-1">{info.title.english?info.title.english:info.title.romaji }</h1>
    </div>

    <div class="controls flex space-x-2 text-4xl items-center col-span-1 lg:justify-self-center">
        <div
            class="prev text-zinc-400 hover:text-zinc-200 rounded-full aspect-square overflow-hidden "
        >
            <iconify-icon icon="ri:skip-back-mini-fill" />
        </div>
        <div
            class="play rounded-full hover:scale-110 transition duration-200 aspect-square overflow-hidden text-5xl"
        >
            <!-- <iconify-icon icon="ri:play-circle-fill" /> -->
            <iconify-icon icon="ic:baseline-pause-circle"></iconify-icon>
        </div>
        <div
            class="next text-zinc-400  hover:text-zinc-200 rounded-ful aspect-square overflow-hidden "
        >
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
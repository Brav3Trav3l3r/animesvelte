const Characters = async({id}) => {

    const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}`)
    const detail = await res.json()

    return ( 

<div class="related mx-2 ">
	<h1 class="text-xl text-zinc-400">Characters</h1>
	<div class="cards mt-8 flex flex-nowrap overflow-x-auto gap-4 ">

			{detail && detail.characters.map(char=>(
				<div class="card w-28 shrink-0 text-center space-y-4">
					<div class="image rounded-full truncate aspect-square hover:scale-95 transtion duration-200 hover:brightness-75">
						<img src={char.image} alt=""/>
					</div>
					<div class="name"><h1 class="text-sm text-zinc-300"> {char.name.userPreferred}</h1></div>
				</div>
				
			))}

	</div>
</div>

     );
}
 
export default Characters;
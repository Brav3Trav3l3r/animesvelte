import Card from "../Shared/Card";

const Recommend = async({id}) => {
    
	const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}`)
    const detail = await res.json()
    return ( 
        
<div class="related mx-2 ">
	<h1 class="text-xl text-zinc-400">Recommendations</h1>
	<div class="cards mt-8 flex flex-nowrap overflow-x-auto gap-4 ">

            {detail && detail.recommendations.map(anime=>(
                <div class="card w-40 md:w-44 lg:w-48 shrink-0">
                <Card anime={anime} />
            </div>
            ))}

	</div>
</div>

     );
}
 
export default Recommend;
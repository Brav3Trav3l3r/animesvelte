import Link from "next/link";

const Card = ({anime}) => {
    return ( 
        <Link href={`/${anime.id}`}><div class="card bg-zinc-900/80 hover:bg-zinc-800 sm:hover:-translate-y-1 transform duration-200 p-3 pb-4 rounded-md flex flex-col space-y-3 ">
    <div class="image relative overflow-hidden rounded truncate aspect-[2/3] ">
        <img src={anime.image} alt="" class="w-full h-full object-cover opacity-90"/>
    </div>
    <h1 class="text-purple-100/80 text-sm md:text-base line-clamp-1">{anime.title.romaji?anime.title.romaji: anime.title.english }</h1>
    
</div></Link>
     );
}
 
export default Card;
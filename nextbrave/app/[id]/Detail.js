import parse from 'html-react-parser';

import Link from 'next/link';
import { BsPlayCircleFill } from 'react-icons/bs';
import { SiAnilist } from 'react-icons/si';


const Detail = async ({id}) => {
	
	const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}`)
    const detail = await res.json()
    return ( 

		<div class="info mx-2 relative ">
			{detail.episodes.length > 0 ? ( 
		<a href={`/${detail.id}/${detail.episodes[0].id}`}
			><div class="play fixed bottom-4 right-4 md:hidden z-50 active:scale-90">
				<BsPlayCircleFill class="text-5xl text-purple-400 active:scale-90 transition duration-200" />
			</div></a>) : ''}
	
		<div class="flex flex-col md:flex-row md:items-end max-w-6xl md:space-x-16">
			<div class="image h-[35vh] md:h-[45vh] aspect-[2/3] select-none drop-shadow-2xl w-fit">
				<img src={detail.image} alt="poster" class="h-full object-cover rounded brightness-90" />
			</div>
	
			<div class="info mt-8 md:mt-0 space-y-6">
				<div class="group">
					<h1 class="text-3xl text-zinc-100">{detail.title.romaji}</h1>
					<div class="group1 flex space-x-8 mt-2 text-zinc-400">
						<h1>{detail.releaseDate}</h1>
						<div class="rating flex items-center space-x-2">
							<SiAnilist class="text-blue-500 text-lg" />
							<h1>{detail.rating}</h1>
						</div>
					</div>
				</div>
				{detail.episodes.length > 0 ? ( 
				<Link href={`/${detail.id}/${detail.episodes[0].id}`}
					><di class="play hidden md:block mt-8">
						<button class="bg-purple-500 text-purple-50 px-6 flex-1 py-2 active:scale-90 rounded font-semibold ">Play</button>
					</di></Link>) : (<div className="no"><h1 className='text-zinc-200'>No videos are available for this <span className='text-purple-400'>{detail.type}</span></h1></div>)
		 		}
	
				<div class="description text-zinc-400 ">
					{parse(`<p class="line-clamp-4 text-sm max-w-prose">${ detail.description}</p> `)}
					
				</div>
				<div class="group2  ">
					<div class="studios flex space-x-8 md:space-x-10">
						<h1 class="text-zinc-500 ">Sudios</h1>
						<h1 class="text-zinc-300">{ detail.studios}</h1>
					</div>
					<div class="genres flex space-x-8 md:space-x-10 align-bottom">
						<h1 class="text-zinc-500 ">Genres</h1>
						<h1 class="line-clamp-1 text-zinc-300">{ detail.genres}</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
	
     );
}
 
export default Detail;
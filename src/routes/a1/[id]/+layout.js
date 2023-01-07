import { META } from "@consumet/extensions"
import { episode } from "./[epId]/store"
import { tempAnime } from "./store";


const anilist = new META.Anilist()

export async function load({params}){
    const info = await anilist.fetchAnimeInfo(params.id)

    return {
        headers: {
            'cache-control': 'public, max-age=3600'
          },
        info    
    }
}
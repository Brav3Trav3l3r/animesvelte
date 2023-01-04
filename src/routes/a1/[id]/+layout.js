import { META } from "@consumet/extensions"
import { episode } from "./[epId]/store"
import { tempAnime } from "./store";


const anilist = new META.Anilist()

export async function load({fetch,params}){
    const info = await anilist.fetchAnimeInfo(params.id)
    tempAnime.set(info.episodes[0].id)

    return {
        info    
    }
}
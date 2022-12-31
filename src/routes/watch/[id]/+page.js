import { META } from "@consumet/extensions"

const anilist = new META.Anilist()

export async function load({params}){
    const info = anilist.fetchAnimeInfo(params.id)

    return {
        info
    }
}
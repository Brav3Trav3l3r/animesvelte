import { META } from "@consumet/extensions"

const anilist = new META.Anilist()

export async function load({params}){
    const info = await anilist.fetchAnimeInfo(params.id)
    console.log(' fetched info ')

    return {
        headers: {
            'cache-control': 'public, max-age=3600'
          },
        info    
    }
}
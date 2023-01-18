import { META } from "@consumet/extensions"

const anilist = new META.Anilist()

export async function load({params, setHeaders }){
    const fetchInfo = async()=>{
        const info = await anilist.fetchAnimeInfo(params.id)
        return info
    }

    return {
        info: fetchInfo()    
    }
}
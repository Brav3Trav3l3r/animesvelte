
import { META } from "@consumet/extensions"

const anilist = new META.Anilist()

export async function load() {
   
        const fdata1 = async()=>{
            const trenddata = anilist.fetchTrendingAnime(null,18)
            return trenddata
        }
        const fdata2 = async()=>{
            const recentdata = anilist.fetchRecentEpisodes(null,12)
            return recentdata
        }
        const fdata3 = async()=>{
            const popdata = anilist.fetchPopularAnime(null,18)
            return popdata
        }

    return{
        
        data1: fdata1(),
        data2: fdata2(),
        data3: fdata3()
    }
}



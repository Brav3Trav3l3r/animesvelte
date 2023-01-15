
import { META } from "@consumet/extensions"

const anilist = new META.Anilist()

let data1;
let data2;
let data3;
let error;
let loading = true;

export async function load() {
    try {

        data1 = anilist.fetchTrendingAnime(null,18)
        data2 = anilist.fetchRecentEpisodes(null,12)
        data3 = anilist.fetchPopularAnime(null,18)


        loading = false;
    } catch (e) {
        error = e;
        loading = false;  
    }



    return{
        
        data1,data2, data3
    }
}



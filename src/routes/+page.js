
import { META } from "@consumet/extensions"

const anilist = new META.Anilist()

let data1;
let data2;
let data3;
let error;
let loading = true;

export async function load({fetch}) {
    try {
        // const response1 = await fetch('https://api.consumet.org/meta/anilist/trending?perPage=12');
        // data1 = await response1.json();
        // const response2 = await fetch('https://api.consumet.org/meta/anilist/recent-episodes');
        // data2 = await response2.json();
        // const response3 = await fetch('https://api.consumet.org/meta/anilist/popular?perPage=12');
        // data3 = await response3.json();

        data1 = anilist.fetchTrendingAnime(null,18)
        data2 = anilist.fetchRecentEpisodes(null,18)
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



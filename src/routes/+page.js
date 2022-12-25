
let data1;
let data2;
let data3;
let error;
let loading = true;

export async function load() {
    try {
        const response1 = await fetch('https://api.consumet.org/meta/anilist/trending');
        data1 = await response1.json();
        const response2 = await fetch('https://api.consumet.org/meta/anilist/recent-episodes');
        data2 = await response2.json();
        const response3 = await fetch('https://api.consumet.org/meta/anilist/popular');
        data3 = await response3.json();



        loading = false;
    } catch (e) {
        error = e;
        loading = false;  
    }
    return{
        data1,data2, data3
    }
}



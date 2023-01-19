
function serch(key, array){
    for(let n of array){
        if(n.quality === key){
            return n.url
        }
    }
}

export async function load({params}){
    
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${params.epId}`)
    const data = await res.json()
    const sources = await data.sources
    const url = await serch('default', sources) 

    return{
        params: params.epId,
        url
    }
}


export async function load({params}){
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${params.epId}`)
    const data = await res.json()
    const tempurl = data.sources.filter(n=> n.quality === 'default')
    const url = tempurl[0].url

    return{
        params: params.epId,
        url
    }
}
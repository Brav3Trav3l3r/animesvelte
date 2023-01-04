import {episode} from './store'
import { tempEpisode } from '../store'

export async function load({fetch, params}){
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${params.epId}`)
    const data = await res.json()
    const url = data.sources[0].url
    tempEpisode.set(url)

    return{
        params: params.epId,
        url
    }

} 
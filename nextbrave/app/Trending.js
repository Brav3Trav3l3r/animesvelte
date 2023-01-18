import Cardgroup from "./Shared/Cardgroup";

const Trending = async () => {

    const res = await fetch('https://api.consumet.org/meta/anilist/trending?perPage=12')
    const trend = await res.json()
    return ( 
        <div className="trend">

            <Cardgroup data={trend} title={'Trending'} />
        </div>

     );
}
 
export default Trending;
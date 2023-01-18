import Detail from "./Detail";
import Recommend from "./Recommend";
import Relations from "./Relations";
import Characters from "./Characters";

const Info = async ({params}) => {
    
    return ( 
        <div className="info">
            <div class="absolute h-[50vh] lg: brightness-75 inset-0 bg-gradient-to-b from-zinc-700/70 to-black z-0" />
			<div class="container px-2 md:px-10 lg:px-20 mt-24 md:mt-28 min-w-full z-10">
				<div class="detail">
					<Detail id={params.id} />
				</div>
				<div class="main mt-20 md:mt-32">
					<Relations id={params.id} />
				</div>
				<div class="main mt-20">
					<Characters id={params.id}  />
				</div>
				<div class="main mt-20">
					<Recommend id={params.id} />
				</div>
			
			</div>
        </div>
     );
}
 
export default Info;
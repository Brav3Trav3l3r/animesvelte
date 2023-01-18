import Card from './Card'

const Cardgroup = ({data, title}) => {

    return (
        <div class="cardgroup px-4 md:px-10 lg:px-20 mt-28">
	<div class="title mb-8 border-b-2 border-zinc-900 pb-2">
		<h1 class='text-zinc-400 text-2xl'>{title}</h1>
	</div>
	<div class="card-group grid grid-cols-2 min-[550px]:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-8">
        {data && data.results.map(anime=>(
            <div className="card">
                <Card anime={anime}/>
            </div>
        ))}
        
	</div>
</div>
      );
}
 
export default Cardgroup;
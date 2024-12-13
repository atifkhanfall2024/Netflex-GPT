
import MovieCards from "./Moviecards"

const MovieList  = ({title , movie})=>{
 
    // i have already 20 movies in store present so simply use here 


    return(
        <div className="px-12">
            <h1 className="text-xl py-4 text-white">{title}</h1>
            <div
              style={{
                overflowX: "scroll",
                msOverflowStyle: "none", // For IE and Edge
                scrollbarWidth: "none", // For Firefox
              }}
             className="flex overflow-x-scroll">
                <div className="flex  ">
                {movie.map((movie)=>  (<MovieCards key={movie.id} path = {movie.poster_path} />))}
                </div>
            </div>
         
        </div>
    )
}

export default MovieList
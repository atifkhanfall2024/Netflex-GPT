import MovieList from "./MovieList"
import { useSelector } from "react-redux"
const Secondary  = ()=>{

  
    const movie = useSelector(store=>store?.movie?.Movies)
    const Popular = useSelector(populars=>populars?.movie?.Popular)
    const Trending = useSelector(trend=>trend?.movie?.Trending)
  
     // now 20 movies from store is avalible with me

     if(!movie) return null ;
   if(!Popular) return null
   if(!Trending) return null
   
    return(
        <div className= " bg-black">
            <div className="-mt-[20%] relative z-10 ">
         <MovieList title = {"Now Playing Movies"}  movie = {movie}/>
         <MovieList title = {"Popular"}  movie = {Popular}/>
         <MovieList title = {"Trending "}  movie = {Trending}/>
         <MovieList title = {"Bollywood"}  movie = {movie}/>
        </div>
        </div>
    )
}

export default Secondary
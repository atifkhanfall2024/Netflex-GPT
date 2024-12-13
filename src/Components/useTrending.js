
import { useEffect } from "react"
import { Trend } from "../utils/Constant"
 import { options } from "../utils/Constant"
import { useDispatch } from "react-redux"
import { Trending } from "../utils/MoviesSlice"

const UseTrending = ()=>{

    const dispatch = useDispatch()
     // using use effect to call this api only once

      useEffect(()=>{
        PlayingMovies()
      } ,[])




    // fetching the data 

     const PlayingMovies = async ()=>{

        const data = await fetch(Trend, options)

        const json = await data.json()

      
        
        dispatch(Trending(json.results))
     } 




}

export default UseTrending 
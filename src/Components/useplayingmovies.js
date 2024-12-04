
 import { useEffect } from "react"
import { API } from "../utils/Constant"
 import { options } from "../utils/Constant"
import { useDispatch } from "react-redux"
import { Addmovies } from "../utils/MoviesSlice"

const Useplayingmovies = ()=>{

    const dispatch = useDispatch()
     // using use effect to call this api only once

      useEffect(()=>{
        PlayingMovies()
      } ,[])




    // fetching the data 

     const PlayingMovies = async ()=>{

        const data = await fetch(API, options)

        const json = await data.json()

        console.log(json.results);
        
        dispatch(Addmovies(json.results))
     } 




}

export default Useplayingmovies 
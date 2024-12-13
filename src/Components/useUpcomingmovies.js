import { useEffect } from "react"
import { APIs } from "../utils/Constant"
 import { options } from "../utils/Constant"
import { useDispatch } from "react-redux"
import {  Pop } from "../utils/MoviesSlice"

const Usepopular  = ()=>{

    const dispatch = useDispatch()
     // using use effect to call this api only once

      useEffect(()=>{
        PlayingMovies()
      } ,[])




    // fetching the data 

     const PlayingMovies = async ()=>{

        const data = await fetch(APIs, options)

        const json = await data.json()

      
        
        dispatch(Pop(json.results))
     } 




}

export default Usepopular 
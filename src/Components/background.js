import { useEffect, useState } from "react"
import { options } from "../utils/Constant"
const Background = ({mytitle})=>{

     // using state variable to get key of trailer

     const [trailerid , settrailerid] = useState(null)

           

           // now i  using here an api call 

           const BackgroundApi = async()=>{

            const data = await fetch('https://api.themoviedb.org/3/movie/912649/videos?language=en-US' , options)

            const json = await data.json()
            
            const filterdata = json.results.filter((vedio)=> vedio.type === "Tralier")
            
            const trailer = filterdata.length ? filterdata[0] : json.results[9]
            
            settrailerid(trailer.key)
          
           }

           // here using use effect 
           useEffect(()=>{
           BackgroundApi()
           } ,[])

    return(
        <div className="w-screen">
        <iframe  className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerid + "?&autoplay=1&mute=1"} 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}



export default Background
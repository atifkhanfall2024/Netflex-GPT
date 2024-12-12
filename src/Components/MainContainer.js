import { useSelector } from "react-redux"
import Title
 from "./Title"
 import Background from "./background"
const MainContainer = ()=>{

    // to read the data from the store we use use selector 

    const Movie = useSelector(store=> store.movie?.Movies)

    if(!Movie) return null 

     const Get_Movie = Movie[5]
     console.log(Get_Movie)
    
      const {id}  = Get_Movie
    return(
        <div>
           <Title  title = {Get_Movie}/>
           <Background mytitle = {id}/> 
        </div>
    )
}

export default MainContainer
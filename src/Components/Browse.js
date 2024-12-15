import Header from "./Header"
import Useplayingmovies from "./useplayingmovies"
import Main from "./MainContainer"
import Secondary from "./Secondary"
import Usepopular from "./useUpcomingmovies"
import UseTrending from "./useTrending"
import Links from "./Links"
import { useSelector } from "react-redux"
import GPT from "./GPT"
const Browse = ()=>{

    // read here gpt file 

    const showme = useSelector(store=>store?.gpt?.Gpt_togggle)

    Useplayingmovies();
    Usepopular();
    UseTrending();
    return(
        <div>
           <Header/>
        
           <Links/>
        {showme ?   <GPT/> :
        <>
           <Main/>
           <Secondary/>
           </>
           }
        </div>
    )
}
export default Browse
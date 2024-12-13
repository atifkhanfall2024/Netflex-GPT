import Header from "./Header"
import Useplayingmovies from "./useplayingmovies"
import Main from "./MainContainer"
import Secondary from "./Secondary"
import Usepopular from "./useUpcomingmovies"
import UseTrending from "./useTrending"
import Links from "./Links"
const Browse = ()=>{

    Useplayingmovies();
    Usepopular();
    UseTrending();
    return(
        <div>
           <Header/>
           <Links/>
           <Main/>
           <Secondary/>
        </div>
    )
}
export default Browse
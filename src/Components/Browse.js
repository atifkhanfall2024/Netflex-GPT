import Header from "./Header"
import Useplayingmovies from "./useplayingmovies"
import Main from "./MainContainer"
import Secondary from "./Secondary"
const Browse = ()=>{

    Useplayingmovies();
    return(
        <div>
           <Header/>
           <Main/>
           <Secondary/>
        </div>
    )
}
export default Browse
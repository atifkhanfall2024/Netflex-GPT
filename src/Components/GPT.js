import Getmovie from "./GPT_Moviesuggestion"
import GPTSearch from "./GPT_Search"

const GPT = ()=>{
    return(
        <div>
                 <div className="absolute " style={{backgroundColor:222}}>
        <img className="" src="https://i.pinimg.com/originals/b5/4a/07/b54a07d4387881ebaf3249d4f5f0ede6.jpg" alt="logo" />
      </div>
            <GPTSearch/>
            <Getmovie/>
       
        </div>
    )
}

export default GPT
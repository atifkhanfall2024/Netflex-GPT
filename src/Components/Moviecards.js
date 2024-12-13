import { Cloudinary_IMG } from "../utils/Constant"

const MovieCards  = ({path
})=>{
  //  console.log(path);
    return(
        <div>
          
          <div  className="w-36 pr-4 hover:scale-[120%] transition-transform duration-300 ">
            <img  alt="now playing" src={Cloudinary_IMG  + path} />
          </div>
        </div>
    )
}

export default MovieCards
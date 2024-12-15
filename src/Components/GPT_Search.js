import { useSelector } from "react-redux"
import lang from "../utils/Languages"
const GPTSearch = ()=>{

       const user = useSelector(store=> store?.Lan?.config)
      // console.log(user);
    return(
        <div className="relative pt-[18%]  flex justify-center">
            <form onSubmit={(e)=>e.preventDefault()} className="w-[50%] bg-black p-2 rounded-lg pl-3 grid grid-cols-12 ">
                <input className="p-3 m-2 px-[20%] rounded-lg col-span-9"type="text" placeholder={lang[user].placeholder} />
                <button className="bg-red-600 text-white p-3 m-2 px-7 rounded-lg col-span-3 ">{lang[user].search}  </button>
            </form>
        </div>
    )
}

export default GPTSearch
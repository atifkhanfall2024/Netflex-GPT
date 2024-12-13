const Title = ({title
    })=>{
        const {original_title , overview} = title
       
    return(
        <div className="absolute  z-0 pt-[15%] py-36 px-12 text-white w-screen aspect-video  bg-gradient-to-t from-black">
            <h1 className=" py-5 text-4xl font-bold">{original_title}</h1>
            <p className="w-1/2" >{overview}</p>
            <div className="flex space-x-2">
                <button className="bg-white text-lg text-black p-2 my-3 hover:bg-opacity-60 rounded-lg">▶ Play Now</button>
                <button className="bg-gray-700 text-lg text-white p-2 my-3 rounded-lg"> More info</button>
            </div>
        </div>
    )
}

export default Title
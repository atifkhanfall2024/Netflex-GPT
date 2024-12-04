const Title = ({title
    })=>{
        const {original_title , overview} = title
       
    return(
        <div className="absolute pt-[20%] py-36 px-12 text-white w-screen aspect-video  bg-gradient-to-t from-black">
            <h1 className=" py-5 text-3xl font-bold">{original_title}</h1>
            <p className="" style={{width:"50%"}}>{overview}</p>
            <div className="flex space-x-2">
                <button className="bg-white text-lg text-black p-2 my-3 hover:bg-opacity-70">▶ Play Now</button>
                <button className="bg-black text-lg text-white p-2 my-3"> More info</button>
            </div>
        </div>
    )
}

export default Title
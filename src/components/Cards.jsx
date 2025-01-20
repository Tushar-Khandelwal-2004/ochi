
function Cards() {
  return (
    <div className="bg-[#F1F1F1] w-full h-screen flex items-center gap-5 px-12">
      <div className="cardcontainer w-1/2 h-[65vh]">
        <div className="card relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center  ">
          <img className="w-36" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute left-8 bottom-9 px-2 py-1 rounded-full border-[1px] text-[#CDEA68] border-[#CDEA68] text-sm ">&copy;2019-2022</button>
        </div>
      </div>

      <div className="cardcontainer w-1/2 h-[65vh] flex gap-5">
        <div className=" relative card rounded-xl w-1/2 h-full flex items-center justify-center  bg-[#212121]  ">
          <img className="w-36" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute left-8 bottom-9 px-2 py-[0.5px] rounded-full text-zinc-100 border-[1px] uppercase text-sm">rating 5.0 on clutch</button>
        </div>
        
        <div className=" relative card rounded-xl w-1/2 h-full flex items-center justify-center  bg-[#212121]  ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className="w-28" />
          <button className="absolute left-8 bottom-9 px-6 py-1 rounded-full text-zinc-100 border-[1px] uppercase leading-none text-sm "><span className="block">business bootcamp</span> alumni</button>
        </div>

      </div>
    </div>
  )
}

export default Cards
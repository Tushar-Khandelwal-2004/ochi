import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-36 px-20">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div className="masker ">
                        <div className="w-fit flex items-center">
                            {index===1 && (<div className="relative rounded-md mt-[12.5px] mr-[1vw] w-[11vw] h-[6.2vw] bg-white"></div>)}
                        <h1 className="uppercase text-9xl leading-[7.5vw] font-custom font-medium">{item}</h1>

                        </div>
                    </div>
                })}
            </div>

            <div className="border-t-[1px] border-zinc-100 mt-24 flex justify-between items-center px-10 py-2  ">
                {["For public and private companies", "From the first pitch to IPO"].map((item) => <p className="text-md font-light tracking-tight leading-none">{item}</p>)}
                <div className="start flex items-center gap-5 ">
                    <div className="px-4 py-2 border-[1px] font-light text-sm border-zinc-100 rounded-full leading-none">START THE PROJECT</div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-100  ">
                        <span className="rotate-[45deg] "><FaArrowUpLong/></span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default LandingPage
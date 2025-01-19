import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-36 px-20">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div className="masker ">
                        <div className="w-fit flex items-end ">
                            {index===1 && (<div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-[0.9vw] relative bg-green-500"></div>)}
                        <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-custom ">{item}</h1>

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
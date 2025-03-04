import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import ochi from "../assets/ochi.png"
import Button2 from "./Button2";
function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-[#F1F1F1] pt-1">
            <div className="flex w-full justify-between ">
                <div className="textstructure mt-36 px-20 ">
                    {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                        return <div className="masker ">
                            <div className="w-fit flex items-end ">
                                {index === 1 && (<motion.div initial={{ width: 0, }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-[0.9vw] relative overflow-hidden"><img className="w-full h-full" src={ochi} alt="ochi" /></motion.div>)}
                                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-custom ">{item}</h1>

                            </div>
                        </div>
                    })}
                </div>
                <div className="bg-[#E73C37] mt-36 h-[30vh] w-[5vw] text-zinc-100 flex flex-col items-center pt-2">
                    <div className="text-2xl font-bold">
                        W.
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center text-md transform -rotate-90 whitespace-nowrap">
                            Site of the Day
                        </div>
                    </div>
                </div>


            </div>


            <div className="border-t-[1px] border-zinc-900 mt-20 flex justify-between items-center px-10 py-2  ">
                {["For public and private companies", "From the first pitch to IPO"].map((item) => <p className="text-md font-light tracking-tight leading-none">{item}</p>)}
                <div className="start flex items-center gap-5 pt-1 ">
                    <Button2 text="START THE PROJECT" track={true}/>
                    {/* <div className="px-4 py-2 border-[1px] font-light text-md border-zinc-900 rounded-full leading-none">START THE PROJECT</div> */}
                    <div className="-ml-3 w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-900  ">
                        <span className="rotate-[45deg] "><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default LandingPage
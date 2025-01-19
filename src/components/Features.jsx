import { span } from "framer-motion/client"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
function Features() {
    return (
        <div className="w-full py-10 bg-[#F1F1F1]">
            <div className="w-full px-10 border-b-[1px] border-[#a1b562] pb-5">
                <h1 className="text-[4vw] font-custom2 tracking-tight">Featured Projects</h1>
            </div>
            <div className="px-12">
                <div className="cards w-full flex gap-5 mt-16">
                    <div className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className="absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 leading-none font-custom text-9xl uppercase whitespace-nowrap">
                            {"cardboard spacechip".split('').map((item,index)=><span>{item}</span>)}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden relative">
                            <img src={image1} alt="Card 1" className="w-full h-full bg-cover relative z-10" />
                        </div>
                    </div>

                    <div className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className="absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-20 leading-none font-custom text-9xl uppercase whitespace-nowrap">
                            {"Ah2 & matt horn".split('').map((item,index)=><span>{item}</span>)}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden relative">
                            <img src={image2} alt="Card 1" className="w-full h-full bg-cover relative z-10" />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features

{/* <div className="cardcontainer relative w-1/2 h-[80vh]   ">
                    <h1 className="absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-9 leading-none font-custom text-9xl uppercase">FYDE</h1>
                    <div className="card w-full h-full rounded-xl  overflow-hidden">
                        <img src={image1} alt="" className="w-full h-full bg-cover" />
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[80vh]   ">
                    <h1 className="absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-9 leading-none font-custom text-9xl">VISY</h1>
                    <div className="card w-full h-full rounded-xl  overflow-hidden">
                        <img src={image2} alt="" className="w-full h-full bg-cover" />
                    </div>
                </div> */}
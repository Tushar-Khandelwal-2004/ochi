// import { span } from "framer-client"
import { useState } from "react"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import { Power4 } from "gsap"
import { delay, motion, useAnimation } from "framer-motion"
import Button2 from "./Button2"
function Features() {

    const cards = [useAnimation(), useAnimation()];


    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }
    return (
        <div className="w-full bg-[#F1F1F1]">
            <div className="w-full px-12 border-b-[1px] border-[#a1b562] pb-5">
                <h1 className="text-[4vw] font-custom2 tracking-tight">Featured Projects</h1>
            </div>
            <div className="px-12 mt-10">

            <div className="flex">
                    <div className="uppercase w-1/2 flex items-center gap-2">
                        <div className="w-[10px] h-[10px] rounded-full bg-zinc-900"></div>
                        vise
                    </div>
                    <div className="uppercase w-1/2 flex items-center gap-2 pl-2">
                        <div className="w-[10px] h-[10px] rounded-full bg-zinc-900"></div>
                        fyde
                    </div>
                </div>

                <div className="cards w-full flex gap-5 mt-3">

                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[80vh]"
                    >
                        <h1 className="flex overflow-hidden absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 leading-none font-custom text-9xl uppercase whitespace-nowrap">
                            {"vise".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden relative cursor-pointer">
                            <motion.img
                                src={image1}
                                alt="Card 1"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[80vh]"
                    >
                        <h1 className="flex overflow-hidden absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-20 leading-none font-custom text-9xl uppercase whitespace-nowrap">
                            {"fyde".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden relative cursor-pointer">
                            <motion.img
                                src={image2}
                                alt="Card 1"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                    </motion.div>

                </div>
                <div className="pt-4">
                    <div className="flex">
                        <div className="w-1/2 flex gap-2">
                            <div><Button2 text="audit" /></div>
                            <div><Button2 text="copywriting" /></div>
                            <div><Button2 text="sales deck" /></div>
                            <div><Button2 text="slides design" /></div>
                        </div>
                        <div className="w-1/2 pl-[9px] flex gap-2">
                            
                            <div><Button2 text="Agency" /></div>
                            <div><Button2 text="company presentation" /></div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
//Motion.div->

{/* <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[80vh] ">
                        <h1 className="flex overflow-hidden absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 leading-none font-custom text-9xl uppercase whitespace-nowrap">
                            {"vise".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className="inline-block"  >{item}</motion.span>)}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden relative">
                            <img src={image1} alt="Card 1" className="w-full h-full bg-cover relative z-10" />
                        </div>
                    </motion.div> */}


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
import image1 from "../assets/trawa.jpg"
import image2 from "../assets/pleta.png"
import { Power4 } from "gsap"
import { delay, motion, useAnimation } from "framer-motion"
import Button2 from "./Button2";
function FeatureCard() {
    const cards = [useAnimation(), useAnimation()];


    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }
    return (
        <div className="w-full py-10 bg-[#F1F1F1]">

            <div className="px-12">
                <div className="flex">
                    <div className="uppercase w-1/2 flex items-center gap-2">
                        <div className="w-[10px] h-[10px] rounded-full bg-zinc-900"></div>
                        trawa
                    </div>
                    <div className="uppercase w-1/2 flex items-center gap-2 pl-2">
                        <div className="w-[10px] h-[10px] rounded-full bg-zinc-900"></div>
                        pleta
                    </div>
                </div>
                <div className="cards w-full flex gap-5 mt-3">

                    <motion.div

                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[80vh]"

                    >

                        <h1 className="flex overflow-hidden absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 leading-none font-custom text-9xl uppercase whitespace-nowrap">
                            {"trawa".split("").map((item, index) => (
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
                            {"pleta".split("").map((item, index) => (
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
                            <div><Button2 text="brand identity" /></div>
                            <div><Button2 text="design research" /></div>
                            <div><Button2 text="investor deck" /></div>
                        </div>
                        <div className="w-1/2 pl-[9px]">
                            <Button2 text="branded template" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
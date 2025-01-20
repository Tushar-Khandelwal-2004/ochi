import { motion } from "framer-motion"

const Marque = () => {
  return (
    <div className="h-[70vh] w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]">
        <div className="text border-t-2 border-b-2 border-zinc-100 flex  overflow-hidden whitespace-nowrap ">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className="text-[25vw] font-semibold uppercase  pt-1 -mt-[3.7vw] text-white leading-none font-custom ">We Are Ochi&nbsp;</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className="text-[25vw] font-semibold uppercase  pt-1 -mt-[3.7vw] text-white leading-none font-custom ">We Are Ochi&nbsp;</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className="text-[25vw] font-semibold uppercase  pt-1 -mt-[3.7vw] text-white leading-none font-custom ">We Are Ochi&nbsp;</motion.h1>
        </div>
    </div>
  )
}

export default Marque
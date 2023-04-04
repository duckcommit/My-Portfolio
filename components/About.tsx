import { motion } from "framer-motion"
import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs"

type Props = {}

export default function About({}: Props) {
  return (
    <div>
    <div className="relative flex flex-col h-screen text-center justify-evenly items-center max-w-7xl px-10 mx-auto md:text-left md:flex-row">

      <h3 className="absolute top-28 items-center uppercase tracking-[20px] text-[rgb(30,215,96)] ml-3">About</h3>

      <motion.img 
      initial={{opacity:0, x:-200}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:1.2}}
      viewport={{once:true}}
      className="relative top-24 sm:top-16 md:top-0 flex-shrink-0 rounded-full w-36 sm:w-44 object-cover md:rounded-lg md:w-72 xl:w-[400px]" src='https://i.postimg.cc/90XNfdtX/IMG20230305132806.webp'/>

      <motion.div
      initial={{opacity:0, scale:0.9}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1.2}}
      viewport={{once:true}}
      className="relative space-y-8 px-0 md:px-10">
        <h4 className="tracking-wide text-2xl sm:text-4xl font-bold invisible sm:visible">This is <span className="underline decoration-[#1DB954] hover:underline-offset-8 cursor-pointer">My Story</span>...</h4>

        <p className="text-sm sm:text-lg font-extralight lg:text-xl tracking-wide text-left">I am a 19-year-old Python Developer who works on Piano and Photography as a passion. Coming from a coding background, I am a Python Backend Developer interested in Flutter Dev and Cloud Computing—exploring the deep sea of domains.</p>
      </motion.div>
    </div>
    
    <motion.a 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    href="#hero" className="flex sticky bottom-16 sm:bottom-5  justify-center cursor-pointer hover:scale-125 transition-all">
    <BsFillArrowUpCircleFill size={"30px"} color={"Gray"}/>
    </motion.a>

    </div>
  )
}
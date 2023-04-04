import { motion } from "framer-motion";
import React from "react";
import {SiAdobepremierepro} from 'react-icons/si'
import {MdPiano} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="relative flex flex-col flex-shrink-0 justify-center items-center border px-5 py-9 rounded-3xl border-transparent bg-[#303030] transition-opacity duration-200 opacity-70 cursor-pointer hover:opacity-100 md:w-[450px] w-[400px] snap-center scale-75 sm:scale-100">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://i.postimg.cc/t4cDj0Mg/testb-modified-1.webp"
        alt="img"
        className="w-32 xl:w-[200px] object-cover object-center mb-4"
      />

    <div className="flex flex-col items-center justify-center">
        <h4 className="text-xl font-bold text-[rgb(30,215,96)]">Technical Internship</h4>
        <h5 className="py-1 font-semibold">(Aug 2022 - Nov 2022)</h5>
      </div>

      <motion.div
      initial={{
        opacity: 0,
        scale:0.9
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }} className="px-5 py-1 text-md font-light">
        <span className="text-lg font-semibold text-blue-500">I was</span> an intern at Testbook, an edu app from India. I am proud to say that i cracked a python django developer internship soon after my first year.
      </motion.div>
      
      <motion.div
      animate={{x:[-5,5,-5]}}
      transition={{duration:1.2, repeat: Infinity, ease:"easeInOut"}}
       className="flex flex-row justify-center sm:invisible items-center text-white p-2 mt-5 rounded-xl">
        <AiOutlineArrowRight size={"18px"}/>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;

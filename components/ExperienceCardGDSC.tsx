import { motion } from "framer-motion";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiCanva} from 'react-icons/si'

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
        src={"/GDSC Logo.png"}
        alt="img"
        className="w-32 xl:w-[200px] object-cover object-center mb-4"
      />

      <div className="flex flex-col items-center justify-center">
        <h4 className="text-xl font-bold text-[rgb(30,215,96)]">Head of Marketing</h4>
        <h5 className="py-1 font-semibold">(Sep 2022 - Present)</h5>
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
      viewport={{ once: true }}
      className="px-5 py-1 text-md font-light">
      <span className="text-lg font-semibold text-[#f79500]">I am</span> the Marketing Head at GDSC-IIITM. My responsibilities include managing social media handles and offline campaigns. I am proud to say that I created an engagement of 440% after I took up this position.
      </motion.div>
      <motion.div
      animate={{x:[-5,5,-5]}}
      transition={{duration:1.2, repeat: Infinity, ease:"easeInOut"}}
       className="flex flex-row justify-center items-center invisible text-white p-2 mt-5 rounded-xl">
        <AiOutlineArrowLeft size={"18px"}/>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;

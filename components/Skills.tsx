import { motion } from "framer-motion"
import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import Skill from "./Skill"

type Props = {}

const Skills = (props: Props) => {
  return (
    <div>
      <motion.div 
    initial={{opacity:0, scale:0.9}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1.2}}
    viewport={{once:true}}
    className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center space-x-5 space-y-5">
        
        <h3 className="absolute top-28 items-center uppercase tracking-[20px] text-[rgb(30,215,96)] ml-7">Skills</h3>
        <div className="grid grid-cols-4 gap-7 xl:gap-14 lg:grid-cols-8">
          <Skill url="https://i.postimg.cc/MpBW8B6f/icons8-azure-240.png" title="Microsoft Azure"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/c/c-original.svg" title="C"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg" title="C++"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/canva/canva-original.svg" title="Canva"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" title="CSS 3"/>
          <Skill url="https://i.postimg.cc/T1j49Rfw/django.png" title="Django"/>
          <Skill url="https://i.postimg.cc/8cr1PfRY/docker.png" title="Docker"/>
          <Skill url="https://i.postimg.cc/CxJd2DmC/flutter.png" title="Flutter"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" title="Git"/>
          <Skill url="https://i.postimg.cc/Gt0pDjmR/github-1.png" title="GitHub"/>
          <Skill url="https://i.postimg.cc/bJnyq2HB/go.png" title="Go"/>
          <Skill url="https://i.postimg.cc/8z7q8gby/google-cloud.png" title="Google Cloud Platform"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" title="HTML 5"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="JavaScript"/>
          <Skill url="https://i.postimg.cc/vHVWCPVr/58480a44cef1014c0b5e4917.png" title="Kubernetes"/>
          <Skill url="https://i.postimg.cc/tTqkjhjX/adobe-lightroom.png" title="Lightroom"/>
          <Skill url="https://i.postimg.cc/XvQHX2xZ/file-type-powerpoint-256x239.png" title="Microsoft PowerPoint"/>
          <Skill url="https://i.postimg.cc/QMyz0472/icons8-microsoft-word-240.png" title="Microsoft Word"/>
          <Skill url="https://i.postimg.cc/rsdSVjYL/mongodb.png" title="MongoDB"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original-wordmark.svg" title="MySQL"/>
          <Skill url="https://i.postimg.cc/RCXS49c9/nextjs.png" title="Next.js"/>
          <Skill url="https://i.postimg.cc/kG4dB6xC/pelican-removebg-preview.png" title="Pelican"/>
          <Skill url="https://i.postimg.cc/PxSgsX0R/postgresql-248x256.png" title="PostgreSQL"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" title="Adobe Premiere Pro"/>
          <Skill url="https://camo.githubusercontent.com/37368c07ba573d5b2ecc8b6b724e847541a281c0fc135ee41fdd4aae61cda243/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64352f5461696c77696e645f4353535f4c6f676f2e737667" title="TailwindCSS"/>
          <Skill url="https://i.postimg.cc/bwdH3zRv/python.png" title="Python"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" title="React"/>
          <Skill url="https://i.postimg.cc/fTqY3GhQ/icons8-rest-api-80.png" title="Rest API"/>
          <Skill url="https://i.postimg.cc/B6dn9Bry/icons8-tailwindcss-240.png" title="Tailwind CSS"/>
          <Skill url="https://i.postimg.cc/8PgzZwBf/typescript-original-logo-icon-146317.png" title="TypeScript"/>
        </div>

    </motion.div>

    <motion.a 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    href="#hero" className="flex sticky bottom-16 sm:bottom-5 justify-center cursor-pointer hover:scale-125 transition-all">
    <BsFillArrowUpCircleFill size={"30px"} color={"Gray"}/>
    </motion.a>
    </div>
  )
}

export default Skills
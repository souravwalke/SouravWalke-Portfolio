"use client";

import Image from 'next/image'
import React from 'react'
import profilepic from '@/public/pp.jpeg';
import {motion} from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div 
                initial ={{opacity:0, scale: 0}}
                animate ={{opacity: 1, scale: 1}}
                transition = {{
                    type:"tween",
                    duration: 0.2,
                }}
                >
                <Image src={profilepic} 
                alt="Sourav Walke" 
                width="192" 
                height="192" 
                quality="95" 
                priority={true}
                className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
                </motion.div>
            </div>
        </div>
        <motion.p 
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I'm Sourav Walke.</span> I'm a{" "}
                <span className="font-bold">Full-Stack Engineer</span> with{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">sites & applications</span>.
        </motion.p>
        
        <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{
                delay: 0.1,
            }}>
            
            <Link href="#contact" 
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>
            <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10" href="/SouravGirish_Walke_Resume.pdf" download={true}>Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1'/></a>
            <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10" 
            href="https://www.linkedin.com/in/souravwalke/"
            target="_blank">
                <BsLinkedin />
            </a>
            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105" 
            target="_blank">
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
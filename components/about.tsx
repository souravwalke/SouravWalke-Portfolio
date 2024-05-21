"use client";
import React from 'react';
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';



export default function About() {
  
  const { ref } = useSectionInView('About');
  
  return (
    <motion.section 
        ref = {ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        id="about">
       <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
            In the bustling high school computer labs, I discovered my passion for {" "}<span className="font-medium">Computer Science</span>—a passion that has fueled my journey ever since. 
            After {" "} <span className="underline italic font-medium">three</span> transformative years as a {" "}<span className="font-medium">full-stack engineer</span>, where I witnessed technology&apos;s power to solve real-world problems, I felt a calling to deepen my knowledge and skills. This calling led me to pursue my {" "}<span className="font-medium">master&apos;s</span> degree, where I delved into the study of user-centric applications and the profound impact they can have.
        </p>
        <p>
            My master&apos;s journey not only solidified my belief in technology&apos;s potential but also deepened my resolve to {" "}<span className="italic">make a meaningful impact</span>. Now, armed with a wealth of experience and a profound appreciation for the possibilities of technology, I am  {" "} <span className="underline italic font-medium">seeking a full-time role</span> as a software developer.  
            My core stack is {" "} <span className="font-medium"> React, Next.js, Node.js, and MongoDB </span>
            I am eager to continue innovating, creating, and using technology to drive positive change in the world.
        </p>
    </motion.section>
  )
}

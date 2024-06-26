"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

  const { ref } = useSectionInView("Contact");

  return (
    <motion.section id="contact" ref={ref}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once:true,
        }}>
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6'>
            Please contact me directly at {" "}
            <a href="mailto:souravgwalke@gmail.com" className='underline'>souravgwalke@gmail.com</a> {" "} 
            or through this form
        </p>
        <form className='mt-10 flex flex-col' action={async(formData) => {
            const {data, error} = await sendEmail(formData);
            if(error){
                toast.error(error);
                return;
            }
            toast.success("Email Sent Successfully!");
        }}>
            <input name="senderEmail" type="email" required className='h-14 px-4 rounded-lg borderBlack' placeholder='Your email' maxLength={500}/>
            <textarea name="message" className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message' required maxLength={5000}/>
            <SubmitBtn />
        </form>
    </motion.section>
  );
}

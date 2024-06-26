import './globals.css';
import { Inter } from 'next/font/google';
import Header from "@/components/header";
import React from 'react';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sourav Walke | Personal Portfolio',
  description: 'Sourav is a full-stack developer with 3 years of experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={'${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36'}>
        <div className='bg-[#FCB69F] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75]'></div>
        <div className='bg-[#FFECD2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right'/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}

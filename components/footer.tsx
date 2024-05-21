import React from 'react'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500"> 
        <p className="flex items-center justify-center text-gray-500 sm:justify-center mb-2">
            <span>Made With</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="mx-[5px] w-[15px]"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
            </svg>
            <span>By Sourav Walke</span>
        </p>
        <p className="text-xs">
            <span className="font-semibold">
                About this website:
            </span> {" "}
            Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
            Framer Motion, React Email & Resend.
        </p>
    </footer>
  )
}

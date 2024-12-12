'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NotFound() {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/pirate-background.jpg')" }}
    >
      <h1 className="text-6xl font-bold mb-4 text-red-600 animate-pulse">404</h1>
      <h2 className="text-4xl mb-8">Arrr! Page Not Found</h2>
      <p className="text-xl mb-8">
        Ye be lost at sea, matey! The page ye be lookin' for be not here.
      </p>
      <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#46A5C9] text-[#46A5C9] px-6 py-2 rounded-md font-bold hover:bg-[#46A5C9]/10 transition-colors"
          >
            <Link href="/">RETURN TO PORT</Link>
      </motion.button>
    </div>
  )
}
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { FloatingElement } from "./animations"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function HeroSection() {
  const [loading, setLoading] = React.useState(true);
  const { scrollY } = useScroll()
  
  const scale = useTransform(scrollY, [0, 1000], [1, 0.85])
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.85])
  
  return (
    <motion.section 
      className="relative min-h-screen overflow-hidden"
      style={{
        scale,
        opacity
      }}
    >
      {loading && (
        <div className="absolute inset-0 bg-black/50 blur-sm flex items-center justify-center">
        </div>
      )}

      <Image
        src="/banner.png"
        alt="Sea Cat Scallywags Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        onLoadingComplete={() => setLoading(false)}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10"
      />
      
      <div className="container relative z-20 flex flex-col justify-between items-center min-h-screen py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-8xl text-white mb-6">
            Sea Cat Scallywags
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Join our purr-fect Servers and community, where Sea Cat Scallywags lets you claw your way to unforgettable experiences!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Start Your Adventure
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 col-span-2"
          >
            <p className="text-white text-lg drop-shadow-md text-center">
            Join the Sea Cat Community and experience the best Sea of Thieves community. With paw-some members by your side, we're fur-ever proud to be part of the community for the best experience for our members! We'll always be purr-fectly transparent about where your donations go!
            </p>
            <div className="flex gap-4 justify-center">
            <Link href="/discord">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#46A5C9] text-white px-6 py-2 rounded-md font-bold hover:bg-[#3A8CA8] transition-colors shadow-md"
              >
                JOIN OUR DISCORD
              </motion.button>
            </Link>
            <Link href="/support">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#46A5C9] text-[#46A5C9] px-6 py-2 rounded-md font-bold hover:bg-[#46A5C9]/10 transition-colors shadow-md"
              >
                SUPPORT US
              </motion.button>
            </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="text-white w-8 h-8" />
        </motion.div>
      </div>
    </motion.section>
  )
}


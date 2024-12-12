"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FloatingElement } from "./animations"
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/banner.png"
        alt="Sea Cat Scallywags Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10"
      />
      
      <div className="container relative z-20 flex flex-col justify-between min-h-screen py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Sea Cat Scallywags
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
            From the waters of our Servers, and community, Sea Cat Scallywags allows you to have experiences!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Start Your Adventure
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-white text-lg drop-shadow-md">
              Join the Sea Cat Community and experience the best Sea of Thieves community. 
              With hundreds of members, we're proud to be a part of the community
              for the best experience for our members!
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#46A5C9] text-white px-6 py-2 rounded-md font-bold hover:bg-[#3A8CA8] transition-colors shadow-md"
              >
                DISCORD.SEA.CATS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#46A5C9] text-[#46A5C9] px-6 py-2 rounded-md font-bold hover:bg-[#46A5C9]/10 transition-colors shadow-md"
              >
                SUPPORT US
              </motion.button>
            </div>
          </motion.div>
          
          <FloatingElement>
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/mas.png"
                alt="Mascot"
                width={512}
                height={512}
                className="rounded-full object-cover w-full h-full"
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(70, 165, 201, 0.2)",
                    "0 0 40px rgba(70, 165, 201, 0.4)",
                    "0 0 20px rgba(70, 165, 201, 0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </FloatingElement>
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
    </section>
  )
}


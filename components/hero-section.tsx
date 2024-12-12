"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GlowingBorder, FloatingElement } from "./animations"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"
      />
      
      <div className="container relative z-10 ">
        <GlowingBorder>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center py-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sea Cat Scallywags
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              From the waters of our Servers, and community, Sea Cat Scallywags allows you to have experiences!
            </p>
          </motion.div>
        </GlowingBorder>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-white/80">
                Join the Sea Cat Community and experience the best Sea of Thieves community. 
                With hundreds of members, we're proud to be a part of the community
                for the best experience for our members!
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#46A5C9] text-white px-6 py-2 rounded-md font-bold hover:bg-[#3A8CA8] transition-colors"
              >
                DISCORD.SEA.CATS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#46A5C9] text-[#46A5C9] px-6 py-2 rounded-md font-bold hover:bg-[#46A5C9]/10 transition-colors"
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
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SlideIn } from "./animations"
import Link from "next/link"

export function AllianceSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"
      />
      
      <div className="container relative z-10">
        <SlideIn>
          <h2 className="text-6xl text-white text-center mb-16">
            JOIN FOR THE GRIND
          </h2>
        </SlideIn>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-5xl text-[#46A5C9]">
              BEST SEA OF THIEVES
              <br />
              COMMUNITY
            </h3>
            <p className="text-white/80">
              With hundreds of members, Sea Cat Scallywags is proud to be a Sea of Thieves Alliance community!
            </p>
            <Link href="rules">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#BC090B] text-white px-6 py-2 rounded-md font-bold hover:bg-[#A00809] transition-colors"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <Image
              src="/char.png"
              alt="Sea of Thieves Character"
              width={700}
              height={600}
              className="mx-auto"
            />
            <motion.div
              className="absolute inset-0"
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}


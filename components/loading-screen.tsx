"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const img = new window.Image()
    img.src = "/banner.png"
    img.onload = () => {
      setTimeout(() => {
        setLoading(false)
      }, 250)
    }
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${
          loading ? "" : "pointer-events-none"
        }`}
      >
        <div className="text-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-4"
          >
            <Image
              src="/mas.png"
              alt="Sea Cat Scallywags Logo"
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
          </motion.div>
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#46A5C9] text-xl"
          >
            Loading...
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  )
}
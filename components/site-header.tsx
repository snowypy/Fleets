"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const navItems = [
  "Home",
  "Rules & Info",
  "Support Us",
  "Join Staff"
]

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm border-b border-[#46A5C9]/20"
    >
      <div className="container flex h-16 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mr-8 flex items-center"
        >
          <Link href="/" className="text-2xl font-bold text-white">
            <img 
              src="/mas.png" 
              alt="Logo" 
              className="w-10 h-10 rounded-full mr-2"
            />
          </Link>
        </motion.div>
        
        <nav className="flex flex-1 items-center space-x-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <Link
                href={({
                  "/": "/",
                  "Rules & Info": "/rules",
                  "Support Us": "/support",
                  "Join Staff": "/apply"
                }[item] || "/")}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#46A5C9]"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="ml-auto"
        >
          <Button
            className="bg-[#BC090B] text-white hover:bg-[#A00809] font-bold"
            asChild
          >
            <Link href="/discord">JOIN DISCORD</Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}


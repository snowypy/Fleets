"use client"

import { motion } from "framer-motion"

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

export const SlideIn: React.FC<{ children: React.ReactNode; direction?: string; delay?: number; className?: string }> = ({ children, direction = "left", delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

export const GlowingBorder: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    className="relative border border-[#46A5C9]/50 rounded-lg p-6"
    animate={{
      boxShadow: ["0 0 10px rgba(70, 165, 201, 0.2)", "0 0 20px rgba(70, 165, 201, 0.4)", "0 0 10px rgba(70, 165, 201, 0.2)"]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)

export const FloatingElement: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    animate={{
      y: [0, -10, 0]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)


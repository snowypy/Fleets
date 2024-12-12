"use client"

import { motion } from "framer-motion"
import { GlowingBorder } from "./animations"

export function SupportSection() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl text-[#46A5C9] text-center mb-8"
        >
          HELP + SUPPORT
        </motion.h2>

        <GlowingBorder>
          <div className="space-y-6">
            <p className="text-white/80">
              If you have any questions or need assistance, we're herre to help!
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl text-[#46A5C9] font-bold">Quick Questions:</h3>
              <p className="text-white/80">
                For quick questions or general inquiries, you can ask in our Discord server or check out our FAQ page.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl text-[#46A5C9] font-bold">Private Assistance:</h3>
              <p className="text-white/80">
                If you need direct assistance or have a private matter to discuss, you can reach out to our support team by creating a ticket in our Discord.
              </p>
            </div>
          </div>
        </GlowingBorder>
      </div>
    </section>
  )
}


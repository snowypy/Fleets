'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlowingBorder } from '@/components/animations'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function RulesPage() {
  const [openRule, setOpenRule] = useState<number | null>(null)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-[#46A5C9] p-6 font-windlass"
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl text-[#46A5C9] text-center mb-8 pt-16"
        >
          RULES & INFO
        </motion.h2>

        <GlowingBorder>
          <div className="space-y-6">
            <p className="text-white/80">
              If you think you may have broken a rule or need clarification, please review the guidelines below.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-3xl text-[#46A5C9] font-bold">BLATANT RULES</h3>
              <p className="text-white/80">
                Sharing inappropriate content, harassment of other members, hate speech, attempting to scam others, or repeatedly violating server rules after warnings will result in an immediate ban.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl text-[#46A5C9] font-bold">PER CASE RULES</h3>
              <p className="text-white/80">
                Members will typically receive up to 3 warnings for minor rule violations. Each warning is logged and reviewed by moderators. Multiple warnings may result in temporary or permanent suspension from the server.
              </p>
            </div>
          </div>
        </GlowingBorder>
      </div>

      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-5xl text-center my-16 tracking-wider"
      >
        DETAILED GUIDELINES
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {rules.map((rules, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`} className="border-[#46A5C9]/20">
                <AccordionTrigger className="text-2xl text-white hover:text-[#46A5C9]">
                  {rules.title}
                </AccordionTrigger>
                <AnimatePresence>
                  <AccordionContent className="text-white/80">
                    {rules.content}
                  </AccordionContent>
                </AnimatePresence>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  )
}

const rules = [
  {
    title: "What behavior will result in an immediate ban?",
    content: "Sharing inappropriate content, harassment of staff members, hate speech, attempting to scam others, or repeatedly violating server rules after warnings will result in an immediate ban."
  },
  {
    title: "How do warnings work?",
    content: "Members will typically receive up to 3 warnings for minor rule violations. Each warning is logged and reviewed by moderators. Multiple warnings may result in temporary or permanent suspension from the server."
  },
  {
    title: "What content is allowed in chat channels?",
    content: "All content must be family-friendly and appropriate. No explicit content, gore, or controversial political/religious discussions. Keep conversations respectful and relevant to the channel topics."
  },
  {
    title: "How do I report rule violations?",
    content: "If you witness rule violations, please report them to moderators through private messages or by using the report command. Include screenshots and context when possible."
  },
]


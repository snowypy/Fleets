"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Typewriter } from "react-simple-typewriter"

const faqs = [
  {
    question: "How do I join the alliance server?",
    answer: "Join our Discord and one of our paw-some staff or regular members will paw-sitively guide you through the process!"
  },
  {
    question: "Do I need to pay for support or to play on the alliance server?",
    answer: "You'll never have to paw out a dime! Donations are just for extra cat-tastic content and purr-ks!"
  },
]

export function FaqSection() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-white text-center mb-8"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
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
                <AccordionTrigger className="text-2xl text-[#46A5C9]">
                  {faq.question}
                </AccordionTrigger>
                <AnimatePresence>
                  <AccordionContent className="text-white text-1xl">
                    <Typewriter
                      words={[faq.answer]}
                      loop={1}
                      cursor
                      cursorStyle='|'
                      typeSpeed={30}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </AccordionContent>
                </AnimatePresence>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


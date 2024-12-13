"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I join an alliance server?",
    answer: "Instructions for joining.."
  },
  {
    question: "Do I need to pay for supporter to play on the alliance server?",
    answer: "Information about supporter reqs.."
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
          className="text-5xl text-[#46A5C9] text-center mb-8"
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
                <AccordionTrigger className="text-2xl text-white hover:text-[#46A5C9]">
                  {faq.question}
                </AccordionTrigger>
                <AnimatePresence>
                  <AccordionContent className="text-white/80">
                    {faq.answer}
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


"use client"

import { GlowingBorder } from "@/components/animations"
import { motion } from "framer-motion"

const subscriptionTiers = [
  {
    name: "Bronze",
    price: "$5/month",
    benefits: ["Access to exclusive channels", "Bronze supporter badge"],
  },
  {
    name: "Gold",
    price: "$20/month",
    benefits: ["All Silver benefits", "Monthly game night", "Gold supporter badge"],
  },
  {
    name: "Silver",
    price: "$10/month",
    benefits: ["All Bronze benefits", "Priority support", "Silver supporter badge"],
  },
]

export default function SupportPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-6 pt-20"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl text-[#46A5C9] text-center mb-8"
        >
          Support Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {subscriptionTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`border border-[#46A5C9]/20 p-6 rounded-lg ${tier.name === "Gold" ? "order-first" : ""}`}
            >
              <h3 className="text-2xl font-bold text-[#46A5C9] mb-4">
                {tier.name}
                {tier.name === "Gold" && (
                  <span className="ml-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm">
                    Best Value
                  </span>
                )}
              </h3>
              <p className="text-lg mb-4">{tier.price}</p>
              <ul className="list-disc list-inside text-white/80">
                {tier.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-lg text-center"
        >
            <GlowingBorder>

                <h3 className="text-3xl font-bold text-[#46A5C9] mb-4">
                  Purchase Subscriptions on Discord
                </h3>
                <p className="text-lg text-white/80">
                  Join our Discord server to purchase any of these subscription tiers and enjoy exclusive benefits!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-[#46A5C9] text-white px-6 py-3 rounded-md font-bold hover:bg-[#3A8CA8] transition-colors"
                >
                  Join Discord
                </motion.button>
                </GlowingBorder>
        </motion.div>
      </div>
    </motion.div>
  )
}
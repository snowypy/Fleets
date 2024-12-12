"use client"

import { GlowingBorder } from "@/components/animations"
import { motion } from "framer-motion"

const subscriptionTiers = [
  {
    name: "Purring Vrivateer",
    price: "$6.34/month",
    benefits: ["Early access to content", "Patron-only voting power", "Patron-only posts and messages"],
  },
  {
    name: "Fur-midable Admiral",
    price: "$23.45/month",
    benefits: ["Discord Role", "Rule with style", "Full library access", "Patron-only posts and messages", "Early access to content", "Patron-only voting power"],
  },
  {
    name: "Clawing Corsair",
    price: "$8.87/month",
    benefits: ["Full library access", "Patron-only posts and messages", "Early access to content", "Patron-only voting power"],
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
              <h1 className="text-4xl font-bold text-[#46A5C9] mb-4">
                {tier.name}
              </h1>
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
                  Purchase Subscriptions on Patreon
                </h3>
                <p className="text-lg text-white/80">
                  Check out our Patreon to purchase any of these subscription tiers and enjoy exclusive benefits!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-[#46A5C9] text-white px-6 py-3 rounded-md font-bold hover:bg-[#3A8CA8] transition-colors"
                  onClick={() => window.open('https://www.patreon.com/seacatsscallywags', '_blank')}
                >
                  Help Us
                </motion.button>
                </GlowingBorder>
        </motion.div>
      </div>
    </motion.div>
  )
}
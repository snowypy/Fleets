"use client"

import { motion } from 'framer-motion';
import { FaDiscord, FaYoutube, FaXTwitter, FaTwitch } from 'react-icons/fa6';
import { FaPatreon } from 'react-icons/fa';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export function Footer() {
  return (
    <footer className="border-t border-[#46A5C9]/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/discord">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#46A5C9] text-[#46A5C9] px-6 py-2 rounded-md font-bold hover:bg-[#46A5C9]/10 transition-colors"
            >
              CONTACT US
            </motion.button>
          </Link>
          <div className="flex space-x-6">
            <a href="/discord" className="text-white/60 hover:text-[#46A5C9] text-2xl transition-colors">
              <FaDiscord />
            </a>
            <a href="https://x.com/SeaCats_X" className="text-white/60 hover:text-[#46A5C9] text-2xl transition-colors">
              <FaXTwitter />
            </a>
            <a href="https://www.patreon.com/seacatsscallywags" className="text-white/60 hover:text-[#46A5C9] text-2xl transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.95a7.05 7.05 0 100 14.1 7.05 7.05 0 000-14.1z"/>
                  </svg>
            </a>
          </div>
            <p className="text-white/60 text-sm">
            Made with ❤️ by <a href="https://snowyjs.lol" className="text-[#46A5C9] hover:underline">Snowy
            </a>
            </p>
        </div>
      </div>
    </footer>
  );
}
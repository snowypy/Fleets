"use client"

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t border-[#46A5C9]/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#46A5C9] text-[#46A5C9] px-6 py-2 rounded-md font-bold hover:bg-[#46A5C9]/10 transition-colors"
          >
            CONTACT US
          </motion.button>
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-[#46A5C9]">plce1</a>
            <a href="#" className="text-white/60 hover:text-[#46A5C9]">plce2r</a>
            <a href="#" className="text-white/60 hover:text-[#46A5C9]">plce3b</a>
            <a href="#" className="text-white/60 hover:text-[#46A5C9]">plce4pls</a>
            <a href="#" className="text-white/60 hover:text-[#46A5C9]">place5</a>
          </div>
          <p className="text-white/60 text-sm">
            Made with ❤️ by <a href="https://snowyjs.lol" className="text-[#46A5C9] hover:underline">Snowy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
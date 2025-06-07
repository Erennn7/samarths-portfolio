'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-white/60 mb-4 md:mb-0"
          >
            <span>© 2025 Samarth Kolarkar. Crafted with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>and cutting-edge technology.</span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 glass-button rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Additional Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white/5 text-center text-white/40 text-sm"
        >
          <p>
            Building the future of web development, one line of code at a time. 
            Specializing in MERN stack, AI integration, and innovative digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </footer>
  );
}
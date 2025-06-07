'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Navigation from './components/Navigation';
import BackgroundScene from './components/BackgroundScene';
import LoadingSpinner from './components/LoadingSpinner';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<LoadingSpinner />}>
          <BackgroundScene />
        </Suspense>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Services />
          <Contact />
          <Footer />
        </motion.div>
      </main>
    </div>
  );
}
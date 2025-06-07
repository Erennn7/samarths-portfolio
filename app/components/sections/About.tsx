'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Trophy } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'CGPA', value: '10.0', icon: Trophy },
    { label: 'Rank in I.T. Dept', value: '1st', icon: GraduationCap },
    { label: 'Rank in College', value: '2nd', icon: Trophy },
    { label: 'Year', value: 'Third', icon: Calendar },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8 floating-animation">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Profile Photo */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden relative border-4 border-gradient-to-br from-purple-500 to-cyan-500 shadow-2xl">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Samarth Kolarkar - Profile Picture"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="mr-3 text-purple-400" />
                Background
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
                I'm a passionate B.Tech I.T. student at Walchand Institute of Technology, 
                driven by innovation and excellence in software development. As the founder 
                of a software consultancy, I specialize in creating cutting-edge solutions 
                using the MERN stack and emerging technologies like Generative AI.
              </p>
              <div className="flex items-center text-white/60 space-x-4">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Walchand Institute of Technology</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="glass-card p-3 sm:p-4 lg:p-6 text-center"
                  >
                    <IconComponent className="mx-auto mb-2 text-purple-400" size={20} />
                    <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, GraduationCap, Award, Star, Calendar } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Winner - Sinhagad Hackathon 2025',
    category: 'AI-Driven Healthcare',
    description: 'First place victory for developing innovative AI-powered healthcare solutions that transform patient care and medical diagnostics.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    date: '2025',
    type: 'Competition'
  },
  {
    id: 2,
    title: 'Runner-Up - Witchar Hackathon 2025',
    category: 'LegalTech using GenAI',
    description: 'Second place recognition for creating groundbreaking legal technology solutions leveraging Generative AI for accessible justice.',
    icon: Medal,
    color: 'from-gray-400 to-gray-600',
    date: '2025',
    type: 'Competition'
  },
  {
    id: 3,
    title: '10.0 CGPA Achievement',
    category: 'Academic Excellence',
    description: 'Perfect academic performance demonstrating exceptional dedication, knowledge mastery, and consistent excellence in studies.',
    icon: GraduationCap,
    color: 'from-blue-500 to-purple-500',
    date: 'First Year',
    type: 'Academic'
  },
  {
    id: 4,
    title: '1st Rank in I.T. Department',
    category: 'Departmental Leadership',
    description: 'Top performer in Information Technology department, showcasing superior technical skills and academic prowess.',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    date: 'Current',
    type: 'Academic'
  },
  {
    id: 5,
    title: '2nd Rank in College',
    category: 'Institutional Recognition',
    description: 'Among the top students college-wide, demonstrating excellence across all academic disciplines and overall performance.',
    icon: Star,
    color: 'from-cyan-500 to-blue-500',
    date: 'First Year',
    type: 'Academic'
  }
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Recognition for excellence in innovation, academic performance, and technological advancement
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Achievement Card */}
                  <div className={`w-full md:w-5/12 ${!isLeft ? 'text-right' : ''}`}>
                    <div className="glass-card p-6 relative overflow-hidden group">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className={`flex items-center mb-4 ${!isLeft ? 'justify-end' : ''}`}>
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} ${!isLeft ? 'order-2 ml-3' : 'mr-3'}`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <div className={!isLeft ? 'order-1' : ''}>
                            <span className="text-xs text-white/60 uppercase tracking-wider">{achievement.type}</span>
                            <div className="flex items-center space-x-2">
                              <Calendar size={14} className="text-purple-400" />
                              <span className="text-sm text-purple-400">{achievement.date}</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                        <p className="text-purple-400 text-sm mb-3">{achievement.category}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{achievement.description}</p>
                      </div>

                      {/* Decorative Corner */}
                      <div className={`absolute ${!isLeft ? 'top-4 left-4' : 'top-4 right-4'} opacity-20`}>
                        <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full blur-lg`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} pulse-glow`}></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Hackathon Wins', value: '2', icon: Trophy },
            { label: 'Perfect CGPA', value: '10.0', icon: GraduationCap },
            { label: 'Dept. Rank', value: '1st', icon: Award },
            { label: 'College Rank', value: '2nd', icon: Star }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <IconComponent className="mx-auto mb-3 text-purple-400" size={28} />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
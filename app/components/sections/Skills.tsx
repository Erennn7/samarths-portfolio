'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Database, Globe, Cpu, GitBranch, Zap, Star, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 75 },
      { name: 'TypeScript', level: 60 }
    ]
  },
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 }
    ]
  },
  {
    title: 'Backend',
    icon: Cpu,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 75 },
      { name: 'WebSocket', level: 70 },
      { name: 'WebRTC', level: 70 }
    ]
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 40 },
      { name: 'Cloudinary', level: 88 },
      { name: 'Firebase', level: 82 }
    ]
  },
  {
    title: 'AI & Tools',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Generative AI', level: 80 },
      { name: 'LLMs', level: 90 },
      { name: 'Machine Learning', level: 40 },
      { name: 'OpenAI API', level: 90 },
      { name: 'Langchain', level: 70 },
      { name: 'TensorFlow', level: 50 }
    ]
  },
  {
    title: 'DevOps',
    icon: GitBranch,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 92 },
      { name: 'Linux', level: 85 },
      { name: 'Docker', level: 40 },
      { name: 'AWS', level: 80 },
      { name: 'Vercel', level: 90 }
    ]
  }
];

const SkillBar = ({ skill, delay }: { skill: { name: string, level: number }, delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm">{skill.name}</span>
        <motion.span 
          className="text-xs text-purple-400 font-bold"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={isHovered ? { 
              x: ['-100%', '100%'],
              transition: { duration: 0.8, ease: "easeInOut" }
            } : {}}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillOrb = ({ skill, index }: { skill: string, index: number }) => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.2, 
        rotate: 10,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="px-4 py-2 glass-card cursor-pointer enhanced-hover relative overflow-hidden"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.2,
          ease: "easeInOut"
        }}
      >
        <span className="font-medium relative z-10">{skill}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TrendingUp className="text-purple-400" size={24} />
            <span className="text-purple-400 font-medium">Expertise</span>
          </motion.div>

          <h2 className="text-5xl font-bold gradient-text mb-6 text-shimmer">Technical Mastery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 glow-border"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive skill set spanning modern web technologies, AI innovation, and full-stack development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-6 relative overflow-hidden group enhanced-hover"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Header */}
                <motion.div 
                  className="flex items-center mb-6 relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </motion.div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={(index * 0.1) + (skillIndex * 0.05)}
                    />
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-20"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full blur-xl`}></div>
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Skill Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 gradient-text flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 1 }}
          >
            <Star className="mr-3 text-purple-400" size={28} />
            Core Technologies
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React.js', 'Node.js', 'MongoDB', 'Python', 'GenAI', 'JavaScript', 'Tailwind CSS', 'Express.js', 'TypeScript', 'Next.js'].map((skill, index) => (
              <SkillOrb key={skill} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skill Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Languages Mastered', value: '6+', icon: Code },
            { label: 'Frameworks Used', value: '15+', icon: Globe },
            { label: 'Years Learning', value: '2+', icon: TrendingUp },
            { label: 'Projects Built', value: '15+', icon: Star }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center enhanced-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)"
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <IconComponent className="mx-auto mb-3 text-purple-400" size={28} />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
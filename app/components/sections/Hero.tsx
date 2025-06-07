'use client';

import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Zap, Download } from 'lucide-react';

const titles = [
  'Full Stack Developer',
  'MERN Stack Engineer', 
  'GenAI Innovator',
  'Software Consultant',
  'Tech Entrepreneur',
  'Problem Solver'
];

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple-400 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 200 - 100],
        y: [0, Math.random() * 200 - 100],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const MagneticButton = ({ children, href, className, ...props }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouse = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [currentTitle, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxX = useTransform(useMotionValue(mousePosition.x), [0, window.innerWidth || 1920], [-50, 50]);
  const parallaxY = useTransform(useMotionValue(mousePosition.y), [0, window.innerHeight || 1080], [-50, 50]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Gradient Orbs with Enhanced Animation */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl morphing-blob"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl morphing-blob"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/15 rounded-full blur-2xl morphing-blob"
        animate={{
          scale: [1, 1.3, 1],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Name with Enhanced Effects */}
          <motion.div className="relative">
            <motion.h1
              className="text-6xl md:text-8xl font-black relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.span 
                className="gradient-text text-shimmer glow-border"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
                }}
              >
                Samarth
              </motion.span>
              <br />
              <motion.span 
                className="text-white holographic"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                }}
              >
                Kolarkar
              </motion.span>
            </motion.h1>
            
            {/* Floating Icons */}
            <motion.div
              className="absolute -top-8 -right-8"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Sparkles className="text-purple-400" size={32} />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-8 -left-8"
              animate={{ 
                rotate: -360,
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity }
              }}
            >
              <Zap className="text-cyan-400" size={28} />
            </motion.div>
          </motion.div>

          {/* Enhanced Animated Title Carousel */}
          <div className="h-20 flex items-center justify-center relative overflow-hidden">
            <motion.h2
              key={currentTitle}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -50, rotateX: 90 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-2xl md:text-4xl font-light text-white/80 typing-animation perspective-hover"
            >
              {titles[currentTitle]}
            </motion.h2>
          </div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed reveal-animation"
          >
            B.Tech I.T. student at Walchand Institute of Technology, crafting innovative digital solutions 
            and leading the future of web development with cutting-edge technologies.
          </motion.p>

          {/* Enhanced CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <MagneticButton
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 neon-glow liquid-button enhanced-hover"
            >
              <span>View My Work</span>
              <ExternalLink size={18} />
            </MagneticButton>

            <MagneticButton
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 enhanced-hover wave-animation"
            >
              <span>Download Resume</span>
              <Download size={18} />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="px-8 py-4 glass-button font-semibold text-white flex items-center justify-center space-x-2 enhanced-hover wave-animation"
            >
              <span>Get In Touch</span>
              <Mail size={18} />
            </MagneticButton>
          </motion.div>

          {/* Enhanced Social Links with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center space-x-6 mt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/Erennn7', label: 'GitHub', color: 'hover:text-gray-400' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/samarth-kolarkar', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:samarthkolarkar7777@gmail.com', label: 'Email', color: 'hover:text-purple-400' },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                className={`p-3 glass-card ${color} transition-all duration-300 magnetic-hover enhanced-hover`}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Floating Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex justify-center space-x-4 mt-8"
          >
            {[
              { label: '10.0 CGPA', icon: '🎓' },
              { label: 'Hackathon Winner', icon: '🏆' },
              { label: 'AI Innovator', icon: '🤖' }
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                className="glass-card px-4 py-2 text-sm font-medium elastic-hover"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }
                }}
              >
                <span className="mr-2">{badge.icon}</span>
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="text-white/50 cursor-pointer"
            whileHover={{ scale: 1.2, color: "#8b5cf6" }}
          >
            <ChevronDown size={32} />
          </motion.div>
          <motion.div
            className="mt-2 text-xs text-white/40 font-medium tracking-wider"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            SCROLL DOWN
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none" />
    </section>
  );
}
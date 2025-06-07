'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play, X, Heart, Users, Bot, Plane, Star, Code, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'CureConnect',
    subtitle: 'AI-Powered Telemedicine Platform',
    description: 'A futuristic telemedicine platform revolutionizing healthcare accessibility with AI-driven diagnostics.',
    longDescription: 'CureConnect is a comprehensive telemedicine solution that combines WebRTC video consultations, AI-powered medical report analysis, and integrated healthcare services. The platform features voice navigation, emergency tracking, government scheme eligibility checking, and a complete e-commerce ecosystem for medical needs.',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    technologies: ['React.js', 'Node.js', 'WebRTC', 'WebSocket', 'AI/ML', 'MongoDB'],
    features: [
      'WebRTC video consultations with real-time chat',
      'AI analysis of X-rays, PET scans, dermatology & ophthalmology reports',
      'Voice navigation and emergency tracking system',
      'Government scheme eligibility checker',
      'Integrated e-commerce and prescription management',
      'Appointment booking and healthcare provider network'
    ],
    image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: 'https://github.com/Orthodox-64/CureConnect',
    status: 'Development',
    year: '2025'
  },
  {
    id: 2,
    title: 'Department of Justice - GenAI Assistant',
    subtitle: 'Legal Tech Innovation',
    description: 'Multilingual legal chatbot democratizing access to justice through intelligent document guidance.',
    longDescription: 'An innovative legal technology solution designed to bridge the gap between complex legal documentation and public understanding. This GenAI-powered assistant provides multilingual support, real-time legal guidance, and document simplification to ensure equal access to justice for all citizens.',
    icon: Bot,
    color: 'from-blue-500 to-purple-500',
    technologies: ['Python', 'GenAI', 'NLP', 'React.js', 'FastAPI', 'PostgreSQL'],
    features: [
      'Multilingual legal document processing',
      'Real-time law document guidance and simplification',
      'Intelligent legal query resolution',
      'Document analysis and summary generation',
      'Accessibility-focused user interface',
      'Integration with government legal databases'
    ],
    image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: 'https://github.com/Erennn7',
    status: 'Beta',
    year: '2025'
  },
  {
    id: 3,
    title: 'Wanderlust',
    subtitle: 'Full-Stack Travel Platform',
    description: 'Complete travel and hotel booking system with advanced personalization and seamless user experience.',
    longDescription: 'Wanderlust is a full-featured travel booking platform that combines modern web technologies with intuitive design. The system includes comprehensive authentication, booking management, review systems, and personalized recommendations powered by advanced algorithms.',
    icon: Plane,
    color: 'from-green-500 to-teal-500',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary'],
    features: [
      'Complete authentication and user management system',
      'Advanced booking engine with real-time availability',
      'Comprehensive review and rating system',
      'Cloudinary integration for optimized image management',
      'Cookie-based personalization and recommendations',
      'Interactive maps integration with location services'
    ],
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: 'https://wanderlust-bz58.onrender.com/listings',
    github: 'https://github.com/Erennn7/Wanderlust',
    status: 'Live',
    year: '2024'
  }
];

const ProjectCard = ({ project, index, onClick }: { project: any, index: number, onClick: () => void }) => {
  const IconComponent = project.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        y: -15, 
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="glass-card overflow-hidden group cursor-pointer perspective-hover enhanced-hover"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay Effects */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}></div>
        
        {/* Status Badge */}
        <motion.div
          className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
            project.status === 'Live' ? 'bg-green-400' : 
            project.status === 'Beta' ? 'bg-yellow-400' : 'bg-blue-400'
          }`}></span>
          {project.status}
        </motion.div>

        {/* Year Badge */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 + index * 0.1 }}
        >
          {project.year}
        </motion.div>

        {/* Floating Icon */}
        <motion.div
          className="absolute bottom-4 right-4"
          animate={isHovered ? { 
            scale: 1.2, 
            rotate: 360,
            y: -5
          } : { 
            scale: 1, 
            rotate: 0,
            y: 0
          }}
          transition={{ duration: 0.5 }}
        >
          <IconComponent className="text-white drop-shadow-lg" size={24} />
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <motion.div
              className="flex space-x-2"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex-1 flex items-center justify-center py-2 bg-white/20 backdrop-blur-md rounded-lg text-sm font-medium">
                <Play size={14} className="mr-2" />
                Preview
              </div>
              <div className="flex items-center justify-center p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Github size={14} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-purple-400 text-sm mb-3 font-medium">{project.subtitle}</p>
          <p className="text-white/70 text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies with Animation */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80 border border-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span
                className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg text-xs text-white/80 border border-purple-500/30"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                +{project.technologies.length - 3} more
              </motion.span>
            )}
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <motion.button
              className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-medium liquid-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Play size={14} />
              <span>Demo</span>
            </motion.button>
            <motion.button
              className="flex items-center justify-center p-2 glass-button rounded-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
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
            <Code className="text-purple-400" size={24} />
            <span className="text-purple-400 font-medium">Portfolio</span>
          </motion.div>
          
          <h2 className="text-5xl font-bold gradient-text mb-6 text-shimmer">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 glow-border"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Innovative solutions that showcase cutting-edge technology and exceptional user experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects Completed', value: '10+', icon: Code },
            { label: 'Technologies Mastered', value: '20+', icon: Zap },
            { label: 'Client Satisfaction', value: '100%', icon: Star },
            { label: 'Years Experience(freelancing)', value: '1+', icon: Users }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center enhanced-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <IconComponent className="mx-auto mb-3 text-purple-400" size={28} />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto enhanced-hover"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 glass-button rounded-full"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>

                  <div className="relative overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-60`}></div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-6 left-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <selectedProject.icon className="text-white drop-shadow-lg" size={32} />
                    </motion.div>
                  </div>
                </div>

                <div className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between mb-4"
                  >
                    <div>
                      <h3 className="text-3xl font-bold gradient-text">{selectedProject.title}</h3>
                      <p className="text-purple-400 text-lg">{selectedProject.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/60">Status</div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        selectedProject.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          selectedProject.status === 'Live' ? 'bg-green-400' :
                          selectedProject.status === 'Beta' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}></span>
                        {selectedProject.status}
                      </div>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 mb-6 leading-relaxed"
                  >
                    {selectedProject.longDescription}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6"
                  >
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Star className="mr-2 text-purple-400" size={20} />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-white/70">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                  >
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Code className="mr-2 text-cyan-400" size={20} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-2 bg-white/10 rounded-lg text-sm border border-white/20 enhanced-hover"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex space-x-4"
                  >
                    <motion.a
                      href={selectedProject.demo}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold liquid-button enhanced-hover"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.github}
                      className="flex items-center space-x-2 px-6 py-3 glass-button rounded-xl font-semibold enhanced-hover"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
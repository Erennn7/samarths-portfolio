'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Users, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Building2
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development using the MERN stack with modern UI/UX design principles.',
    icon: Code,
    color: 'from-blue-500 to-purple-500',
    features: [
      'React.js & Next.js Applications',
      'Node.js & Express.js Backend',
      'MongoDB & SQL Databases',
      'Responsive Design & Optimization'
    ],
    pricing: 'From $349'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with native performance and intuitive user experiences.',
    icon: Smartphone,
    color: 'from-green-500 to-teal-500',
    features: [
      'React Native Development',
      'iOS & Android Applications',
      'Real-time Features & APIs',
      'App Store Deployment'
    ],
    pricing: 'From $449'
  },
  {
    id: 3,
    title: 'AI & GenAI Solutions',
    description: 'Custom AI-powered applications leveraging the latest in Generative AI and Machine Learning.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    features: [
      'GPT Integration & Chatbots',
      'Custom AI Model Training',
      'Document Analysis & Processing',
      'Intelligent Automation'
    ],
    pricing: 'From $399'
  },
  {
    id: 4,
    title: 'Consultancy & Strategy',
    description: 'Technical consultation and strategic guidance for digital transformation and technology adoption.',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    features: [
      'Technology Stack Selection',
      'Architecture & System Design',
      'Code Review & Optimization',
      'Team Training & Mentorship'
    ],
    pricing: 'From $100/hour'
  },
  {
    id: 5,
    title: 'API Development',
    description: 'Robust and scalable API solutions with comprehensive documentation and security measures.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    features: [
      'RESTful API Development',
      'GraphQL Implementation',
      'API Documentation & Testing',
      'Security & Authentication'
    ],
    pricing: 'From $249'
  },
  {
    id: 6,
    title: 'Web3 & Blockchain',
    description: 'Decentralized applications and blockchain solutions for modern digital ecosystems.',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Smart Contract Development',
      'DApp Creation & Deployment',
      'Cryptocurrency Integration',
      'Blockchain Consulting'
    ],
    pricing: 'From $699'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleConsultancyClick = () => {
    window.open('https://varchas-orthodox-64s-projects.vercel.app', '_blank');
  };

  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Services & Consultancy</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive digital solutions and expert consultancy to transform your ideas into reality
          </p>
        </motion.div>

        {/* Featured Consultancy Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card p-8 relative overflow-hidden group border-2 border-gradient-to-r from-purple-500 to-cyan-500">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 mr-4">
                  <Building2 className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text">Visit My Consultancy</h3>
                  <p className="text-white/70">Explore comprehensive digital solutions and professional services</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">25+</div>
                  <div className="text-white/60 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-white/60 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-white/60 text-sm">Support Available</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConsultancyClick}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Building2 size={20} />
                <span>Visit Consultancy Website</span>
                <ExternalLink size={16} />
              </motion.button>

              <div className="mt-4 text-sm text-white/50">
                varchas-orthodox-64s-projects.vercel.app
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: (index * 0.1) + 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-6 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/60">Starting</div>
                      <div className="text-lg font-bold gradient-text">{service.pricing}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: ((index * 0.1) + 0.4) + (featureIndex * 0.05) }}
                        className="flex items-center"
                      >
                        <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={16} />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStartedClick}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full blur-xl`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass-card p-8 text-center"
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">Why Choose My Services?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Excellence',
                description: 'Multiple hackathon wins and academic achievements demonstrate consistent high-quality delivery.',
                icon: '🏆'
              },
              {
                title: 'Cutting-Edge Tech',
                description: 'Expertise in latest technologies including AI, blockchain, and modern web frameworks.',
                icon: '🚀'
              },
              {
                title: 'End-to-End Support',
                description: 'From concept to deployment, providing comprehensive support throughout your project lifecycle.',
                icon: '💼'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
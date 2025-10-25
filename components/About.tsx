'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  'PHP 8.1/8.2/11',
  'Laravel 9/10',
  'MySQL',
  'API Design',
  'Microservices',
  'AWS',
  'Docker',
  'Redis',
  'Domain-Driven Design',
  'E-commerce',
  'REST APIs',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Linux'
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Ahmed - Backend Engineer"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Backend Software Engineer
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With over 5 years of experience in backend development, I specialize in building 
              robust, scalable applications using Laravel 9/10 and PHP 8.1/8.2/11. My expertise 
              spans across domain-driven design (DDD), e-commerce platforms, and both mobile & 
              web applications.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about writing clean, maintainable code and implementing best practices 
              in software architecture. When I'm not coding, I enjoy sharing my knowledge through 
              technical blogging and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Technical Skills
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary-50 to-accent-50 text-primary-800 px-4 py-2 rounded-full text-sm font-medium text-center hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Experience Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
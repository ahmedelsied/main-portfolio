'use client'

import { motion } from 'framer-motion'

const skills = [
  'PHP',
  'Laravel',
  'JavaScript',
  'TypeScript',
  'NestJS',
  'Python',
  'C++',
  'Docker',
  'Git',
  'Linux',
  'AWS',
  'API Design',
  'Domain-Driven Design',
  'Software Architecture',
  'System Design',
  'MySQL',
  'PostgreSQL',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available for Work
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Senior Backend Engineer
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  With over <span className="font-semibold text-primary-600">6 years of experience</span> in backend development, including 2 years of freelance projects, I specialize in building 
                  robust, scalable applications using Laravel, PHP, and modern technologies.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My expertise spans across <span className="font-semibold text-accent-600">domain-driven design (DDD)</span>, e-commerce platforms, and both mobile & 
                  web applications. I&#39;m passionate about writing clean, maintainable code and implementing best practices 
                  in software architecture.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I have experience <span className="font-semibold text-primary-600">leading backend teams</span> and mentoring junior developers, 
                  while delivering impactful software solutions for forward-thinking companies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💻</span>
                </div>
                Technical Skills
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900 dark:to-accent-900 text-primary-800 dark:text-primary-200 px-4 py-3 rounded-xl text-sm font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-primary-200 dark:border-primary-700"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📊</span>
                </div>
                Experience Stats
              </h4>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">6+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Support Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
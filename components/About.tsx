'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Server, Layers, TestTube } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: [
      { name: 'PHP', proficiency: 95 },
      { name: 'JavaScript', proficiency: 70 },
      { name: 'TypeScript', proficiency: 50 },
      { name: 'Python', proficiency: 50 },
      { name: 'C++', proficiency: 50 }
    ]
  },
  {
    icon: Database,
    title: 'Frameworks',
    skills: [
      { name: 'Laravel', proficiency: 95 },
      { name: 'NestJS', proficiency: 50 },
      { name: 'Node.js', proficiency: 50 }
    ]
  },
  {
    icon: Server,
    title: 'Databases',
    skills: [
      { name: 'MySQL', proficiency: 90 },
      { name: 'PostgreSQL', proficiency: 85 },
      { name: 'MongoDB', proficiency: 70 }
    ]
  },
  {
    icon: Layers,
    title: 'Architecture',
    skills: [
      { name: 'DDD', proficiency: 80 },
      { name: 'System Design', proficiency: 80 },
      { name: 'API Design', proficiency: 80 },
      { name: 'Microservices', proficiency: 80 }
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps',
    skills: [
      { name: 'Docker', proficiency: 60 },
      { name: 'AWS', proficiency: 50 },
      { name: 'Linux', proficiency: 70 },
      { name: 'Git', proficiency: 95 },
      { name: 'CI/CD', proficiency: 75 }
    ]
  },
  {
    icon: TestTube,
    title: 'Testing & Automation',
    skills: [
      { name: 'PHPUnit', proficiency: 90 },
      { name: 'Pest PHP', proficiency: 85 },
      { name: 'Selenium', proficiency: 65 },
      { name: 'Puppeteer', proficiency: 65 }
    ]
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Crafting robust, scalable backend systems that power your business success
          </p>
        </motion.div>

        {/* Main Content - Bio + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400 opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary-700/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary-500/40">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available for Work
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Senior Backend Engineer
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg leading-relaxed text-white/90 mb-6">
                    Results-driven Software Engineer with <span className="font-bold text-white">6 years of experience</span> in backend development, including 2 years of 
                    successful freelance projects. I design and optimize scalable, secure, high-performance applications using modern technologies 
                    like PHP, Laravel, and MySQL.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-white/90">
                    I excel at tackling complex backend challenges, <span className="font-bold text-white">improving system architecture</span>, and delivering impactful solutions. 
                    Seeking to contribute my expertise to forward-thinking teams while continuing professional growth.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg leading-relaxed text-white/90 mb-6">
                    I have experience <span className="font-bold text-white">leading backend teams</span> and mentoring junior developers, 
                    delivering impactful solutions for forward-thinking companies.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: '6+', label: 'Years Exp' },
                      { number: '50+', label: 'Projects' },
                      { number: '100%', label: 'Satisfaction' },
                      { number: '24/7', label: 'Support' }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold mb-1">{stat.number}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + skillIndex * 0.05 + 0.3, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, Award } from 'lucide-react'

const experiences = [
  {
    company: 'Robusta Technology Group',
    position: 'Backend Developer',
    location: 'Cairo, Egypt',
    period: '11/2024 – Present',
    type: 'Full-time',
    achievements: [
      'Developed and maintained scalable Laravel applications using Spatie packages and Filament for admin dashboards.',
      'Designed and optimized relational databases (MySQL/PostgreSQL), creating well-structured schemas and writing complex queries for improved performance.',
      'Conducted code reviews to ensure adherence to Laravel best practices, proper use of Spatie packages, and secure, maintainable code.',
      'Collaborated with the DevOps team to streamline deployments using Laravel Forge/Envoyer and troubleshoot server-side issues.',
      'Built RESTful APIs with Laravel Sanctum/Passport for secure integration with frontend apps and third-party services.',
      'Created custom Filament components and dashboards to enhance internal tooling and user experience.',
      'Supported team growth by mentoring junior developers on Laravel, Eloquent optimization, and package integration.'
    ]
  },
  {
    company: 'Almasa',
    position: 'Backend Developer',
    location: 'Kuwait',
    period: '07/2024 – 11/2024',
    type: 'Part-time',
    achievements: [
      'As the backend team leader, directed the development of a scalable internal e-commerce platform using domain-oriented architecture.',
      'Led the team in creating essential features, optimizing performance, and integrating payment systems seamlessly.',
      'Led the backend team in developing an internal e-commerce dashboard and mobile app API using Laravel.',
      'Implemented domain-oriented architecture to enhance system scalability and maintainability.',
      'Developed API features, including real-time chat functionality, to enhance user interaction and engagement.',
      'Integrated SadadPay payment gateway for secure and efficient payment processing.',
      'Implemented a notification system to streamline communication and improve user experience.',
      'Ensured scalability, security, and performance optimization for the company\'s internal e-commerce product.'
    ]
  },
  {
    company: 'Codebase-tech',
    position: 'Backend Developer',
    location: 'Al Dakahlia, Egypt',
    period: '01/2022 – 01/2024',
    type: 'Full-time',
    achievements: [
      'Contributed to the entire software development lifecycle (SDLC) of multiple complex projects over a two-year period, from architecture design to deployment, with a focus on backend development using PHP/Laravel and MySQL.',
      'Designed scalable, secure, and high-performance systems.',
      'Integrated third-party APIs and optimized databases for high-traffic efficiency.',
      'Resolved performance bottlenecks and managed complex system integrations.',
      'Collaborated with cross-functional teams to deliver reliable, on-time solutions.',
      'Contributed to technical decision-making for maintainable and efficient architectures.'
    ]
  },
  {
    company: 'Waitbuzz',
    position: 'Backend Developer',
    location: 'Al Dakahlia, Egypt',
    period: '09/2021 – 12/2021',
    type: 'Internship',
    achievements: [
      'Contributed to backend architecture design, ensuring seamless functionality and scalability.',
      'Optimized performance throughout the development lifecycle to meet production standards.',
      'Collaborated closely with senior developers to refine skills and deliver high-quality, production-ready solutions.'
    ]
  }
]

const awards = [
  {
    title: 'Best Arabic App & Best Social Impact Awards',
    event: 'Apps Up 2022 Huawei Global App Innovation',
    project: 'Us and Them App',
    date: '08/2022',
    company: 'Huawei'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 to-accent-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Experience Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 font-semibold mb-1">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Awards & Recognition
          </h3>
          
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900 dark:to-accent-900 rounded-2xl p-6 border border-primary-200 dark:border-primary-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-2">
                      {award.event}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Project:</strong> {award.project}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{award.date}</span>
                      <span>•</span>
                      <span>{award.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

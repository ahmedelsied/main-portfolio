'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce solution with advanced inventory management',
    longDescription: 'A comprehensive e-commerce platform built with Laravel 10, featuring advanced inventory management, payment processing, order tracking, and admin dashboard. Implements domain-driven design principles and microservices architecture.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    techStack: ['Laravel 10', 'PHP 8.2', 'MySQL', 'Redis', 'Vue.js', 'AWS'],
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/ahmed/ecommerce-platform',
    featured: true
  },
  {
    id: 2,
    title: 'API Gateway Service',
    description: 'Microservices API gateway with authentication and rate limiting',
    longDescription: 'A robust API gateway service that handles authentication, rate limiting, request routing, and load balancing for microservices architecture. Built with Laravel and integrated with Redis for caching and session management.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    techStack: ['Laravel 9', 'PHP 8.1', 'Redis', 'Docker', 'Nginx', 'JWT'],
    liveUrl: 'https://api-gateway-demo.com',
    githubUrl: 'https://github.com/ahmed/api-gateway',
    featured: true
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat application with real-time messaging',
    longDescription: 'A real-time chat application featuring instant messaging, file sharing, and group chat capabilities. Built with Laravel for the backend API and WebSockets for real-time communication.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    techStack: ['Laravel 10', 'PHP 8.2', 'WebSockets', 'MySQL', 'Pusher', 'Vue.js'],
    liveUrl: 'https://chat-demo.com',
    githubUrl: 'https://github.com/ahmed/chat-app',
    featured: true
  },
  {
    id: 4,
    title: 'Content Management System',
    description: 'Headless CMS with RESTful API and admin interface',
    longDescription: 'A flexible headless CMS built with Laravel, providing a RESTful API for content management. Features include content versioning, media management, and role-based access control.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    techStack: ['Laravel 9', 'PHP 8.1', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS S3'],
    liveUrl: 'https://cms-demo.com',
    githubUrl: 'https://github.com/ahmed/headless-cms',
    featured: false
  },
  {
    id: 5,
    title: 'Mobile App Backend',
    description: 'RESTful API backend for mobile applications',
    longDescription: 'A comprehensive RESTful API backend designed for mobile applications, featuring user authentication, push notifications, file uploads, and real-time data synchronization.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    techStack: ['Laravel 10', 'PHP 8.2', 'MySQL', 'Firebase', 'AWS', 'Docker'],
    liveUrl: 'https://mobile-api-demo.com',
    githubUrl: 'https://github.com/ahmed/mobile-backend',
    featured: false
  }
]

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my expertise in backend development, 
            API design, and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group dark:bg-gray-900 dark:border-gray-600"
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-2 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
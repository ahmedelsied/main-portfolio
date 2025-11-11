'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  liveUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'EgyptInnovate Platform',
    description: 'Platform for startups and entrepreneurs to pitch their ideas and get feedback',
    longDescription: 'Built with Laravel and PHP, addressing the unique challenges of startup pitching through a comprehensive platform that streamlines idea submission, voting, and feedback collection. Implemented Meilisearch for fast and relevant search functionality across ideas and startups, enabling users to quickly find relevant pitches. Developed efficient data structures for handling high-volume submissions, optimized ranking algorithms for idea selection, and integrated social media sharing for visibility. Designed scalable architecture to support multiple users and ideas, with real-time synchronization for collaborative voting and engagement features. Deployed with robust caching strategies to handle peak usage during pitch events and ensure responsive user experience across all devices.',
    image: '/egyptinnovate.png',
    liveUrl: 'https://egyptinnovate.com',
    featured: true
  },
  {
    id: 2,
    title: 'Circle Academy Platform',
    description: 'Full-featured e-learning solution with course management and payment processing',
    longDescription: 'Built with Laravel and PHP, addressing scalability challenges through domain-driven design and microservices architecture. Implemented Redis caching for high-traffic scenarios, optimized video streaming with adaptive bitrate, and ensured secure payment processing across multiple gateways. Deployed on AWS with CDN integration for global content delivery and high availability.',
    image: '/circle-academy.webp',
    liveUrl: 'https://circlesacademy.info',
    featured: true
  },
  {
    id: 3,
    title: 'FITXPERT Platform',
    description: 'All-in-one software platform for fitness businesses and personal trainers',
    longDescription: 'Built with Laravel and PHP, addressing the unique challenges of fitness business management through a comprehensive platform that streamlines client management, workout planning, and business operations. Implemented efficient data structures for handling high-volume client interactions, optimized scheduling algorithms for appointment management, and integrated payment processing for subscription-based services. Designed scalable architecture to support multiple trainers and gyms, with real-time synchronization for client progress tracking and engagement features. Deployed with robust caching strategies to handle peak usage during training hours and ensure responsive user experience across all devices.',
    image: '/fitexpert.png',
    liveUrl: 'https://fitexpert.team',
    featured: true
  },
  {
    id: 4,
    title: 'iTrainer Mobile App',
    description: 'Mobile fitness app for Android and iOS helping users achieve goals through small habits',
    longDescription: 'Built with Laravel and PHP, providing a robust RESTful API backend for Android and iOS mobile applications. Designed to support users in improving their lifestyle and achieving fitness goals through small, sustainable habits. Implemented efficient data synchronization between mobile clients and server, optimized push notification system for habit reminders and motivation, and developed scalable architecture to handle concurrent user interactions. Integrated secure authentication, progress tracking, and habit management features. Deployed with high availability to ensure seamless user experience across both platforms, with efficient caching strategies for real-time data updates and offline capability support.',
    image: '/itrainer.png',
    liveUrl: 'https://itrainer.fit',
    featured: true
  }
]

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
      }
    })
    // Reset timer after manual navigation
    resetTimer()
  }

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          setDirection(1)
          return prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
        })
      }, 5000)
    }
  }

  // Auto-play carousel with pause on hover/interaction
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          setDirection(1)
          return prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
        })
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, featuredProjects.length])

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-max-width">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my expertise in backend development, 
            API design, and modern web technologies.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  } else {
                    // Resume timer if swipe wasn't strong enough
                    setIsPaused(false)
                  }
                }}
                className="w-full"
              >
                <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                  {/* Image Container */}
                  <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700">
                    <Image
                      src={featuredProjects[currentIndex].image}
                      alt={featuredProjects[currentIndex].title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="100vw"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Featured
                    </div>

                    {/* Hover Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {featuredProjects[currentIndex].liveUrl && (
                        <motion.a
                          href={featuredProjects[currentIndex].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all text-lg"
                        >
                          View Project
                          <ArrowRight className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {featuredProjects[currentIndex].title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-4">
                      {featuredProjects[currentIndex].description}
                    </p>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {featuredProjects[currentIndex].longDescription}
                    </p>
                    
                    {/* Action Button */}
                    {featuredProjects[currentIndex].liveUrl && (
                      <a
                        href={featuredProjects[currentIndex].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:gap-3 transition-all group/btn"
                      >
                        <span>View Live Demo</span>
                        <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-full" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Positioned relative to image container (fixed height) */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-[160px] md:top-[192px] -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-[160px] md:top-[192px] -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                  resetTimer()
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-primary-600 to-accent-600'
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  url: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable APIs with Laravel 10: Best Practices and Patterns',
    excerpt: 'Learn how to design and implement scalable RESTful APIs using Laravel 10, covering authentication, rate limiting, caching strategies, and microservices architecture.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Backend Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    url: 'https://blog.ahmed.com/laravel-10-scalable-apis'
  },
  {
    id: 2,
    title: 'Domain-Driven Design in PHP: A Practical Guide',
    excerpt: 'Explore how to implement Domain-Driven Design principles in PHP applications, with real-world examples and practical patterns for building maintainable code.',
    date: '2024-01-08',
    readTime: '12 min read',
    category: 'Software Architecture',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    url: 'https://blog.ahmed.com/domain-driven-design-php'
  },
  {
    id: 3,
    title: 'Microservices Communication Patterns: When to Use What',
    excerpt: 'A comprehensive guide to microservices communication patterns, including synchronous vs asynchronous communication, event-driven architecture, and API gateway patterns.',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'Microservices',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
    url: 'https://blog.ahmed.com/microservices-communication-patterns'
  }
]

export default function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing insights, tutorials, and best practices in backend development, 
            software architecture, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group cursor-pointer dark:bg-gray-900 dark:border-gray-600"
              onClick={() => window.open(post.url, '_blank')}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://blog.ahmed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
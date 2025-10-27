'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [isClient, setIsClient] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Generate random particles - only on client side
  const particles = isClient ? Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: 0,
    duration: Math.random() * 20 + 30,
    phase: Math.random() * Math.PI * 2
  })) : []

  // Generate geometric shapes - only on client side
  const shapes = isClient ? Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    delay: 0,
    duration: 30
  })) : []

  useEffect(() => {
    if (!isClient) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let time = 0
    
    const animate = () => {
      time += 0.016
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const width = canvas.width
      const height = canvas.height
      
      // Particles
      ctx.globalCompositeOperation = 'source-over'
      ctx.filter = 'none'
      particles.forEach(particle => {
        if (time < particle.delay) return
        const t = ((time - particle.delay) % particle.duration) / particle.duration
        // Smooth infinite up and down oscillation with unique phase for each particle
        const bounce = Math.sin(t * Math.PI * 2 + particle.phase)
        const y = particle.y + 10 * bounce
        const opacity = 0.6 + 0.4 * (Math.abs(bounce) + 1) / 2
        const scale = 1 + 0.5 * (Math.abs(bounce) + 1) / 2
        
        ctx.globalAlpha = opacity
        ctx.fillStyle = '#2dd4bf'
        ctx.beginPath()
        ctx.arc(width * particle.x / 100, height * y / 100, particle.size * scale / 2, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Shapes
      shapes.forEach(shape => {
        if (time < shape.delay) return
        const t = ((time - shape.delay) % shape.duration) / shape.duration
        const rotation = shape.rotation + t * 360
        const scale = 1
        const opacity = 0.2
        
        ctx.save()
        ctx.translate(width * shape.x / 100, height * shape.y / 100)
        ctx.rotate(rotation * Math.PI / 180)
        ctx.scale(scale, scale)
        ctx.globalAlpha = opacity
        ctx.strokeStyle = '#5eead4'
        
        ctx.lineWidth = 2
        ctx.strokeRect(-32, -32, 64, 64)
        ctx.restore()
      })
      
      // Grid
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)'
      ctx.lineWidth = 1
      const gridOffset = (time % 20) * 50
      for (let x = (gridOffset % 50) - 50; x < width; x += 50) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = (gridOffset % 50) - 50; y < height; y += 50) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      ctx.restore()
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [isClient, particles, shapes])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      {/* Enhanced Background Animation */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&#39;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Ahmed Elsayed
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
            Senior Backend Engineer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building powerful backend systems that help businesses scale faster, reduce costs, and grow revenue. 
            <br></br><em>Let's build something amazing together!</em>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
          >
            See My Work
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          <a
            href="/Ahmed-Elsayed-Backend-Resume.pdf"
            download
            className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2 group"
          >
            Download CV
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
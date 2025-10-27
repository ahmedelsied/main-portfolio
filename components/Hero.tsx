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
  const particles = isClient ? Array.from({ length: 50 }, (_, i) => ({
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
      
      // Helper to convert easeInOut timing
      const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      
      // Circle 1: -top-40 -right-40, w-80 h-80, primary-200, duration 8s
      const t1 = ((time + 2000) % 2000) / 2000
      const circle1X = 30 * Math.sin(t1 * Math.PI * 2)
      const circle1Y = -20 * Math.sin(t1 * Math.PI * 2)
      const circle1Scale = 1
      const circle1Opacity = 0.7 + 0.2 * Math.sin(t1 * Math.PI * 2)
      
      ctx.save()
      ctx.translate(width - 160 + circle1X, -160 + circle1Y)
      ctx.scale(circle1Scale, circle1Scale)
      ctx.globalAlpha = circle1Opacity
      ctx.globalCompositeOperation = 'multiply'
      ctx.filter = 'blur(40px)'
      const gradient1 = ctx.createRadialGradient(160, 160, 0, 160, 160, 160)
      gradient1.addColorStop(0, '#99f6e4')
      gradient1.addColorStop(1, '#99f6e400')
      ctx.fillStyle = gradient1
      ctx.beginPath()
      ctx.arc(160, 160, 160, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
      
      // Circle 2: -bottom-40 -left-40, accent-200, duration 10s, delay 1s
      const t2 = ((time + 2000) % 2000) / 2000
      const circle2X = -25 * Math.sin(t2 * Math.PI * 2)
      const circle2Y = 15 * Math.sin(t2 * Math.PI * 2)
      const circle2Scale = 1
      const circle2Opacity = 0.7 + 0.1 * Math.sin(t2 * Math.PI * 2)
      
      ctx.save()
      ctx.translate(-160 + circle2X, height + 160 + circle2Y)
      ctx.scale(circle2Scale, circle2Scale)
      ctx.globalAlpha = circle2Opacity
      ctx.globalCompositeOperation = 'multiply'
      ctx.filter = 'blur(40px)'
      const gradient2 = ctx.createRadialGradient(160, 160, 0, 160, 160, 160)
      gradient2.addColorStop(0, '#bfdbfe')
      gradient2.addColorStop(1, '#bfdbfe00')
      ctx.fillStyle = gradient2
      ctx.beginPath()
      ctx.arc(160, 160, 160, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
      
      // Circle 3: center, primary-300, duration 12s, delay 2s
      const t3 = ((time + 2000) % 2000) / 2000
      const ease4Points = [
        easeInOut((t3 * 4) % 1),
        easeInOut((t3 * 4 - 1) % 1),
        easeInOut((t3 * 4 - 2) % 1),
        easeInOut((t3 * 4 - 3) % 1)
      ]
      const circle3X = 20 * (ease4Points[0] - 0.5) - 15 * (ease4Points[2] - 0.5)
      const circle3Y = -25 * (ease4Points[1] - 0.5) + 10 * (ease4Points[3] - 0.5)
      const circle3Scale = 1
      const circle3Opacity = 0.5 + 0.2 * Math.sin(t3 * Math.PI * 2)
      
      ctx.save()
      ctx.translate(width / 2 + circle3X, height / 2 + circle3Y)
      ctx.scale(circle3Scale, circle3Scale)
      ctx.globalAlpha = circle3Opacity
      ctx.globalCompositeOperation = 'multiply'
      ctx.filter = 'blur(40px)'
      const gradient3 = ctx.createRadialGradient(160, 160, 0, 160, 160, 160)
      gradient3.addColorStop(0, '#5eead4')
      gradient3.addColorStop(1, '#5eead400')
      ctx.fillStyle = gradient3
      ctx.beginPath()
      ctx.arc(160, 160, 160, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
      
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
      
      // Orb 1: top-1/4 left-1/4, w-32 h-32
      const t4 = ((time + 2000) % 2000) / 2000
      const orb1X = width * 0.25 + 50 * Math.sin(t4 * Math.PI * 2) - 30 * Math.sin(t4 * Math.PI * 4)
      const orb1Y = height * 0.25 - 40 * Math.sin(t4 * Math.PI * 2) + 20 * Math.sin(t4 * Math.PI * 4)
      const orb1Scale = 1 + 0.3 * Math.sin(t4 * Math.PI * 2) - 0.2 * Math.sin(t4 * Math.PI * 4)
      
      ctx.save()
      ctx.translate(orb1X, orb1Y)
      ctx.scale(orb1Scale, orb1Scale)
      ctx.globalAlpha = 0.3
      ctx.filter = 'blur(30px)'
      const gradient4 = ctx.createRadialGradient(-32, -32, 0, 0, 0, 128)
      gradient4.addColorStop(0, '#2dd4bf')
      gradient4.addColorStop(1, '#60a5fa')
      ctx.fillStyle = gradient4
      ctx.beginPath()
      ctx.arc(0, 0, 128, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
      
      // Orb 2: bottom-1/4 right-1/4, w-24 h-24, delay 3s
      const t5 = ((time + 2000) % 2000) / 2000
      const orb2X = width * 0.75 - 20 * Math.sin(t5 * Math.PI * 2) + 10 * Math.sin(t5 * Math.PI * 4)
      const orb2Y = height * 0.75 + 10 * Math.sin(t5 * Math.PI * 2) - 10 * Math.sin(t5 * Math.PI * 4)
      const orb2Scale = 1 - 0.3 * Math.sin(t5 * Math.PI * 2) + 0.2 * Math.sin(t5 * Math.PI * 4)
      
      ctx.save()
      ctx.translate(orb2X, orb2Y)
      ctx.scale(orb2Scale, orb2Scale)
      ctx.globalAlpha = 0.25
      ctx.filter = 'blur(30px)'
      const gradient5 = ctx.createRadialGradient(-24, -24, 0, 0, 0, 96)
      gradient5.addColorStop(0, '#60a5fa')
      gradient5.addColorStop(1, '#2dd4bf')
      ctx.fillStyle = gradient5
      ctx.beginPath()
      ctx.arc(0, 0, 96, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
      
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
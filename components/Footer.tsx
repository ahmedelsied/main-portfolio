'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, X, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ahmedelsied',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dev-ahmed-elsied',
      icon: Linkedin
    },
    {
      name: 'X',
      url: 'https://x.com/Dev_A_Elsayed',
      icon: X
    },
    {
      name: 'Email',
      url: 'mailto:dev.ahmed.elsied@gmail.com',
      icon: Mail
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-max-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Dev Ahmed Elsayed
              </h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Backend Software Engineer passionate about building scalable, 
                maintainable applications with Laravel, PHP, and modern web technologies.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-gray-400">
                <p><a href="mailto:dev.ahmed.elsied@gmail.com">dev.ahmed.elsied@gmail.com</a></p>
                <p><a href="tel:+201024404534">+201024404534</a></p>
                <p>Mansoura, Egypt</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dev Ahmed Elsayed. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
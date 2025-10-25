import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

// Dynamically import components with images to prevent hydration issues
const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max-width">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading projects...</p>
        </div>
      </div>
    </section>
  )
})

const BlogPreview = dynamic(() => import('@/components/BlogPreview'), {
  ssr: false,
  loading: () => (
    <section id="blog" className="section-padding bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-max-width">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading blog posts...</p>
        </div>
      </div>
    </section>
  )
})

const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-max-width">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading contact form...</p>
        </div>
      </div>
    </section>
  )
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blog">
        <BlogPreview />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import BlogPreview from '@/components/BlogPreview'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
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
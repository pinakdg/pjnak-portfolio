import TerminalHero from './components/TerminalHero.jsx'
import Projects from './components/Projects.jsx'
import BlogSection from './components/BlogSection.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import FunFacts from './components/FunFacts.jsx'
import { GITHUB_URL } from './config.js'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-gray-950/70 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold">pjnak</a>
          <nav className="flex items-center gap-3 text-sm">
            <a className="hover:underline" href="#about">about</a>
            <a className="hover:underline" href="#projects">projects</a>
            <a className="hover:underline" href="#blog">blog</a>
            <a className="hover:underline" href="#skills">skills</a>
            <a className="hover:underline" href="#contact">contact</a>
            <a className="hover:underline" href="#funfacts">fun facts</a>
            {/* CV button (put your file at /public/cv.pdf to activate download) */}
            <a className="px-3 py-1 rounded-lg border border-gray-700 hover:border-gray-500"
               href="/cv.pdf" download>cv download</a>
            <a className="px-3 py-1 rounded-lg border border-gray-700 hover:border-gray-500"
               href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="max-w-6xl mx-auto px-4">
          <TerminalHero />
        </section>

        <About />
        <Skills />

        <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
          <Projects />
        </section>
        <section id="blog" className="max-w-6xl mx-auto px-4 py-12">
          <BlogSection />
        </section>
        <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
          <ContactForm />
        </section>

        
        <FunFacts />
      </main>

      <Footer />
    </div>
  )
}

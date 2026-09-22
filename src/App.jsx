import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Documentation from './sections/Documentation'
import WritingProcess from './sections/WritingProcess'
import Education from './sections/Education'
import Contact from './sections/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Documentation />
        <WritingProcess />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

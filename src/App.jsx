import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_40%)]" />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm">
          <p className="text-blue-200/70">© {new Date().getFullYear()} • MIT‑WPU CSBS • Built with love for tech & entrepreneurship</p>
          <a href="#home" className="text-blue-300 hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App

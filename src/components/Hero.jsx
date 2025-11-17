import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-blue-200/90 mb-3">MIT-WPU • Computer Science & Business Systems</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Student, Full‑Stack Developer & Aspiring Entrepreneur
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg">
            I build modern web products with delightful user experiences and a business mindset. Exploring startups, product strategy, and scalable systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

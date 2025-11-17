import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-blue-100/80 leading-relaxed">
              Hey! I’m a CSBS student at MIT‑WPU with a passion for technology and entrepreneurship. I love building end‑to‑end web apps, experimenting with product ideas, and collaborating with teams.
            </p>
            <p className="mt-3 text-blue-100/80 leading-relaxed">
              Skills: JavaScript, React, Tailwind, FastAPI, MongoDB, Git, REST APIs, UI/UX basics.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'FastAPI', 'MongoDB', 'Tailwind', 'Python', 'Node.js'].map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-blue-100/90 border border-white/10">{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10" />
            <p className="mt-4 text-blue-100/80 text-sm">
              Passionate about creating value through technology and startups. Always exploring new tools, shipping projects, and learning from feedback.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

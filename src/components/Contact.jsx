import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-blue-100/80">Open to internships, freelance work, and startup collabs.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-8 grid sm:grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6"
        >
          <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" />
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" />
          <textarea required placeholder="Message" className="sm:col-span-2 h-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" />
          <button className="sm:col-span-2 justify-self-start px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30">Send</button>
          {sent && <p className="sm:col-span-2 text-green-300">Thanks! I’ll get back to you soon.</p>}
        </motion.form>
      </div>
    </section>
  )
}

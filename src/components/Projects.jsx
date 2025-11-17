import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setProjects([])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const placeholder = [
    {
      title: 'Campus Connect',
      description: 'A community platform for clubs, events, and student collaboration with real-time updates.',
      tags: ['React', 'FastAPI', 'MongoDB'],
      github_url: 'https://github.com/',
      live_url: undefined,
      highlight: true,
    },
    {
      title: 'Startup Sprint',
      description: 'Hackathon project building a lean startup MVP with payments and analytics.',
      tags: ['Vite', 'Tailwind', 'Stripe'],
      github_url: 'https://github.com/',
      live_url: undefined,
      highlight: false,
    },
    {
      title: 'Algo Visualizer',
      description: 'Interactive DSA visualizations for learning and teaching on campus.',
      tags: ['TypeScript', 'D3', 'Vercel'],
      github_url: 'https://github.com/',
      live_url: undefined,
      highlight: false,
    },
  ]

  const items = projects?.length ? projects : placeholder

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.15),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <p className="mt-3 text-blue-100/80">A selection of things I’ve built recently.</p>
        </div>

        {loading ? (
          <p className="mt-10 text-blue-200">Loading projects...</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm text-blue-100/80">{p.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tags || []).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-blue-100/90 border border-white/10">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {p.github_url && (
                    <a href={p.github_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-blue-100 hover:bg-white/10"><Github size={16}/>Code</a>
                  )}
                  {p.live_url && (
                    <a href={p.live_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-blue-100 hover:bg-white/10"><ExternalLink size={16}/>Live</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

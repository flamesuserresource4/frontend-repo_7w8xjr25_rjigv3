import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <div className="leading-tight">
              <p className="text-white font-semibold">MIT-WPU • CSBS</p>
              <p className="text-xs text-blue-200/80">Entrepreneur • Full‑Stack Dev</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-blue-100/80 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:someone@example.com" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100"><Mail size={18} /></a>
            <a href="https://github.com" target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100" rel="noreferrer"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100" rel="noreferrer"><Linkedin size={18} /></a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-blue-100/90 hover:text-white">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

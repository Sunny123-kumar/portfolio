import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), [])
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const linkClass = (id, mobile = false) => {
    const isActive = activeId === id
    if (mobile) {
      return [
        'focus-ring block rounded-md px-3 py-3 text-base font-medium transition',
        isActive
          ? 'bg-accent-soft text-accent-ink'
          : 'text-ink hover:bg-accent-soft hover:text-accent-ink',
      ].join(' ')
    }
    return [
      'focus-ring rounded-md px-3 py-2 text-sm font-medium transition',
      isActive
        ? 'bg-accent-soft text-accent'
        : 'text-ink-muted hover:text-accent',
    ].join(' ')
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-surface/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="focus-ring font-display text-base font-semibold tracking-tight text-ink"
          onClick={(e) => {
            e.preventDefault()
            handleNav('home')
          }}
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.id)
                }}
                className={linkClass(link.id)}
                aria-current={activeId === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-elevated text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-surface lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNav(link.id)
                    }}
                    className={linkClass(link.id, true)}
                    aria-current={activeId === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

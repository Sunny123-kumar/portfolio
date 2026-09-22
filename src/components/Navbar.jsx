import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'
import { useScrolled } from '../hooks/useScrolled'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

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
                className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNav('contact')
            }}
            className="focus-ring hidden items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover sm:inline-flex dark:text-stone-950"
            aria-label="Let's Talk — go to contact section"
          >
            Let&apos;s Talk
          </a>
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
                    className="focus-ring block rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-accent-soft hover:text-accent-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav('contact')
                  }}
                  className="focus-ring flex w-full items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white dark:text-stone-950"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

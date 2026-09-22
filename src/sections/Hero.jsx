import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
import Button from '../components/Button'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

const typedLines = [
  { type: 'comment', text: '// API Documentation' },
  { type: 'method', text: 'GET /users' },
  { type: 'key', text: 'Request' },
  { type: 'key', text: 'Response' },
  { type: 'status', text: '200 OK' },
]

function DocPreviewCard() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= typedLines.length) return undefined
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 700)
    return () => clearTimeout(timer)
  }, [visibleCount])

  useEffect(() => {
    if (visibleCount < typedLines.length) return undefined
    const reset = setTimeout(() => setVisibleCount(0), 2800)
    return () => clearTimeout(reset)
  }, [visibleCount])

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-[0_20px_50px_-24px_rgba(28,25,23,0.35)]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
        <span className="ml-2 font-mono text-xs text-ink-subtle">
          api-docs.md
        </span>
      </div>

      <div className="grid gap-0 md:grid-cols-[140px_1fr]">
        <aside className="hidden border-r border-border bg-surface p-4 md:block">
          <p className="mb-3 font-mono text-[10px] tracking-wider text-ink-subtle uppercase">
            Docs
          </p>
          <ul className="space-y-2 font-mono text-xs text-ink-muted">
            <li className="text-accent">Overview</li>
            <li>Auth</li>
            <li>Endpoints</li>
            <li>Schemas</li>
          </ul>
        </aside>

        <div className="space-y-4 p-5 sm:p-6">
          <div>
            <p className="font-mono text-xs tracking-wider text-accent uppercase">
              API Documentation
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">
              Users Resource
            </h3>
          </div>

          <div className="min-h-[148px] rounded-lg border border-border bg-code-bg p-4 font-mono text-xs sm:text-sm">
            {typedLines.slice(0, visibleCount).map((line, i) => (
              <motion.p
                key={`${line.text}-${i}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  line.type === 'comment'
                    ? 'text-stone-500'
                    : line.type === 'method'
                      ? 'text-teal-300'
                      : line.type === 'status'
                        ? 'text-emerald-400'
                        : 'text-stone-300'
                }
              >
                {line.text}
                {i === visibleCount - 1 ? (
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-teal-300 align-middle" />
                ) : null}
              </motion.p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded border border-border px-2 py-1 font-mono text-[10px] text-ink-muted">
              OpenAPI
            </span>
            <span className="rounded border border-border px-2 py-1 font-mono text-[10px] text-ink-muted">
              Swagger
            </span>
            <span className="rounded border border-border px-2 py-1 font-mono text-[10px] text-ink-muted">
              REST
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 0%, black 20%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.14em] text-accent uppercase sm:text-xs">
            {profile.heroLabel}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {profile.heroHeadline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {profile.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" ariaLabel="View my work — go to projects">
              View My Work
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              ariaLabel="Contact me — go to contact section"
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-muted transition hover:border-accent hover:text-accent"
              aria-label="Visit Sunny Kumar on GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-muted transition hover:border-accent hover:text-accent"
              aria-label="Visit Sunny Kumar on LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-accent-soft/60 blur-2xl dark:bg-accent-soft/30" />
          <DocPreviewCard />
        </motion.div>
      </div>
    </section>
  )
}

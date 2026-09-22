import { motion } from 'framer-motion'
import { profile } from '../data/content'
import Button from '../components/Button'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

function PortraitCard() {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
      <div
        className="absolute -inset-3 -z-10 rounded-2xl bg-accent-soft/50 blur-2xl dark:bg-accent-soft/25"
        aria-hidden="true"
      />

      <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[0_24px_60px_-28px_rgba(28,25,23,0.45)]">
        <div className="aspect-[4/5] overflow-hidden bg-stone-950">
          <img
            src="/images/sunny-kumar.png"
            alt="Sunny Kumar — Technical Content Writer and Documentation Specialist"
            className="h-full w-full object-cover object-top"
            width={640}
            height={800}
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <figcaption className="border-t border-border bg-surface-elevated px-5 py-4 sm:px-6 sm:py-5">
          <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {profile.name}
          </p>
          <p className="mt-1 text-sm leading-snug text-ink-muted sm:text-base">
            {profile.shortTitle}
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-wider text-accent uppercase">
            MERN Stack Developer
          </p>
        </figcaption>
      </div>
    </figure>
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
              ariaLabel="Go to contact details"
            >
              Get in Touch
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
          <PortraitCard />
        </motion.div>
      </div>
    </section>
  )
}

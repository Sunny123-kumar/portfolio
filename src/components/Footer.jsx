import { Mail } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Footer() {
  const year = 2026

  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="container-page flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md">
          <p className="font-display text-lg font-semibold text-ink">
            {profile.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {profile.title}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition hover:text-accent"
            aria-label="GitHub profile"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition hover:text-accent"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition hover:text-accent"
            aria-label={`Email ${profile.email}`}
          >
            <Mail size={16} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="container-page py-4 text-sm text-ink-subtle">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

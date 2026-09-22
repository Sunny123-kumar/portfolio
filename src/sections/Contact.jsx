import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border bg-surface-elevated/40">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Prefer email, phone, or social — use any of the channels below."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ContactRow
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value={profile.phoneDisplay}
              href={`tel:${profile.phone}`}
            />
            <ContactRow
              icon={GithubIcon}
              label="GitHub"
              value={profile.githubLabel}
              href={profile.github}
              external
            />
            <ContactRow
              icon={LinkedinIcon}
              label="LinkedIn"
              value={profile.linkedinLabel}
              href={profile.linkedin}
              external
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="focus-ring flex items-start gap-4 rounded-xl border border-border bg-surface-elevated p-4 transition hover:border-accent/40"
      aria-label={`${label}: ${value}`}
    >
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-accent">
        <Icon size={18} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium tracking-wide text-ink-subtle uppercase">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-ink sm:text-base">
          {value}
        </span>
      </span>
    </a>
  )
}

import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only for now — ready for email service integration (e.g. EmailJS, Formspree, API route)
    setSubmitted(true)
    setForm(initialForm)
  }

  const fieldClass =
    'w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-subtle transition focus-ring focus:border-accent'

  return (
    <section id="contact" className="section-pad border-t border-border bg-surface-elevated/40">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Better Technical Experiences"
            description="Have a product, API, documentation project, or technical content requirement? Let's connect."
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <ScrollReveal>
            <div className="space-y-5">
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
                placeholder
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-surface-elevated p-5 sm:p-7"
              noValidate={false}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink">
                  Name
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`mt-1.5 ${fieldClass}`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1.5 ${fieldClass}`}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium text-ink">
                Subject
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`mt-1.5 ${fieldClass}`}
                  placeholder="Documentation project, API docs, etc."
                />
              </label>

              <label className="mt-4 block text-sm font-medium text-ink">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`mt-1.5 resize-y ${fieldClass}`}
                  placeholder="Tell me about the product, API, or content need."
                />
              </label>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button type="submit" ariaLabel="Send message">
                  Send Message
                </Button>
                {submitted ? (
                  <p className="text-sm text-ink-muted" role="status">
                    Thanks — form is UI-ready. Connect an email service to
                    deliver messages.
                  </p>
                ) : (
                  <p className="text-xs text-ink-subtle">
                    Form UI only until an email service is connected.
                  </p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href, external, placeholder }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={(e) => {
        if (placeholder && href === '#') e.preventDefault()
      }}
      className="focus-ring flex items-start gap-4 rounded-xl border border-border bg-surface-elevated p-4 transition hover:border-accent/40"
      aria-label={`${label}: ${value}`}
    >
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-accent">
        <Icon size={18} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-medium tracking-wide text-ink-subtle uppercase">
          {label}
        </span>
        <span className="mt-0.5 block text-sm font-medium text-ink sm:text-base">
          {value}
        </span>
      </span>
    </a>
  )
}

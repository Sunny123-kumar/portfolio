import {
  BookOpen,
  Code2,
  Database,
  Layers,
  PenLine,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

const iconMap = {
  pen: PenLine,
  api: BookOpen,
  code: Code2,
  database: Database,
  tools: Wrench,
  layers: Layers,
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Technical Skills"
            description="Organized by the work I do — writing, API documentation, and the web stack that helps me understand products technically."
          />
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon] || Layers
            return (
              <ScrollReveal key={group.title} delay={index * 0.05}>
                <div className="group h-full rounded-xl border border-border bg-surface-elevated p-5 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_30px_-20px_rgba(15,118,110,0.45)] sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-accent transition group-hover:border-accent/40">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted transition group-hover:border-border-strong group-hover:text-ink"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

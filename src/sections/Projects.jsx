import { projects } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

function PaymentVisual() {
  return (
    <div className="rounded-lg border border-border bg-surface p-4" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-wider text-ink-subtle uppercase">
          Transfer guide
        </span>
        <span className="rounded bg-accent-soft px-2 py-0.5 font-mono text-[10px] text-accent-ink">
          Docs
        </span>
      </div>
      <div className="space-y-2">
        {['Open USD account', 'Fund balance', 'Send crypto abroad'].map(
          (step, i) => (
            <div
              key={step}
              className="flex items-center gap-3 rounded-md border border-border bg-surface-elevated px-3 py-2"
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <span className="text-xs text-ink-muted">{step}</span>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

function ApiVisual() {
  return (
    <div className="rounded-lg border border-border bg-code-bg p-4 font-mono text-xs" aria-hidden="true">
      <p className="text-teal-300">GET /api/users</p>
      <p className="mt-2 text-stone-500">Parameters</p>
      <p className="text-stone-300">Request</p>
      <p className="text-stone-300">Response</p>
      <p className="mt-2 text-emerald-400">200 OK</p>
    </div>
  )
}

function NotesVisual() {
  return (
    <div className="rounded-lg border border-border bg-surface p-4" aria-hidden="true">
      <div className="mb-3 flex gap-2">
        <span className="h-2 w-16 rounded bg-border" />
        <span className="h-2 w-10 rounded bg-border" />
      </div>
      <div className="space-y-2">
        <div className="h-8 rounded border border-border bg-surface-elevated" />
        <div className="h-16 rounded border border-dashed border-border-strong bg-surface-elevated/60" />
        <div className="flex gap-2">
          <span className="h-6 flex-1 rounded bg-accent/15" />
          <span className="h-6 w-16 rounded border border-border" />
        </div>
      </div>
    </div>
  )
}

const visuals = {
  payment: PaymentVisual,
  api: ApiVisual,
  notes: NotesVisual,
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-border bg-surface-elevated/40">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Featured Work"
            description="Documentation, API references, and full-stack work that sits between products, developers, and users."
          />
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Visual = visuals[project.visual]
            return (
              <ScrollReveal key={project.id} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-28px_rgba(15,118,110,0.5)]">
                  <div className="border-b border-border p-4 sm:p-5">
                    <Visual />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-accent">
                        Project {project.id}
                      </span>
                      <span className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-ink-muted">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {project.title}
                    </h3>
                    {project.technologies ? (
                      <p className="mt-1 font-mono text-[11px] text-ink-subtle">
                        {project.technologies}
                      </p>
                    ) : null}
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {project.description}
                    </p>

                    {project.highlights ? (
                      <ul className="mt-4 space-y-2">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-xs leading-relaxed text-ink-muted sm:text-sm"
                          >
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {project.tags ? (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-border px-2 py-0.5 text-[11px] text-ink-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

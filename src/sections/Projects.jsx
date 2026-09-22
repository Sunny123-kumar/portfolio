import { projects } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-border bg-surface-elevated/40">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects & documented work"
            description="Real documentation and development work — explained clearly so companies can see what I delivered and why it mattered."
          />
        </ScrollReveal>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06}>
              <article className="rounded-xl border border-border bg-surface-elevated p-5 transition hover:border-accent/40 sm:p-7 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-accent">
                        {project.id}
                      </span>
                      <span className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-ink-muted">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                      {project.title}
                    </h3>
                    {project.role ? (
                      <p className="mt-1 text-sm font-medium text-accent">
                        Role: {project.role}
                      </p>
                    ) : null}
                    {project.technologies ? (
                      <p className="mt-1 font-mono text-[11px] text-ink-subtle">
                        {project.technologies}
                      </p>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
                  {project.description}
                </p>

                {project.highlights ? (
                  <div className="mt-5">
                    <p className="mb-2 font-mono text-[11px] tracking-wider text-ink-subtle uppercase">
                      What I did
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.outcome ? (
                  <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-ink">
                    <span className="font-medium text-accent">Result: </span>
                    {project.outcome}
                  </p>
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
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { experience } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border bg-surface-elevated/50">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Career"
            title="Professional Experience"
          />
        </ScrollReveal>

        <div className="relative max-w-3xl">
          <div
            className="absolute top-3 bottom-3 left-[11px] w-px bg-border sm:left-[15px]"
            aria-hidden="true"
          />

          <ScrollReveal>
            <article className="relative pl-10 sm:pl-12">
              <span
                className="absolute top-2 left-1 h-4 w-4 rounded-full border-2 border-accent bg-surface sm:left-2"
                aria-hidden="true"
              />

              <div className="rounded-xl border border-border bg-surface-elevated p-6 transition hover:border-accent/35 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs tracking-wider text-accent uppercase">
                      {experience.duration}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-base text-ink-muted">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

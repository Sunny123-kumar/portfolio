import { education, training } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-border">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <SectionHeading eyebrow="Background" title="Education" />
            </ScrollReveal>
            <div className="space-y-4">
              {education.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.06}>
                  <article className="rounded-xl border border-border bg-surface-elevated p-5 transition hover:border-accent/35 sm:p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      {item.institution}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      <span className="font-mono text-xs text-ink-subtle">
                        {item.period}
                      </span>
                      <span className="text-accent">{item.detail}</span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Learning"
                title="Training & Certification"
              />
            </ScrollReveal>
            <div className="space-y-4">
              {training.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.06}>
                  <article className="rounded-xl border border-border bg-surface-elevated p-5 transition hover:border-accent/35 sm:p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    {item.institution ? (
                      <p className="mt-1 text-sm text-ink-muted">
                        {item.institution}
                      </p>
                    ) : null}
                    {item.highlights.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="rounded-md border border-border px-2.5 py-1 text-xs text-ink-muted"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

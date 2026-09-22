import { writingProcess } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export default function WritingProcess() {
  return (
    <section className="section-pad border-t border-border bg-surface-elevated/40">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Process"
            title="How I deliver documentation"
            description="A clear, repeatable workflow — from research to publish — so your docs stay accurate and useful."
          />
        </ScrollReveal>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {writingProcess.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.06}>
                <li className="relative h-full rounded-xl border border-border bg-surface-elevated p-5 transition hover:border-accent/40">
                  <span className="font-mono text-xs font-semibold tracking-wider text-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  {index < writingProcess.length - 1 ? (
                    <span
                      className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-[10px] text-ink-subtle lg:flex"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  ) : null}
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

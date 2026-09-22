import { profile, technicalProfile, writingPipeline } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Profile"
            title="About Me"
            description="A documentation specialist with a developer’s mindset — focused on clarity, accuracy, and outcomes."
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <div className="space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {profile.summary.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface-elevated p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-ink">
                Technical Profile
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {technicalProfile.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-lg border border-border px-3 py-2.5 text-sm text-ink transition hover:border-accent/40"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="mb-3 font-mono text-[11px] tracking-[0.14em] text-ink-subtle uppercase">
                  Writing pipeline
                </p>
                <ol className="flex flex-wrap items-center gap-2">
                  {writingPipeline.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-md border border-border bg-surface px-2.5 py-1.5 font-mono text-xs font-medium text-ink">
                        {step}
                      </span>
                      {index < writingPipeline.length - 1 ? (
                        <span
                          className="hidden text-ink-subtle sm:inline"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

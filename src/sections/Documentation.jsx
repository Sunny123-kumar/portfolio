import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { docsExample, docsSidebar } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import CodeBlock from '../components/CodeBlock'

const tabs = ['API Reference', 'Request', 'Response']

export default function Documentation() {
  const [activeNav, setActiveNav] = useState('Endpoints')
  const [activeTab, setActiveTab] = useState('API Reference')

  return (
    <section id="documentation" className="section-pad border-t border-border">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Documentation showcase"
            title="Documentation That Developers Can Actually Use"
            description="An interactive portfolio demonstration of how I structure API documentation — not a live production API."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-[0_20px_50px_-30px_rgba(28,25,23,0.4)]">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  API Docs Preview
                </p>
                <p className="font-mono text-[11px] text-ink-subtle">
                  Portfolio demonstration · example only
                </p>
              </div>
              <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 font-mono text-[10px] text-amber-700 dark:text-amber-300">
                Demo
              </span>
            </div>

            <div className="grid lg:grid-cols-[220px_1fr]">
              <aside className="border-b border-border bg-surface p-3 lg:border-r lg:border-b-0">
                <p className="mb-2 px-2 font-mono text-[10px] tracking-wider text-ink-subtle uppercase">
                  Reference
                </p>
                <nav aria-label="Documentation sections">
                  <ul className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                    {docsSidebar.map((item) => (
                      <li key={item} className="shrink-0">
                        <button
                          type="button"
                          onClick={() => setActiveNav(item)}
                          className={`focus-ring w-full rounded-md px-3 py-2 text-left text-sm transition ${
                            activeNav === item
                              ? 'bg-accent-soft font-medium text-accent-ink'
                              : 'text-ink-muted hover:bg-surface-elevated hover:text-ink'
                          }`}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              <div className="p-4 sm:p-6">
                <div
                  className="mb-5 flex flex-wrap gap-1 rounded-lg border border-border bg-surface p-1"
                  role="tablist"
                  aria-label="Documentation tabs"
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                      className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition ${
                        activeTab === tab
                          ? 'bg-surface-elevated text-ink shadow-sm'
                          : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'API Reference' ? (
                      <div className="space-y-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-md bg-emerald-600 px-2.5 py-1 font-mono text-xs font-semibold text-white">
                            {docsExample.method}
                          </span>
                          <code className="font-mono text-sm text-ink sm:text-base">
                            {docsExample.path}
                          </code>
                        </div>
                        <p className="text-sm text-ink-muted sm:text-base">
                          <span className="font-medium text-ink">Description: </span>
                          {docsExample.description}
                        </p>
                        <div>
                          <h4 className="mb-3 font-display text-sm font-semibold text-ink">
                            Parameters
                          </h4>
                          <div className="overflow-x-auto rounded-lg border border-border">
                            <table className="min-w-full text-left text-sm">
                              <thead className="border-b border-border bg-surface">
                                <tr>
                                  <th className="px-3 py-2 font-medium text-ink">
                                    Name
                                  </th>
                                  <th className="px-3 py-2 font-medium text-ink">
                                    Type
                                  </th>
                                  <th className="px-3 py-2 font-medium text-ink">
                                    Description
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {docsExample.parameters.map((param) => (
                                  <tr
                                    key={param.name}
                                    className="border-b border-border last:border-0"
                                  >
                                    <td className="px-3 py-2 font-mono text-accent">
                                      {param.name}
                                    </td>
                                    <td className="px-3 py-2 font-mono text-ink-muted">
                                      {param.type}
                                    </td>
                                    <td className="px-3 py-2 text-ink-muted">
                                      {param.description}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-2 font-display text-sm font-semibold text-ink">
                            Response
                          </h4>
                          <p className="mb-2 font-mono text-sm text-success">
                            {docsExample.responseStatus}
                          </p>
                          <CodeBlock code={docsExample.responseBody} />
                        </div>
                      </div>
                    ) : null}

                    {activeTab === 'Request' ? (
                      <div className="space-y-4">
                        <p className="text-sm text-ink-muted">
                          Example request for{' '}
                          <code className="font-mono text-accent">
                            {docsExample.method} {docsExample.path}
                          </code>
                        </p>
                        <CodeBlock code={docsExample.requestExample} />
                      </div>
                    ) : null}

                    {activeTab === 'Response' ? (
                      <div className="space-y-4">
                        <p className="font-mono text-sm text-success">
                          {docsExample.responseStatus}
                        </p>
                        <CodeBlock code={docsExample.responseBody} />
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

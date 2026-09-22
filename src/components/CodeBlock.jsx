import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({ code, className = '' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-border bg-code-bg ${className}`}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="focus-ring absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-xs text-code-fg/80 transition hover:bg-white/10"
        aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
      >
        {copied ? (
          <>
            <Check size={14} aria-hidden="true" />
            Copied
          </>
        ) : (
          <>
            <Copy size={14} aria-hidden="true" />
            Copy
          </>
        )}
      </button>
      <pre className="overflow-x-auto p-4 pr-24 font-mono text-xs leading-relaxed text-code-fg sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}

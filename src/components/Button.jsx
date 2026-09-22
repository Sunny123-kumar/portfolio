export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  ariaLabel,
  target,
  rel,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-ring disabled:opacity-60'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover dark:text-stone-950',
    secondary:
      'border border-border-strong bg-surface-elevated text-ink hover:border-accent hover:text-accent',
    ghost: 'text-ink-muted hover:text-accent',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

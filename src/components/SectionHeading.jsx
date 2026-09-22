export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left'

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-3 sm:mb-12 ${alignment}`}>
      {eyebrow ? (
        <p className="font-mono text-xs font-medium tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function SectionHeading({
  id,
  label,
  title,
  subtitle,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-16 sm:mb-24 flex flex-col gap-5 max-w-3xl">
      <div className="flex items-center gap-3 t-mono text-[11px] uppercase text-ink-mute">
        <span className="phosphor">{id}</span>
        <span className="h-px w-12 bg-ink-line" />
        <span>{label}</span>
      </div>
      <h2 className="t-display gradient-ink text-[clamp(2.5rem,7vw,4.75rem)]">
        {title}
      </h2>
      {subtitle && (
        <p className="t-body max-w-xl text-ink-dim text-[16px] sm:text-[17px] leading-[1.65]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const items = [
  "Dextron ▸ shipping",
  "Baymax.app ▸ deployed",
  "Ustaad ▸ beta",
  "Vyse ▸ training",
  "LangGraph ▸ online",
  "RAG pipeline ▸ stable",
  "PROCOM '26 ▸ delivered",
  "Developers Day 2025 ▸ archived",
  "FAST NUCES ▸ CS '27",
  "Voyager 1 ▸ 24.7 billion km",
];

export function Ticker() {
  const stream = [...items, ...items];
  return (
    <div className="relative border-y hairline overflow-hidden bg-bg-soft/40">
      <div className="ticker-track py-3.5">
        {stream.map((t, i) => (
          <span
            key={i}
            className="t-mono text-[11px] text-ink-mute px-8 inline-flex items-center gap-3 uppercase"
          >
            <span className="text-phosphor">◇</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

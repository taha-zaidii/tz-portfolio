import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t hairline px-5 sm:px-8 py-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="t-mono text-[11px] text-ink-mute uppercase">
          © {year} {profile.name} —{" "}
          <span className="text-ink-dim normal-case">
            built by hand, in Karachi.
          </span>
        </div>
        <div className="t-mono text-[11px] text-ink-mute flex items-center gap-3 uppercase">
          <span className="dot" />
          signal: stable
          <span className="text-ink-line">|</span>
          v1.2
        </div>
      </div>
    </footer>
  );
}

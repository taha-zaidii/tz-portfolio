import { SectionHeading } from "./section-heading";
import { profile, education, honors } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="01" label="About" title="Who I am." />

        <div className="grid lg:grid-cols-5 gap-14 lg:gap-24">
          <div className="lg:col-span-3 space-y-7 t-body text-[17px] sm:text-[18px] leading-[1.75] text-ink/90 font-light">
            <p>
              I'm Taha. I'm 21, from Karachi, studying CS at FAST NUCES —
              currently in my third year.
            </p>
            <p className="text-ink-dim">
              I started{" "}
              <span className="text-ink phosphor">Vector</span> in 2026 with
              one of my closest friends. It's a small AI studio. We take
              projects in two-week sprints, build them properly, and hand them
              off. Mostly agents, RAG systems, and full-stack MVPs for early-
              stage teams.
            </p>
            <p className="text-ink-dim">
              I've also spent the last few years on the other side of the
              table — closing sponsorships, designing brands, and running ops
              for some of the largest student tech festivals in Pakistan.
              PROCOM '26 was the biggest one. We raised PKR 1 Crore in
              sponsorships — an all-time record for the festival.
            </p>
            <p className="text-ink-dim">
              I don't really think of engineering and business as separate
              things. They both come down to the same instinct — figure out
              what someone needs, and ship the smallest thing that gives it
              to them.
            </p>
          </div>

          <aside className="lg:col-span-2 space-y-12">
            <div>
              <div className="t-mono text-[11px] text-ink-mute uppercase mb-4">
                Education
              </div>
              <div className="text-[18px] text-ink leading-snug">
                {education.school}
              </div>
              <div className="text-[15px] text-ink-dim mt-2 font-light">
                {education.degree}
              </div>
              <div className="t-mono text-[11px] text-ink-mute mt-3 uppercase">
                {education.period} · {education.location}
              </div>
            </div>

            <div>
              <div className="t-mono text-[11px] text-ink-mute uppercase mb-4">
                Recognition
              </div>
              <ul className="recog-list">
                {honors.map((h) => (
                  <li key={h}>
                    <span className="marker">▸</span>
                    <span className="content">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

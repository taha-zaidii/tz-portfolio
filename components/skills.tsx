import { SectionHeading } from "./section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative px-5 sm:px-8 py-28 sm:py-36 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="04"
          label="Stack"
          title="What I reach for."
          subtitle="Tools I use instinctively when something needs to be built quickly and well."
        />

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-14">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border-t hairline pt-6">
              <div className="t-mono text-[11px] text-ink-mute uppercase mb-5">
                <span className="phosphor">→</span> {category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((t) => (
                  <span
                    key={t}
                    className="t-body text-[14px] text-ink-dim border hairline px-3 py-1.5 hover:text-ink hover:border-ink/30 transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 py-28 sm:py-36 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="02"
          label="Experience"
          title="Where I've been."
          subtitle="A mix of engineering, GTM, and ops — the way real products actually get built."
        />

        <ol className="relative">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid sm:grid-cols-12 gap-5 sm:gap-10 py-9 sm:py-11 border-t hairline first:border-t-0 group"
            >
              <div className="sm:col-span-3">
                <div className="t-mono text-[11px] text-ink-dim uppercase">
                  {exp.period}
                </div>
                <div className="t-mono text-[11px] text-ink-mute mt-2 uppercase">
                  {exp.location}
                </div>
              </div>

              <div className="sm:col-span-9">
                <h3 className="t-display-soft text-[22px] sm:text-[26px] text-ink leading-[1.2]">
                  {exp.role}
                  <span className="text-ink-mute font-light"> · </span>
                  <span className="text-ink-dim group-hover:text-phosphor transition-colors">
                    {exp.company}
                  </span>
                </h3>

                <ul className="bullet-list mt-6">
                  {exp.bullets.map((b, idx) => (
                    <li key={b}>
                      <span className="marker">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="content">{b}</span>
                    </li>
                  ))}
                </ul>

                {exp.tags && (
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="t-mono text-[10.5px] text-ink-mute border hairline px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

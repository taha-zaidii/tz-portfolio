"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 py-28 sm:py-36 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="03"
          label="Projects"
          title="What I've built."
          subtitle="Multi-agent systems, RAG, computer vision, and the occasional compiler. Most ship to production; a few stay weekend experiments."
        />

        <div className="grid md:grid-cols-2 gap-px bg-ink-line border hairline">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
              className="group relative bg-bg p-7 sm:p-10 hover:bg-bg-soft transition-colors duration-300 block"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="t-mono text-[11px] text-ink-mute mb-3 uppercase">
                    {String(i + 1).padStart(2, "0")} · {p.badge}
                  </div>
                  <h3 className="t-display gradient-ink text-[clamp(2rem,3.8vw,2.75rem)]">
                    {p.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-ink-mute group-hover:text-phosphor group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
              </div>

              <p className="t-body text-[15.5px] text-ink leading-[1.6] mb-3">
                {p.blurb}
              </p>
              <p className="t-body text-[14.5px] text-ink-dim leading-[1.75] font-light">
                {p.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="t-mono text-[10.5px] text-ink-mute border hairline px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/taha-zaidii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-ink-dim hover:text-ink transition"
          >
            <span className="link-uline">More on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

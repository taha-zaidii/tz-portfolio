"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { interests } from "@/lib/data";

export type GalleryImage = { src: string; caption?: string };

export function Interests({ images }: { images: GalleryImage[] }) {
  const hasImages = images.length > 0;

  return (
    <section
      id="off-screen"
      className="relative px-5 sm:px-8 py-28 sm:py-36 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="05"
          label="Off-screen"
          title="The other stuff."
          subtitle="What I do when I'm not at the laptop. It probably says more about how I think than the rest of this site."
        />

        {/* Interests — editorial list, no icon boxes */}
        <ul className="divide-y hairline border-y hairline">
          {interests.map((it, i) => (
            <motion.li
              key={it.title}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="grid sm:grid-cols-12 gap-3 sm:gap-10 py-8 sm:py-10 group items-baseline"
            >
              <div className="sm:col-span-1 t-mono text-[11px] text-ink-mute uppercase">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="sm:col-span-4">
                <h3 className="t-display-soft text-[clamp(1.5rem,3vw,2.1rem)] text-ink leading-[1.1] group-hover:phosphor transition-colors">
                  {it.title}
                </h3>
              </div>
              <div className="sm:col-span-7 t-body text-[16px] sm:text-[17px] text-ink-dim leading-[1.65]">
                {it.note}
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Gallery */}
        <div className="mt-20 sm:mt-24">
          <div className="flex items-end justify-between gap-6 mb-6 flex-wrap">
            <div>
              <div className="t-mono text-[11px] text-ink-mute uppercase mb-3">
                <span className="amber">◇</span> Gallery
              </div>
              <h3 className="t-display gradient-ink text-[clamp(1.85rem,3.5vw,2.65rem)]">
                Frames.
              </h3>
              <p className="mt-3 t-body text-[15px] text-ink-dim max-w-md leading-[1.6]">
                {hasImages
                  ? "A small photo journal. Karachi, builds, the in-between."
                  : "I'll add photos here as I take them. Karachi, builds, late nights, occasional travel."}
              </p>
            </div>
            <div className="t-mono text-[10.5px] text-ink-mute uppercase max-w-xs text-right">
              <span className={hasImages ? "dot" : "dot-amber"} />{" "}
              <span className="ml-2">
                {hasImages ? "Live" : "Transmission incoming"}
              </span>
            </div>
          </div>

          {hasImages ? (
            <div className="filmstrip px-3 py-6 sm:py-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <motion.figure
                    key={img.src}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative aspect-[4/5] border hairline-warm overflow-hidden bg-bg-soft/60 group"
                  >
                    <Image
                      src={img.src}
                      alt={img.caption || `Frame ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-bg/85" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-3">
                      <div className="t-mono text-[9.5px] text-ink-dim uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {img.caption && (
                        <div className="mt-1 t-body text-[13.5px] text-ink leading-snug">
                          {img.caption}
                        </div>
                      )}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="filmstrip px-3 py-6 sm:py-7">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/5] border hairline-warm bg-bg-soft/60 overflow-hidden"
                    >
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="absolute inset-0 flex flex-col justify-between p-3">
                        <div className="t-mono text-[9.5px] text-ink-mute uppercase">
                          frame {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="t-mono text-[9.5px] text-amber-crt/80 uppercase">
                          ✦ in works
                        </div>
                      </div>
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-bg/60" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-5 t-mono text-[11px] text-ink-mute max-w-xl uppercase">
                // dropping soon...
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

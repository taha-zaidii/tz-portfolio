"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

const HeroScene = dynamic(
  () => import("./scene").then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 px-5 sm:px-8 overflow-hidden"
    >
      {/* Layered backdrop */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute inset-0 wire-grid opacity-100 pointer-events-none" />

      {/* 3D scene — placed behind text, masked at edges */}
      {!reduced && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 65% at 75% 45%, black 30%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse 70% 65% at 75% 45%, black 30%, transparent 80%)",
          }}
          aria-hidden
        >
          <HeroScene />
        </div>
      )}

      {/* Top/bottom hairline gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-phosphor/25 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center gap-3 t-mono text-[11px] text-ink-dim mb-12 uppercase"
        >
          <span className="dot" />
          <span>signal acquired · ch.01</span>
          <span className="text-ink-mute">//</span>
          <span className="text-ink-mute normal-case tracking-[0.05em]">
            {profile.available}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="t-mono-warm text-[14px] text-ink-dim mb-4 lowercase"
        >
          <span className="phosphor">{">"}</span> hi, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="t-display gradient-ink text-[clamp(3.5rem,12.5vw,10rem)]"
        >
          Taha Zaidi.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 t-mono text-[11.5px] text-ink-mute uppercase"
        >
          AI engineer · co-founder, Dextron ·{" "}
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Karachi, PK
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-2xl t-body text-[17px] sm:text-[18px] leading-[1.7] text-ink/90 font-light"
        >
          {profile.intro}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 max-w-2xl t-body text-[16px] leading-[1.65] text-ink-dim"
        >
          {profile.introExtra}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-ink text-bg px-5 py-3 text-[14px] font-medium hover:bg-phosphor transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            Say hi
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border hairline-warm px-5 py-3 text-[14px] text-ink-dim hover:text-ink hover:border-ink/30 transition-colors"
          >
            See what I've built
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-20 grid sm:grid-cols-[auto_1fr] gap-x-12 gap-y-3 max-w-2xl border-t hairline pt-6"
        >
          <div className="t-mono text-[10.5px] text-ink-mute uppercase">
            Currently
          </div>
          <ul className="flex flex-col gap-1.5">
            {profile.currently.map((c) => (
              <li
                key={c}
                className="t-body text-[15px] text-ink-dim leading-snug flex items-start gap-3"
              >
                <span className="phosphor mt-1.5 text-[8px] shrink-0">●</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="absolute -bottom-px inset-x-0 h-px bg-gradient-to-r from-transparent via-ink-line to-transparent" />
    </section>
  );
}

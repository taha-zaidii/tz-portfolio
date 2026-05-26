"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About", id: "01" },
  { href: "#experience", label: "Experience", id: "02" },
  { href: "#projects", label: "Projects", id: "03" },
  { href: "#skills", label: "Stack", id: "04" },
  { href: "#off-screen", label: "Off-screen", id: "05" },
  { href: "#contact", label: "Contact", id: "06" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      setTime(`${hh}:${mm} PKT`);
    };
    tick();
    const i = setInterval(tick, 30_000);
    return () => clearInterval(i);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg/75 border-b border-ink-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="dot" />
          <span className="t-mono text-[11.5px] text-ink-dim group-hover:text-ink transition uppercase">
            tz_<span className="text-ink-mute">/</span>
            {profile.handle.replace("@", "")}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group t-mono text-[11px] uppercase text-ink-dim hover:text-ink transition flex items-baseline gap-1.5"
            >
              <span className="text-ink-mute group-hover:text-phosphor transition">
                {l.id}
              </span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3 t-mono text-[10.5px] text-ink-mute uppercase">
          <span>{time}</span>
          <span className="text-ink-line">|</span>
          <span className="text-phosphor/80">● live</span>
        </div>
      </div>
    </header>
  );
}

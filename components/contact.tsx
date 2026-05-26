"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.links.github, handle: "taha-zaidii" },
  { label: "LinkedIn", href: profile.links.linkedin, handle: "taha-zaidii" },
  { label: "Instagram", href: profile.links.instagram, handle: "taha_zaidii" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 py-28 sm:py-36 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="06"
          label="Contact"
          title="Say hi."
          subtitle="Best for: AI/agent builds, RAG systems, MVPs, and consulting engagements. Worst for: cold sales pitches. I usually reply within a day."
        />

        <div className="grid lg:grid-cols-2 gap-px bg-ink-line border hairline">
          <a
            href={`mailto:${profile.email}`}
            className="group bg-bg p-9 sm:p-12 hover:bg-bg-soft transition-colors block"
          >
            <div className="flex items-center gap-2.5 t-mono text-[11px] text-ink-mute uppercase mb-5">
              <Mail className="w-3.5 h-3.5" />
              Email
            </div>
            <div className="t-display-soft text-[1.6rem] sm:text-[2.1rem] text-ink group-hover:phosphor transition-colors leading-tight break-all">
              {profile.email}
            </div>
            <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-ink-dim">
              Send a message
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </div>
          </a>

          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-bg p-9 sm:p-12 hover:bg-bg-soft transition-colors block"
          >
            <div className="flex items-center gap-2.5 t-mono text-[11px] text-ink-mute uppercase mb-5">
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp · Call
            </div>
            <div className="t-display-soft text-[1.6rem] sm:text-[2.1rem] text-ink group-hover:phosphor transition-colors leading-tight">
              {profile.phone}
            </div>
            <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-ink-dim">
              Ping on WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </div>
          </a>

          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg p-9 sm:p-12 hover:bg-bg-soft transition-colors flex items-center justify-between gap-4"
            >
              <div>
                <div className="t-mono text-[11px] text-ink-mute uppercase mb-3">
                  {s.label}
                </div>
                <div className="t-display-soft text-[22px] text-ink group-hover:phosphor transition-colors">
                  /{s.handle}
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-ink-mute group-hover:text-phosphor group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}

          <div className="bg-bg p-9 sm:p-12 flex items-center justify-between gap-4">
            <div>
              <div className="t-mono text-[11px] text-ink-mute uppercase mb-3">
                Location
              </div>
              <div className="t-display-soft text-[22px] text-ink">
                {profile.location}
              </div>
              <div className="t-mono text-[11px] text-ink-mute mt-2 uppercase">
                PKT · UTC+5
              </div>
            </div>
            <span className="dot" />
          </div>
        </div>
      </div>
    </section>
  );
}

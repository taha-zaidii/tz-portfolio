import fs from "node:fs";
import path from "node:path";

import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Interests, type GalleryImage } from "@/components/interests";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Ticker } from "@/components/ticker";

function readGallery(): GalleryImage[] {
  try {
    const dir = path.join(process.cwd(), "public", "gallery");
    if (!fs.existsSync(dir)) return [];

    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort();

    let captions: Record<string, string> = {};
    const captionsPath = path.join(dir, "captions.json");
    if (fs.existsSync(captionsPath)) {
      try {
        const raw = JSON.parse(fs.readFileSync(captionsPath, "utf-8"));
        if (raw && typeof raw === "object") {
          captions = Object.fromEntries(
            Object.entries(raw).filter(
              ([k, v]) => !k.startsWith("_") && typeof v === "string"
            )
          ) as Record<string, string>;
        }
      } catch {}
    }

    return files.map((f) => ({
      src: `/gallery/${f}`,
      caption: captions[f],
    }));
  } catch {
    return [];
  }
}

export default function Home() {
  const gallery = readGallery();

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Interests images={gallery} />
      <Contact />
      <Footer />
    </main>
  );
}

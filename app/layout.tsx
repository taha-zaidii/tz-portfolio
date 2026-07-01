import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tahazaidi.me"),
  title: {
    default: "Taha Zaidi — AI Engineer & Builder",
    template: "%s · Taha Zaidi",
  },
  description:
    "I'm Taha. I co-found Dextron — a small AI studio in Karachi. I build agents, RAG systems, and the products around them.",
  openGraph: {
    title: "Taha Zaidi",
    description:
      "AI engineer in Karachi. Co-founder of Dextron. Builds agents, RAG systems, and the products around them.",
    url: "https://tahazaidi.me",
    siteName: "Taha Zaidi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Zaidi",
    description:
      "AI engineer in Karachi. Builds agents, RAG systems, and the products around them.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased crt-scanlines crt-vignette">
        <div className="noise" />
        <div className="scan-sweep" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://tahazaidi.me/sitemap.xml",
    host: "https://tahazaidi.me",
  };
}

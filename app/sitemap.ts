import { MetadataRoute } from "next";
import { wins } from "@/lib/wins";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://promogent.com";

  // Static pages
  const staticRoutes = ["", "/privacy", "/terms", "/cookies", "/wins"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic case study/win details
  const dynamicRoutes = wins.map((win) => ({
    url: `${baseUrl}/wins/${win.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}

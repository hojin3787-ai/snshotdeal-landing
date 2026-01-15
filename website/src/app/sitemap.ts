import type { MetadataRoute } from "next";

import { blogPostsMeta } from "./blog/postsMeta";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function url(path: string) {
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now },
    { url: url("/services"), lastModified: now },
    { url: url("/pricing"), lastModified: now },
    { url: url("/reviews"), lastModified: now },
    { url: url("/contact"), lastModified: now },
    { url: url("/instagram"), lastModified: now },
    { url: url("/youtube"), lastModified: now },
    { url: url("/tiktok"), lastModified: now },
    { url: url("/x"), lastModified: now },
    { url: url("/blog"), lastModified: now },
  ];

  const blogPages: MetadataRoute.Sitemap = Object.keys(blogPostsMeta).map(
    (slug) => ({
      url: url(`/blog/${slug}`),
      lastModified: now,
    })
  );

  return [...staticPages, ...blogPages];
}


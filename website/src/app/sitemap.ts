import type { MetadataRoute } from "next";

import { blogPostsMeta } from "./blog/postsMeta";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function url(path: string) {
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { 
      url: url("/"), 
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    { 
      url: url("/services"), 
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { 
      url: url("/pricing"), 
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { 
      url: url("/reviews"), 
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    { 
      url: url("/faq"), 
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { 
      url: url("/contact"), 
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { 
      url: url("/instagram"), 
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { 
      url: url("/youtube"), 
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { 
      url: url("/tiktok"), 
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { 
      url: url("/x"), 
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { 
      url: url("/blog"), 
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = Object.keys(blogPostsMeta).map(
    (slug) => ({
      url: url(`/blog/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...blogPages];
}


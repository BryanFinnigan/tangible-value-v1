import { MetadataRoute } from "next";
import { assetRegistry, getCategoryHubs, wikiArticles } from "@/lib/wikiData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tangible-value-v1.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now },
    { url: `${siteUrl}/wiki`, lastModified: now },
    { url: `${siteUrl}/wiki/topics`, lastModified: now },
    ...getCategoryHubs().map((hub) => ({ url: `${siteUrl}${hub.path}`, lastModified: now })),
    ...assetRegistry.map((asset) => ({ url: `${siteUrl}/wiki/assets/${asset.asset_id}`, lastModified: now })),
    ...wikiArticles.map((article) => ({ url: `${siteUrl}/wiki/topics/${article.slug}`, lastModified: now })),
  ];
}

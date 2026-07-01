import assetJson from "@/data/asset-registry.json";
import taxonomyJson from "@/data/registry-taxonomy.json";
import wikiJson from "@/data/wiki-articles.json";
import type { HardAsset } from "@/types/asset-registry";
import type { WikiArticle } from "@/types/wiki";

export const assetRegistry = assetJson as HardAsset[];
export const wikiArticles = wikiJson as WikiArticle[];
export const registryTaxonomy = taxonomyJson as {
  registry_name: string;
  canonical_root: string;
  page_count_after_wiki_expansion: number;
  page_count_breakdown: Record<string, number>;
  asset_category_hubs: Array<{
    path: string;
    label: string;
    asset_count: number;
    seo_role: string;
  }>;
  wiki_topic_index: {
    path: string;
    label: string;
    seo_role: string;
  };
};

export function getAssetPath(assetOrId: HardAsset | string) {
  const assetId = typeof assetOrId === "string" ? assetOrId : assetOrId.asset_id;
  return `/wiki/assets/${assetId}`;
}

export function getTopicPath(slug: string) {
  return `/wiki/topics/${slug}`;
}

export function getAssetById(assetId: string) {
  return assetRegistry.find((asset) => asset.asset_id === assetId);
}

export function getArticleBySlug(slug: string) {
  return wikiArticles.find((article) => article.slug === slug);
}

export function getAssetsByCategoryHub(categoryHub: string) {
  return assetRegistry.filter((asset) => asset.implementation_mapping.category_hub === categoryHub);
}

export function getCategoryHubs() {
  return registryTaxonomy.asset_category_hubs;
}

export function getFeaturedAssets(limit = 8) {
  return assetRegistry.slice(0, limit);
}

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value < 100 ? 2 : 0,
  }).format(value);
}

export function formatHubLabel(path: string) {
  const hub = registryTaxonomy.asset_category_hubs.find((item) => item.path === path);
  return hub?.label ?? path.replace("/wiki/", "").replaceAll("-", " ");
}

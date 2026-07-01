import WikiAssetCard from "@/components/WikiAssetCard";
import WikiBreadcrumbs from "@/components/WikiBreadcrumbs";
import { getAssetsByCategoryHub, registryTaxonomy } from "@/lib/wikiData";

export default function WikiCategoryPage({ categoryPath }: { categoryPath: string }) {
  const category = registryTaxonomy.asset_category_hubs.find((hub) => hub.path === categoryPath);
  const assets = getAssetsByCategoryHub(categoryPath);
  const label = category?.label ?? "Wiki Category";

  return (
    <main className="wikiPage">
      <WikiBreadcrumbs items={[{ href: categoryPath, label }]} />
      <section className="wikiHero compact">
        <p className="eyebrow">Wiki Category</p>
        <h1>{label}</h1>
        <p className="lede">{category?.seo_role ?? "Reference pages for precious-metal assets."}</p>
      </section>
      <section className="wikiPanel">
        <h2>{assets.length} reference pages</h2>
        {assets.length > 0 ? (
          <div className="wikiGrid">
            {assets.map((asset) => (
              <WikiAssetCard key={asset.asset_id} asset={asset} />
            ))}
          </div>
        ) : (
          <p>This category is reserved for the next content expansion.</p>
        )}
      </section>
    </main>
  );
}

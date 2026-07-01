import { Metadata } from "next";
import { notFound } from "next/navigation";
import AffiliateActionPanel from "@/components/AffiliateActionPanel";
import AssaySpecificationTable from "@/components/AssaySpecificationTable";
import RelatedAssetsGrid from "@/components/RelatedAssetsGrid";
import SourceMethodologyPanel from "@/components/SourceMethodologyPanel";
import WikiBreadcrumbs from "@/components/WikiBreadcrumbs";
import { assetRegistry, formatHubLabel, formatUsd, getAssetById } from "@/lib/wikiData";

export function generateStaticParams() {
  return assetRegistry.map((asset) => ({ asset_id: asset.asset_id }));
}

type PageProps = { params: Promise<{ asset_id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { asset_id } = await params;
  const asset = getAssetById(asset_id);
  if (!asset) return { title: "Asset Not Found" };
  return {
    title: asset.page_metadata.meta_title,
    description: asset.page_metadata.meta_description,
    alternates: { canonical: `/wiki/assets/${asset.asset_id}` },
  };
}

export default async function WikiAssetPage({ params }: PageProps) {
  const { asset_id } = await params;
  const asset = getAssetById(asset_id);
  if (!asset) notFound();
  const categoryLabel = formatHubLabel(asset.implementation_mapping.category_hub);

  return (
    <main className="wikiPage">
      <WikiBreadcrumbs items={[{ href: asset.implementation_mapping.category_hub, label: categoryLabel }, { href: `/wiki/assets/${asset.asset_id}`, label: asset.asset_identity.common_name }]} />
      <section className="wikiHero compact">
        <p className="eyebrow">{asset.asset_type} • {asset.classification.metal_type}</p>
        <h1>{asset.page_metadata.target_h1_title}</h1>
        <p className="lede">{asset.content_blocks.summary}</p>
      </section>

      <section className="wikiLayout">
        <div className="wikiMainColumn">
          <section className="wikiPanel">
            <h2>Why It Matters</h2>
            <p>{asset.content_blocks.why_it_matters}</p>
          </section>

          <section className="wikiPanel">
            <h2>Buyer Questions</h2>
            {asset.content_blocks.common_buyer_questions.map((item) => (
              <div className="qaBlock" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </section>

          <section className="wikiPanel">
            <h2>Seller Guidance</h2>
            <p>{asset.content_blocks.seller_guidance}</p>
          </section>

          <section className="wikiPanel">
            <h2>Authentication Notes</h2>
            <p>{asset.content_blocks.authentication_notes}</p>
          </section>

          <section className="wikiPanel">
            <h2>Comparison Notes</h2>
            <p>{asset.content_blocks.comparison_notes}</p>
          </section>

          <RelatedAssetsGrid relatedAssets={asset.related_assets} />
          <SourceMethodologyPanel asset={asset} />
        </div>

        <aside className="wikiSidebar">
          <section className="wikiPanel stickyPanel">
            <h2>Valuation Snapshot</h2>
            <div className="valueHero">{formatUsd(asset.valuation_snapshot.estimated_retail_market_value_usd)}</div>
            <div className="specTable">
              <div className="specRow"><span>Melt value</span><strong>{formatUsd(asset.valuation_snapshot.estimated_melt_value_usd)}</strong></div>
              <div className="specRow"><span>Retail premium</span><strong>{asset.valuation_snapshot.typical_retail_premium_percentage}%</strong></div>
              <div className="specRow"><span>Buyback discount</span><strong>{asset.valuation_snapshot.typical_buyback_discount_percentage}%</strong></div>
              <div className="specRow"><span>Liquidity</span><strong>{asset.classification.liquidity_rating}</strong></div>
              <div className="specRow"><span>Confidence</span><strong>{asset.valuation_snapshot.valuation_confidence}</strong></div>
            </div>
            <p className="finePrint">{asset.valuation_snapshot.valuation_note}</p>
          </section>
          <AffiliateActionPanel links={asset.ui_placeholders} />
          <AssaySpecificationTable asset={asset} />
        </aside>
      </section>
    </main>
  );
}

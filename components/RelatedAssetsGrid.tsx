import WikiAssetCard from "@/components/WikiAssetCard";
import { getAssetById } from "@/lib/wikiData";
import type { RelatedAssetReference } from "@/types/asset-registry";

export default function RelatedAssetsGrid({ relatedAssets }: { relatedAssets: RelatedAssetReference[] }) {
  const resolved = relatedAssets
    .map((related) => ({ asset: getAssetById(related.asset_id), relationship: related.relationship }))
    .filter((item): item is { asset: NonNullable<ReturnType<typeof getAssetById>>; relationship: string } => Boolean(item.asset));

  if (resolved.length === 0) return null;

  return (
    <section className="wikiPanel">
      <h2>Related Wiki Assets</h2>
      <div className="wikiGrid twoCol">
        {resolved.map(({ asset, relationship }) => (
          <div key={`${asset.asset_id}-${relationship}`}>
            <p className="finePrint">{relationship}</p>
            <WikiAssetCard asset={asset} />
          </div>
        ))}
      </div>
    </section>
  );
}

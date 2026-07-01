import Link from "next/link";
import type { HardAsset } from "@/types/asset-registry";
import { formatUsd, getAssetPath } from "@/lib/wikiData";

export default function WikiAssetCard({ asset }: { asset: HardAsset }) {
  return (
    <Link href={getAssetPath(asset)} className="wikiCard">
      <div className="wikiCardMeta">
        <span>{asset.asset_type}</span>
        <span>{asset.classification.metal_type}</span>
      </div>
      <h3>{asset.asset_identity.common_name}</h3>
      <p>{asset.content_blocks.summary}</p>
      <div className="wikiMetricRow">
        <span>Est. retail</span>
        <strong>{formatUsd(asset.valuation_snapshot.estimated_retail_market_value_usd)}</strong>
      </div>
    </Link>
  );
}

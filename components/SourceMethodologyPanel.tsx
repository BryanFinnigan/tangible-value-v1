import type { HardAsset } from "@/types/asset-registry";

export default function SourceMethodologyPanel({ asset }: { asset: HardAsset }) {
  return (
    <section className="wikiPanel">
      <h2>Sources & Methodology</h2>
      <p>
        Specifications reference {asset.research_sources.primary_spec_source_name} and {asset.research_sources.secondary_reference_source_name}.
        Pricing telemetry is modeled for educational display and should not be treated as a live quote.
      </p>
      <p className="finePrint">{asset.research_sources.pricing_methodology_note}</p>
    </section>
  );
}

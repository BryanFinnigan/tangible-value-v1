import type { HardAsset } from "@/types/asset-registry";

export default function AssaySpecificationTable({ asset }: { asset: HardAsset }) {
  const assay = asset.composition_and_assay;
  const rows = [
    ["Metal", asset.classification.metal_type],
    ["Fineness", assay.fineness_label],
    ["Purity", `${assay.purity_percentage}%`],
    ["Gross weight", `${assay.gross_weight_g} g`],
    ["Net fine weight", `${assay.net_fine_weight_oz} troy oz`],
    ["Diameter", assay.dimensions_diameter_mm > 0 ? `${assay.dimensions_diameter_mm} mm` : "varies by refiner"],
    ["Thickness", assay.dimensions_thickness_mm > 0 ? `${assay.dimensions_thickness_mm} mm` : "varies by refiner"],
    ["Format", assay.edge_or_format],
  ];

  return (
    <section className="wikiPanel">
      <h2>Composition & Assay</h2>
      <div className="specTable">
        {rows.map(([label, value]) => (
          <div className="specRow" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

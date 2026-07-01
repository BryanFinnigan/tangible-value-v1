import type { ChartTelemetryPoint } from "@/types/asset-registry";

function scale(value: number, min: number, max: number, size: number) {
  if (max === min) return size / 2;
  return size - ((value - min) / (max - min)) * size;
}

function toPolyline(points: ChartTelemetryPoint[], key: "spot_metal_price_usd_per_oz" | "estimated_asset_market_price_usd", min: number, max: number) {
  const width = 720;
  const height = 260;
  const step = points.length > 1 ? width / (points.length - 1) : width;
  return points
    .map((point, index) => `${index * step},${scale(point[key], min, max, height)}`)
    .join(" ");
}

export default function InteractiveMetalValueChart({ data }: { data: ChartTelemetryPoint[] }) {
  const values = data.flatMap((point) => [point.spot_metal_price_usd_per_oz, point.estimated_asset_market_price_usd]);
  const min = Math.min(...values) * 0.96;
  const max = Math.max(...values) * 1.04;
  const first = data[0];
  const last = data[data.length - 1];

  return (
    <div className="wikiChart" role="img" aria-label="Estimated metal value chart">
      <svg viewBox="0 0 720 300" preserveAspectRatio="none">
        <line x1="0" y1="260" x2="720" y2="260" className="chartAxis" />
        <polyline points={toPolyline(data, "spot_metal_price_usd_per_oz", min, max)} className="chartLine spotLine" />
        <polyline points={toPolyline(data, "estimated_asset_market_price_usd", min, max)} className="chartLine marketLine" />
      </svg>
      <div className="chartLegend">
        <span><i className="legendSwatch spot" /> Spot per oz</span>
        <span><i className="legendSwatch market" /> Estimated asset price</span>
      </div>
      {first && last && (
        <p className="finePrint">
          Modeled from {first.timestamp} to {last.timestamp}. Educational telemetry only; not a live quote.
        </p>
      )}
    </div>
  );
}

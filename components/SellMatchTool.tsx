"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { estimateMeltValue, formatPercent, formatUsd, getSellItem, sellItems, spotSnapshotUsd, type WeightUnit } from "@/lib/matchToolData";

export default function SellMatchTool() {
  const [selectedId, setSelectedId] = useState("gold_jewelry_14k");
  const [weight, setWeight] = useState(10);
  const [unit, setUnit] = useState<WeightUnit>("g");
  const item = useMemo(() => getSellItem(selectedId), [selectedId]);
  const meltValue = estimateMeltValue({
    metal: item.metal,
    weight,
    unit,
    purity: item.defaultPurity,
    goldSpot: spotSnapshotUsd.goldPerTroyOz,
    silverSpot: spotSnapshotUsd.silverPerTroyOz,
  });

  return (
    <main className="wikiPage">
      <section className="wikiHero compact">
        <p className="eyebrow">Sell-Side Match Tool</p>
        <h1>Slow down before accepting an offer.</h1>
        <p className="lede">Choose what you are selling, get a value-basis benchmark, and jump into the related Wiki page for context before taking the next step.</p>
      </section>

      <section className="wikiPanel">
        <p><strong>What are you selling?</strong></p>
        <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "14px", border: "1px solid #ded7cb" }}>
          {sellItems.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
        </select>
        <div className="actions">
          <label>Weight <input type="number" min="0" step="0.01" value={weight} onChange={(event) => setWeight(Number(event.target.value || 0))} style={{ width: "120px", padding: "10px", borderRadius: "14px", border: "1px solid #ded7cb" }} /></label>
          <label>Unit <select value={unit} onChange={(event) => setUnit(event.target.value as WeightUnit)} style={{ padding: "10px", borderRadius: "14px", border: "1px solid #ded7cb" }}><option value="g">grams</option><option value="ozt">troy oz</option><option value="dwt">pennyweight</option></select></label>
        </div>
      </section>

      <section className="wikiPanel">
        <p className="eyebrow">Selected Item</p>
        <h2>{item.label}</h2>
        <p>{item.family}</p>
        <div className="specTable">
          <div className="specRow"><span>Estimated melt benchmark</span><strong>{formatUsd(meltValue)}</strong></div>
          <div className="specRow"><span>Purity used</span><strong>{formatPercent(item.defaultPurity)}</strong></div>
          <div className="specRow"><span>Linked Wiki page</span><strong>{item.wikiLabel}</strong></div>
        </div>
        <div className="actions">
          <Link href={item.wikiPath} className="button primary">Open {item.wikiLabel}</Link>
        </div>
      </section>

      <section className="wikiGrid">
        <article className="wikiCard"><p className="wikiCardMeta">First check</p><h3>Identify it before pricing it</h3><p>{item.firstCheck}</p></article>
        <article className="wikiCard"><p className="wikiCardMeta">Value basis</p><h3>What drives value</h3><p>{item.valueBasis}</p><p className="finePrint">{item.calculatorHint}</p></article>
        <article className="wikiCard"><p className="wikiCardMeta">Selling path</p><h3>Smarter next step</h3><p>{item.bestPath}</p></article>
        <article className="wikiCard"><p className="wikiCardMeta">Avoid</p><h3>Slow down here</h3><p>{item.avoid}</p></article>
        <article className="wikiCard"><p className="wikiCardMeta">Smart move</p><h3>Before accepting an offer</h3><p>{item.smartMove}</p></article>
      </section>
    </main>
  );
}

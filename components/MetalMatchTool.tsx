"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatUsd, getMetalMatches, type Preference } from "@/lib/matchToolData";

const budgets = [25, 75, 150, 350, 750, 1500, 3000];
const prefs: { id: Preference; label: string }[] = [
  { id: "divisible", label: "More pieces" },
  { id: "recognizable", label: "Recognizable" },
  { id: "lowerPremium", label: "Lower premium" },
  { id: "silver", label: "Silver" },
  { id: "gold", label: "Gold" },
  { id: "coins", label: "Coins" },
  { id: "bars", label: "Bars okay" },
];

export default function MetalMatchTool() {
  const [budget, setBudget] = useState(150);
  const [preferences, setPreferences] = useState<Preference[]>(["divisible"]);
  const matches = useMemo(() => getMetalMatches(budget, preferences), [budget, preferences]);

  function togglePreference(id: Preference) {
    setPreferences((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <main className="wikiPage">
      <section className="wikiHero compact">
        <p className="eyebrow">Buy-Side Match Tool</p>
        <h1>Match a budget to practical metal formats.</h1>
        <p className="lede">Enter a budget and compare common gold and silver options. Each result points back into the Wiki for deeper context.</p>
      </section>

      <section className="wikiPanel">
        <p><strong>What are you thinking of spending?</strong></p>
        <div className="actions">
          {budgets.map((amount) => (
            <button key={amount} className={budget === amount ? "button primary" : "button secondary"} onClick={() => setBudget(amount)}>
              {amount < 1000 ? `$${amount}` : `$${amount.toLocaleString()}`}
            </button>
          ))}
        </div>
        <div className="actions">
          {prefs.map((chip) => (
            <button key={chip.id} className={preferences.includes(chip.id) ? "button primary" : "button secondary"} onClick={() => togglePreference(chip.id)}>
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      <section className="wikiPanel">
        <p className="eyebrow">Budget Band</p>
        <h2>{matches.band.label}</h2>
        <p>{matches.band.headline}</p>
        <p className="finePrint">{matches.band.note}</p>
      </section>

      <section className="wikiGrid">
        {matches.cards.map((card) => (
          <article className="wikiCard" key={card.id}>
            <div className="wikiCardMeta"><span>{card.metal}</span><span>{card.format}</span></div>
            <h3>{card.displayName}</h3>
            <p>{card.fitLine}</p>
            <p><strong>Tradeoff:</strong> {card.tradeoffLine}</p>
            <div className="specTable">
              <div className="specRow"><span>Seed melt</span><strong>{formatUsd(card.estimatedMeltUsdAtSeedSpot)}</strong></div>
              <div className="specRow"><span>Compare</span><strong>{card.compareMetric}</strong></div>
            </div>
            <div className="actions">
              <Link href={card.wikiPath} className="button primary">Open {card.wikiLabel}</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

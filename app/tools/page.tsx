import Link from "next/link";

export const metadata = {
  title: "Tools | Tangible Value",
  description: "Precious-metals match tools for buying, selling, and learning through the Tangible Value Wiki.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <main className="wikiPage">
      <section className="wikiHero compact">
        <p className="eyebrow">Tools</p>
        <h1>Simple match tools connected to the Wiki.</h1>
        <p className="lede">Start with a budget or an item you already own, then move into the relevant Wiki page for deeper context.</p>
      </section>
      <section className="wikiGrid twoCol">
        <Link href="/tools/metal-match" className="wikiCard"><p className="wikiCardMeta">Buy side</p><h3>Metal Match</h3><p>Match a budget to coins, bars, rounds, and constitutional silver.</p></Link>
        <Link href="/tools/sell-match" className="wikiCard"><p className="wikiCardMeta">Sell side</p><h3>Sell Match</h3><p>Identify what you have, estimate value basis, and avoid rushed offers.</p></Link>
      </section>
    </main>
  );
}

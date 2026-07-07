export const metadata = {
  title: "Silver Coins on Amazon | Tangible Knowledge",
  description:
    "Browse selected silver coins, bullion coins, and collectible silver resources with buyer education notes.",
};

const silverProducts = [
  ["Lot of 5 American Silver Eagles", "Popular silver bullion coin bundle for comparing per-coin pricing.", "https://amzn.to/4glygDU"],
  ["2024-W American Silver Eagle MS-70", "Graded Silver Eagle; useful for learning about certified modern coins.", "https://amzn.to/4p9VFKV"],
  ["2026-W American Silver Eagle Gem Uncirculated", "Future/anniversary-style listing; compare carefully before purchase.", "https://amzn.to/3R4p2Se"],
  ["2023-S Morgan Dollar Reverse Proof PR-70", "Modern Morgan collectible with certified grade.", "https://amzn.to/4aI1LMv"],
  ["2023 Morgan Dollar MS-70", "Certified modern Morgan dollar with original government packaging.", "https://amzn.to/4gwxWlX"],
  ["2024 Britannia and Liberty Silver Coin", "Modern silver coin with international collector appeal.", "https://amzn.to/3SP19yD"],
  ["Lot of 25 Canadian Silver Maple Leafs", "Large silver bullion lot; compare total cost and premium carefully.", "https://amzn.to/3R1vE3C"],
  ["Fiji Mona Lisa x Starry Night Silver Coin", "Themed collectible silver coin; more collector-focused than bullion-focused.", "https://amzn.to/44hEwp4"],
  ["Niue Marvel Iron Man vs Ultron Silver Coin", "Pop-culture silver collectible; best for collectors, not pure bullion stacking.", "https://amzn.to/4p6olnU"],
];

export default function SilverAcquirePage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">ACQUIRE SILVER</p>
          <h1>Silver coins, bullion, and collectibles.</h1>
          <p className="lede">
            Silver products can range from bullion-focused coins to collector
            pieces. Compare premiums, mintage, grading, and resale potential.
          </p>
        </div>
      </section>

      <section className="pillars">
        {silverProducts.map(([title, text, url]) => (
          <a
            key={title}
            className="card"
            href={url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            <p className="eyebrow">Amazon Resource</p>
            <h2>{title}</h2>
            <p>{text}</p>
            <p><strong>View current availability →</strong></p>
          </a>
        ))}
      </section>

      <section className="newsletter">
        <h2>Disclosure</h2>
        <p>
          This page contains affiliate links. Tangible Knowledge may earn from
          qualifying purchases.
        </p>
      </section>
    </main>
  );
}
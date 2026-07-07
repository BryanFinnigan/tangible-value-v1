export const metadata = {
  title: "Gold Coins on Amazon | Tangible Knowledge",
  description:
    "Compare selected gold coins and fractional gold products with education-first notes before buying.",
};

const goldProducts = [
  ["1 oz American Gold Buffalo", "24-karat U.S. bullion coin; best for buyers seeking a highly recognizable gold coin.", "https://amzn.to/4aBaU9K"],
  ["2023 1/10 oz American Gold Eagle", "Fractional American Gold Eagle; lower entry point than a full ounce.", "https://amzn.to/4ybCqoh"],
  ["Random Year 1/10 oz American Gold Eagle", "Popular fractional gold option with broad recognition.", "https://amzn.to/4p8J76g"],
  ["1/10 oz Gold American Eagle", "Another fractional Gold Eagle listing to compare availability and pricing.", "https://amzn.to/3RqBZG2"],
  ["2016 1/10 oz Australian Gold Square Map Coin", "Distinctive fractional Australian gold coin for collectors.", "https://amzn.to/4p6QjQF"],
  ["2022 1/20 oz Australian Lunar Tiger Gold Coin", "Small fractional gold coin with collector appeal.", "https://amzn.to/4eZgOTd"],
  ["2024 1/10 oz Mexican Gold Libertad", "Fractional Mexican gold coin with strong collector interest.", "https://amzn.to/4eZgS5p"],
  ["2024 1 Gram Gold Chinese Panda", "Low-entry gold option for beginners comparing small gold purchases.", "https://amzn.to/4vTzbAp"],
  ["Mexican 2.5 Pesos Gold Coin", "Historic small gold coin; useful for learning about world gold issues.", "https://amzn.to/4aHulOd"],
  ["French Gold Rooster 20 Francs", "Classic European gold coin with historical appeal.", "https://amzn.to/4ybgU31"],
  ["2025 1 Gram Gold Chinese Panda", "Current-year small gold coin option.", "https://amzn.to/4aElsVv"],
  ["2025 1 Gram Canadian Gold Maple Leaf", "Small .9999 Canadian gold coin from a highly recognized series.", "https://amzn.to/3RlTyak"],
];

export default function GoldAcquirePage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">ACQUIRE GOLD</p>
          <h1>Gold coins and fractional gold options.</h1>
          <p className="lede">
            Compare selected gold resources with education-first notes. Always
            review seller details, premiums, shipping, and total delivered cost.
          </p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Read before buying gold</h2>
        <p>
          Start with <a href="/learn/spot-price-vs-purchase-price">spot price vs.
          purchase price</a> and <a href="/learn/gold-hidden-costs">gold&apos;s
          hidden costs</a> before comparing products.
        </p>
      </section>

      <section className="pillars">
        {goldProducts.map(([title, text, url]) => (
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
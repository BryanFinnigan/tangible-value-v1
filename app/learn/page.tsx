export const metadata = {
  title: "Learn About Gold, Silver, Coins & Tangible Assets | Tangible Knowledge",
  description:
    "Explore beginner guides on gold, silver, coins, premiums, hidden costs, buying safely, and tangible assets.",
};

export default function LearnPage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">TANGIBLE KNOWLEDGE LIBRARY</p>

          <h1>Learn before you buy.</h1>

          <p className="lede">
            Build confidence with beginner-friendly guides on gold, silver,
            coins, jewelry, antiquities, and other tangible assets.
          </p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Start Here: Foundational Knowledge Series</h2>

        <p>
          This learning path introduces the key concepts every beginner should
          understand before buying, collecting, or evaluating tangible assets.
        </p>
      </section>

      <section className="pillars">
        <a className="card" href="/learn/beginners-guide-gold-silver-coins">
          <p className="eyebrow">Chapter 1</p>
          <h2>Beginner&apos;s Guide to Gold, Silver &amp; Coins</h2>
          <p>
            A first-chapter overview of precious metals, coins, and tangible
            assets.
          </p>
        </a>

        <a className="card" href="/learn/spot-price-vs-purchase-price">
          <p className="eyebrow">Chapter 2</p>
          <h2>Gold Spot Price vs. Purchase Price</h2>
          <p>
            Understand why the price quoted online is different from what you
            pay for physical gold.
          </p>
        </a>

        <a className="card" href="/learn/gold-hidden-costs">
          <p className="eyebrow">Chapter 3</p>
          <h2>Gold&apos;s Hidden Costs</h2>
          <p>
            Learn how premiums, shipping, storage, insurance, and taxes affect
            total ownership cost.
          </p>
        </a>
      </section>

      <section className="newsletter">
        <h2>Coming Next</h2>

        <ul>
          <li>Chapter 4 — How to Buy Your First Gold Coin</li>
          <li>Chapter 5 — Bullion vs. Numismatic Coins</li>
          <li>Chapter 6 — Buying Silver: Coins, Bars &amp; Rounds</li>
          <li>Chapter 7 — Understanding Purity, Karats &amp; Hallmarks</li>
          <li>Chapter 8 — Storing Precious Metals Safely</li>
        </ul>
      </section>

      <section className="newsletter">
        <h2>Browse by Topic</h2>

        <ul>
          <li>Gold investing basics</li>
          <li>Silver investing basics</li>
          <li>Coin collecting</li>
          <li>Precious metal premiums</li>
          <li>Buying safely online</li>
          <li>Storage and insurance</li>
          <li>Jewelry, art, and antiquities</li>
        </ul>
      </section>
    </main>
  );
}
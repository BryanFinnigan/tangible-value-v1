export const metadata = {
  title: "Acquire | Tangible Knowledge",
  description:
    "Compare educational source categories for gold, silver, coins, storage, books, and tools before buying.",
};

export default function AcquirePage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">ACQUIRE</p>

          <h1>Education before acquisition.</h1>

          <p className="lede">
            Tangible Knowledge helps readers compare source types, tools, and
            buying considerations before spending money on gold, silver, coins,
            storage, books, and related supplies.
          </p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Start here before buying</h2>

        <p>
          This section is designed to become our education-first buying center.
          Recommendations and affiliate links may be added later, but every
          source should support informed decision-making.
        </p>
      </section>

      <section className="pillars">
        <a className="card" href="/learn/spot-price-vs-purchase-price">
          <p className="eyebrow">Gold Buying Basics</p>
          <h2>Understand spot price first</h2>
          <p>
            Learn why the price online is different from what you actually pay
            for physical gold.
          </p>
        </a>

        <a className="card" href="/learn/gold-hidden-costs">
          <p className="eyebrow">Cost Awareness</p>
          <h2>Know the hidden costs</h2>
          <p>
            Premiums, shipping, storage, insurance, and taxes can all affect the
            true cost of ownership.
          </p>
        </a>

        <div className="card">
          <p className="eyebrow">Coming Soon</p>
          <h2>How to buy your first gold coin</h2>
          <p>
            A step-by-step guide for comparing products, sellers, payment
            methods, and storage options.
          </p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Source categories we are building</h2>

        <ul>
          <li>Gold dealers</li>
          <li>Silver dealers</li>
          <li>Coin dealers</li>
          <li>Coin supplies</li>
          <li>Books and reference guides</li>
          <li>Storage and security</li>
          <li>Scales, loupes, and testing tools</li>
          <li>Amazon bullion and supplies research</li>
        </ul>
      </section>

      <section className="pillars">
        <div className="card">
          <h2>Books & Reference</h2>
          <p>
            Beginner books, coin references, pricing guides, and educational
            materials.
          </p>
        </div>

        <div className="card">
          <h2>Storage</h2>
          <p>
            Safes, lock boxes, capsules, tubes, flips, albums, and documentation
            tools.
          </p>
        </div>

        <div className="card">
          <h2>Testing Tools</h2>
          <p>
            Scales, magnets, calipers, loupes, and beginner authentication
            supplies.
          </p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Affiliate disclosure</h2>

        <p>
          Tangible Knowledge may earn commissions from qualifying purchases in
          the future. Our goal is to recommend resources that support learning,
          confidence, and informed decisions.
        </p>
      </section>
    </main>
  );
}
export const metadata = {
  title: "Acquire Gold, Silver, Coins & Supplies | Tangible Knowledge",
  description:
    "Explore education-first resource categories for gold, silver, coins, books, storage, and collecting supplies.",
};

export default function AcquirePage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">ACQUIRE</p>
          <h1>Buy with confidence.</h1>
          <p className="lede">
            Tangible Knowledge helps readers compare gold, silver, books, coin
            supplies, and related resources before making a purchase.
          </p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Education before acquisition.</h2>
        <p>
          These resources are organized to help you understand what you are
          buying, compare options, and make informed decisions. Some links may
          be affiliate links.
        </p>
      </section>

      <section className="pillars">
        <a className="card" href="/acquire/gold">
          <p className="eyebrow">Gold</p>
          <h2>Gold Coins & Fractional Gold</h2>
          <p>Explore selected gold coins and beginner-friendly gold options.</p>
        </a>

        <a className="card" href="/acquire/silver">
          <p className="eyebrow">Silver</p>
          <h2>Silver Coins & Collectibles</h2>
          <p>Browse silver coins, graded coins, and collectible silver options.</p>
        </a>

        <a className="card" href="/acquire/books">
          <p className="eyebrow">Books</p>
          <h2>Books & Reference Guides</h2>
          <p>Build knowledge before buying metals, coins, or collectibles.</p>
        </a>
      </section>

      <section className="newsletter">
        <h2>Why some buyers use Amazon</h2>
        <p>
          Amazon can be useful for comparing products, buying reference books,
          finding coin supplies, and purchasing from established storefronts.
          Buyers should still verify the seller, compare premiums, review return
          policies, and understand the total delivered cost.
        </p>
      </section>

      <section className="newsletter">
        <h2>Affiliate disclosure</h2>
        <p>
          Tangible Knowledge may earn commissions from qualifying purchases. Our
          recommendations are intended to support education, comparison, and
          informed decision-making.
        </p>
      </section>
    </main>
  );
}
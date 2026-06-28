export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">Knowledge • Value • Confidence</p>

          <h1>Empowering confident decisions through education.</h1>

          <p className="lede">
            Learn about metals, coins, jewelry, antiquities, and other tangible
            assets through clear guides, trusted source recommendations, and
            practical market insights.
          </p>

          <div className="actions">
            <a href="/learn" className="button primary">
              Start Learning
            </a>

            <a href="/acquire" className="button secondary">
              Explore Sources
            </a>
          </div>
        </div>

        <div className="heroImage">
          <div className="imageFrame">
            <p>Featured Guide</p>

            <h2>Gold Spot Price vs. Purchase Price</h2>

            <p>
              Learn why the price quoted online is different from the amount
              you actually pay when buying physical gold.
            </p>

            <a href="/learn/spot-price-vs-purchase-price" className="button primary">
              Read Guide →
            </a>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">Asset Dispatch</p>

        <h2>Education delivered with purpose.</h2>

        <p>
          Practical insights, beginner guides, market context, and trusted
          source recommendations delivered to your inbox.
        </p>

        <form>
          <input type="email" placeholder="Enter your email" />

          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="pillars">
        <a href="/learn" className="card">
          <h2>Learn</h2>
          <p>
            Beginner guides that make complex topics approachable.
          </p>
        </a>

        <a href="/learn/spot-price-vs-purchase-price" className="card">
          <h2>Evaluate</h2>
          <p>
            Understand spot price, premiums, purchase price, and value drivers.
          </p>
        </a>

        <a href="/acquire" className="card">
          <h2>Acquire</h2>
          <p>
            Compare sources and build confidence before buying.
          </p>
        </a>
      </section>
    </main>
  );
}
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
            <a href="/wiki" className="button primary">
              Explore the Wiki
            </a>

            <a href="/learn" className="button secondary">
              Start Learning
            </a>
          </div>
        </div>

        <div className="heroImage">
          <div className="imageFrame">
            <p>Featured Reference</p>

            <h2>The Precious Metals Wiki</h2>

            <p>
              Reference pages for coins, bullion, bars, melt value, premiums,
              authentication, and resale context.
            </p>

            <a href="/wiki" className="button primary">
              Open Wiki →
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
        <a href="/wiki" className="card">
          <h2>Wiki</h2>
          <p>
            Search reference pages for coins, bars, melt values, premiums, and
            precious-metal resale context.
          </p>
        </a>

        <a href="/learn" className="card">
          <h2>Learn</h2>
          <p>
            Beginner guides that make complex topics approachable.
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

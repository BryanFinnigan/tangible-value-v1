export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">Knowledge • Value • Confidence</p>

          <h1>Empowering confident decisions through education.</h1>

          <p className="lede">
            Learn about metals, coins, jewelry, antiquities, and other tangible
            assets through clear guides, trusted source recommendations, practical
            match tools, and market context.
          </p>

          <div className="actions">
            <a href="/tools/metal-match" className="button primary">
              Find Your Match
            </a>

            <a href="/wiki" className="button secondary">
              Explore the Wiki
            </a>
          </div>
        </div>

        <div className="heroImage">
          <div className="imageFrame">
            <p>Featured Tool</p>

            <h2>Metal Match + Sell Match</h2>

            <p>
              Match a budget to common precious-metal formats or identify what
              you are selling before accepting an offer.
            </p>

            <a href="/tools" className="button primary">
              Open Tools →
            </a>
          </div>
        </div>
      </section>

      <section className="pillars">
        <a href="/tools/metal-match" className="card">
          <h2>Metal Match</h2>
          <p>
            Enter a budget and compare coins, bars, rounds, and 90% silver with
            links into the relevant Wiki pages.
          </p>
        </a>

        <a href="/tools/sell-match" className="card">
          <h2>Sell Match</h2>
          <p>
            Choose what you have, estimate the value basis, and slow down before
            accepting an offer.
          </p>
        </a>

        <a href="/wiki" className="card">
          <h2>Wiki</h2>
          <p>
            Search reference pages for coins, bars, melt values, premiums, and
            precious-metal resale context.
          </p>
        </a>
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

        <a href="/acquire" className="card">
          <h2>Acquire</h2>
          <p>
            Compare sources and build confidence before buying.
          </p>
        </a>

        <a href="/tools" className="card">
          <h2>Tools</h2>
          <p>
            Use lightweight match tools that connect simple questions to deeper
            reference pages.
          </p>
        </a>
      </section>
    </main>
  );
}

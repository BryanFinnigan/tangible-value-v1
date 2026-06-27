export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Knowledge • Value • Confidence</p>

          <h1>Empowering confident decisions through education.</h1>

          <p className="lede">
            Learn about metals, coins, jewelry, antiquities, and other tangible
            assets through clear guides, trusted source recommendations, and
            practical market insights.
          </p>

          <div className="actions">
            <a href="/learn" className="button primary">Start Learning</a>
            <a href="/acquire" className="button secondary">Explore Sources</a>
          </div>
        </div>

        <div className="heroImage" aria-label="Editorial image representing tangible assets">
          <div className="imageFrame">
            <p>Featured Guide</p>
            <h2>Gold, silver, coins, jewelry, and antiquities.</h2>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">Asset Dispatch</p>
        <h2>Education delivered with purpose.</h2>
        <p>
          Practical insights, beginner guides, market context, and trusted source
          recommendations delivered to your inbox.
        </p>

        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="pillars">
        <Card title="Learn" text="Beginner guides that make complex topics approachable." />
        <Card title="Evaluate" text="Understand condition, authenticity, premiums, and value drivers." />
        <Card title="Acquire" text="Compare sources and build confidence before buying." />
      </section>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
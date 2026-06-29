export default function LearnPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "Georgia, serif",
      }}
    >
      <p
        style={{
          color: "#8A6F3D",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Learn • Empowerment Through Education
      </p>

      <h1
        style={{
          fontSize: "3.5rem",
          lineHeight: 1.1,
          marginBottom: "20px",
        }}
      >
        Build confidence before you buy.
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: 1.8,
          color: "#555",
          maxWidth: "720px",
          marginBottom: "50px",
        }}
      >
        Our growing knowledge base is designed to help beginners understand
        precious metals, coins, jewelry, antiquities, and other tangible assets.
        Whether you're making your first purchase or expanding a collection,
        you'll find practical guidance built on research—not sales pressure.
      </p>

      <section style={{ marginBottom: "60px" }}>
        <h2>Start Here</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>
            <a href="/learn/beginners-guide-gold-silver-coins">
              Beginner's Guide to Investing in Gold, Silver & Coins
            </a>
          </li>

          <li>
            <a href="/learn/what-are-tangible-assets">
              What Are Tangible Assets?
            </a>
          </li>

          <li>
            <a href="/learn/spot-price-vs-premium">
              Understanding Spot Price vs Purchase Price
            </a>
          </li>
<li>
  <a href="/learn/gold-hidden-costs">
    Chapter 3 — Gold&apos;s Hidden Costs: Premiums, Shipping, Storage &amp; Insurance
  </a>
</li>
        </ul>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2>Explore by Topic</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>Gold Investing</li>
          <li>Silver Investing</li>
          <li>Coin Collecting</li>
          <li>Bullion</li>
          <li>Estate Jewelry</li>
          <li>Antiquities & Collectibles</li>
          <li>Buying Safely</li>
          <li>Market Education</li>
        </ul>
      </section>

      <section>
        <h2>Our Mission</h2>

        <p
          style={{
            maxWidth: "760px",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          At Tangible Value, we believe education creates confidence.
          Our mission is to empower collectors, investors, and curious
          beginners with trustworthy, accessible knowledge so they can make
          informed decisions about tangible assets.
        </p>
      </section>
    </main>
  );
}
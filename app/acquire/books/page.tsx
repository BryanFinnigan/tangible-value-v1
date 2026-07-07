export const metadata = {
  title: "Precious Metals Books & Coin Guides | Tangible Knowledge",
  description:
    "Explore beginner books and reference guides for gold, silver, bullion, and coin collecting.",
};

const books = [
  ["The Bullion Coin Bible", "A focused guide for readers learning about bullion coins.", "https://amzn.to/4wx5e9b"],
  ["Mastering Gold and Silver Markets", "Market-focused perspective from a bullion banking background.", "https://amzn.to/4wwU0kZ"],
  ["Precious Metal Investing", "Beginner-oriented guide to gold, silver, and rare metals.", "https://amzn.to/4vQWN8C"],
  ["Stack Silver Get Gold", "Practical beginner resource on buying bullion without overpaying.", "https://amzn.to/4eZe9KN"],
  ["Guide to Investing in Gold and Silver", "Broad introduction to gold and silver investing concepts.", "https://amzn.to/4wuEc24"],
  ["HowExpert Guide to Gold and Silver Collecting", "Step-by-step system for learning, collecting, buying, and selling.", "https://amzn.to/3Rk3b9v"],
];

export default function BooksAcquirePage() {
  return (
    <main className="home">
      <section className="hero">
        <div>
          <p className="eyebrow">BOOKS & REFERENCE</p>
          <h1>Build knowledge before buying.</h1>
          <p className="lede">
            Books and reference guides can help readers understand terminology,
            premiums, coin types, market behavior, and common beginner mistakes.
          </p>
        </div>
      </section>

      <section className="pillars">
        {books.map(([title, text, url]) => (
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
            <p><strong>View resource →</strong></p>
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
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Morgan Silver Dollar Guide",
  description:
    "A reference guide to Morgan Silver Dollar specifications, mint marks, silver content, value drivers, buying considerations, and related coin tools.",
  alternates: { canonical: "/wiki/coins/morgan-silver-dollar" },
  openGraph: {
    title: "Morgan Silver Dollar Guide | Tangible Value",
    description:
      "Learn the key dates, mint marks, silver content, and value drivers behind the Morgan Silver Dollar.",
    images: ["/images/morgan-silver-dollar-guide.svg"],
  },
};

const specs = [
  ["Years minted", "1878–1904 and 1921"],
  ["Composition", "90% silver, 10% copper"],
  ["Actual silver weight", "0.7734 troy oz"],
  ["Total weight", "26.73 grams"],
  ["Diameter", "38.1 mm"],
  ["Designer", "George T. Morgan"],
  ["Edge", "Reeded"],
];

const valueDrivers = [
  {
    title: "Date",
    body: "Some dates were produced in much smaller quantities than others. Scarcity can materially affect collector value.",
  },
  {
    title: "Mint mark",
    body: "Morgan Dollars were struck in Philadelphia, New Orleans, San Francisco, Carson City, and—only in 1921—Denver.",
  },
  {
    title: "Condition",
    body: "Wear, damage, cleaning, luster, strike quality, and eye appeal can separate an ordinary example from a much stronger coin.",
  },
  {
    title: "Demand",
    body: "Collector interest is not distributed evenly. Popular dates, mints, and attractive certified examples can command larger premiums.",
  },
];

export default function MorganSilverDollarPage() {
  return (
    <main className="wikiPage narrow">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href="/wiki">Wiki</Link>
        <span>›</span>
        <span>Morgan Silver Dollar</span>
      </nav>

      <header className="wikiHero compact">
        <p className="eyebrow">Tangible Value Coin Library</p>
        <h1>Morgan Silver Dollar</h1>
        <p className="lede">
          A practical reference to one of America&apos;s most collected silver coins—covering its metal content,
          mint marks, value drivers, and the details worth checking before buying or selling.
        </p>
        <div className="wikiMetaBar" aria-label="Page details">
          <span>Updated July 2026</span>
          <span>5-minute reference</span>
          <span>Educational guide</span>
        </div>
      </header>

      <section className="wikiInfographicPanel" aria-labelledby="infographic-heading">
        <div>
          <p className="eyebrow">Visual Reference</p>
          <h2 id="infographic-heading">The Morgan Dollar at a glance</h2>
          <p>
            Save or share this mobile-friendly summary, then use the guide below for context that cannot fit inside an infographic.
          </p>
        </div>
        <Image
          src="/images/morgan-silver-dollar-guide.svg"
          alt="Morgan Silver Dollar quick reference showing mint years, 90 percent silver composition, 0.7734 troy ounce silver content, mint marks, and value drivers"
          width={1200}
          height={1500}
          priority
          className="wikiInfographic"
        />
      </section>

      <div className="wikiLayout">
        <article className="wikiMainColumn wikiArticle">
          <section className="wikiPanel">
            <p className="eyebrow">Overview</p>
            <h2>Why the Morgan Dollar matters</h2>
            <p>
              The Morgan Silver Dollar was issued from 1878 through 1904 and again in 1921. Each original coin was struck in
              90% silver and 10% copper and contains 0.7734 troy ounces of pure silver.
            </p>
            <p>
              That common silver content does not make every Morgan Dollar equally valuable. A worn common-date coin may trade
              close to its bullion and type-coin value, while a scarce date, desirable mint mark, or high-grade certified example
              can carry a much larger collector premium.
            </p>
          </section>

          <section className="wikiPanel">
            <p className="eyebrow">Core Evaluation</p>
            <h2>What determines value?</h2>
            <div className="wikiGrid twoCol">
              {valueDrivers.map((item) => (
                <div className="wikiCard staticCard" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="wikiPanel">
            <p className="eyebrow">Mint Marks</p>
            <h2>Where Morgan Dollars were struck</h2>
            <div className="mintMarkGrid">
              <div><strong>No mark</strong><span>Philadelphia</span></div>
              <div><strong>O</strong><span>New Orleans</span></div>
              <div><strong>S</strong><span>San Francisco</span></div>
              <div><strong>CC</strong><span>Carson City</span></div>
              <div><strong>D</strong><span>Denver, 1921 only</span></div>
            </div>
            <p className="finePrint">
              The mint mark appears on the reverse, beneath the wreath and above the letters “DO” in “DOLLAR.” Philadelphia coins carry no mint mark.
            </p>
          </section>

          <section className="wikiPanel">
            <p className="eyebrow">Before You Buy</p>
            <h2>Practical checklist</h2>
            <ul className="checkList">
              <li>Confirm the date and mint mark before comparing prices.</li>
              <li>Look for evidence of harsh cleaning, scratches, rim damage, or altered surfaces.</li>
              <li>Compare the asking price with both current silver value and recent sales for comparable coins.</li>
              <li>Use a scale and loupe as screening tools, but do not treat them as complete authentication.</li>
              <li>For higher-value examples, consider recognized third-party certification or an experienced coin professional.</li>
            </ul>
          </section>

          <section className="wikiPanel">
            <p className="eyebrow">Important Distinction</p>
            <h2>Melt value is not collector value</h2>
            <p>
              Spot price helps establish the metal-value floor, but a Morgan Dollar usually trades as more than raw silver.
              Date, mint, grade, originality, and collector demand may add a premium. Conversely, damage or cleaning may reduce
              the premium even though the silver content remains.
            </p>
          </section>

          <section className="wikiPanel">
            <p className="eyebrow">Sources</p>
            <h2>Reference material</h2>
            <ul>
              <li><a className="textLink" href="https://www.usmint.gov/learn/coin-and-medal-programs/morgan-and-peace-silver-dollars" target="_blank" rel="noreferrer">United States Mint — Morgan and Peace Silver Dollars</a></li>
              <li><a className="textLink" href="https://www.pcgs.com/coinfacts/category/morgan-dollar-1878-1921/744" target="_blank" rel="noreferrer">PCGS CoinFacts — Morgan Dollars</a></li>
              <li><a className="textLink" href="https://www.ngccoin.com/coin-explorer/united-states/dollars/morgan-dollars-1878-1921/" target="_blank" rel="noreferrer">NGC Coin Explorer — Morgan Dollars</a></li>
            </ul>
            <p className="finePrint">Educational content only. Not financial, investment, grading, or authentication advice.</p>
          </section>
        </article>

        <aside className="wikiSidebar">
          <section className="wikiPanel stickyPanel">
            <p className="eyebrow">Quick Facts</p>
            <div className="specTable">
              {specs.map(([label, value]) => (
                <div className="specRow" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="wikiPanel">
            <p className="eyebrow">Useful Tools</p>
            <h2>Inspect more carefully</h2>
            <p>A loupe and accurate gram scale can help with basic inspection and documentation.</p>
            <a className="toolLink" href="https://amzn.to/4eXmZIY" target="_blank" rel="sponsored noreferrer">30×/60× illuminated jeweler&apos;s loupe →</a>
            <a className="toolLink" href="https://amzn.to/4h6eE71" target="_blank" rel="sponsored noreferrer">500 g × 0.01 g digital scale →</a>
            <p className="finePrint">As an Amazon Associate, Tangible Value may earn from qualifying purchases.</p>
          </section>

          <section className="newsletterMini">
            <p className="eyebrow">Asset Dispatch</p>
            <h2>Build your reference library.</h2>
            <p>Receive practical coin, bullion, jewelry, and market education as new guides are published.</p>
            <Link href="/#newsletter" className="button primary">Sign up for our newsletter</Link>
          </section>
        </aside>
      </div>

      <section className="wikiPanel">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Keep Learning</p>
            <h2>Related reference topics</h2>
          </div>
          <Link href="/wiki" className="textLink">Explore the Wiki →</Link>
        </div>
        <div className="wikiGrid threeCol">
          <Link href="/wiki/topics/spot-price-vs-premium" className="wikiCard">
            <h3>Spot Price vs. Premium</h3>
            <p>Understand the difference between raw metal value and the price a buyer actually pays.</p>
          </Link>
          <Link href="/wiki/topics/melt-value" className="wikiCard">
            <h3>Melt Value</h3>
            <p>Learn how metal content creates a baseline without defining the full collector market.</p>
          </Link>
          <Link href="/wiki" className="wikiCard">
            <h3>Coin Library</h3>
            <p>Browse additional references for bullion coins, historic coins, bars, and resale context.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Wiki | Tangible Value",
  description:
    "A precious-metals wiki for coins, bullion, bars, melt value, premiums, authentication, and resale context.",
};

export default function WikiPage() {
  return (
    <main className="articlePage">
      <article className="article">
        <p className="eyebrow">Tangible Value Wiki</p>

        <h1>Precious metals, coins, bars, and resale context.</h1>

        <p>
          The Wiki is being structured as a reference library for hard assets:
          coins, bullion, bars, melt value, premiums, authentication, and
          practical seller guidance.
        </p>

        <div className="callout">
          <h2>What belongs here</h2>
          <p>
            This section will house content-heavy reference pages for regularly
            traded precious-metal assets, including sovereign bullion coins,
            fractional gold, constitutional silver, gold and silver bars,
            platinum, palladium, and historically recognizable coins.
          </p>
        </div>

        <h2>Next build layer</h2>
        <p>
          The next step is adding the full structured data layer and dynamic
          wiki routes so each asset has its own page with specifications,
          estimated melt value, premium context, chart telemetry, and related
          articles.
        </p>
      </article>
    </main>
  );
}

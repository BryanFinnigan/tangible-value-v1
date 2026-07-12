import Link from "next/link";
import WikiAssetCard from "@/components/WikiAssetCard";
import WikiArticleCard from "@/components/WikiArticleCard";
import { getCategoryHubs, getFeaturedAssets, registryTaxonomy, wikiArticles } from "@/lib/wikiData";

export const metadata = {
  title: "Wiki | Tangible Value",
  description: "A precious-metals wiki for coins, bullion, bars, melt value, premiums, authentication, and resale context.",
  alternates: { canonical: "/wiki" },
};

export default function WikiHomePage() {
  const featuredAssets = getFeaturedAssets(9);
  const featuredArticles = wikiArticles.slice(0, 6);

  return (
    <main className="wikiPage">
      <section className="wikiHero">
        <p className="eyebrow">Tangible Value Wiki</p>
        <h1>Precious metals, coins, bars, and resale context in one reference library.</h1>
        <p className="lede">
          Explore calm, data-rich reference pages for gold, silver, platinum, and palladium assets,
          including specifications, estimated melt value, market premiums, authentication notes, and seller guidance.
        </p>
        <div className="actions">
          <a href="#assets" className="button primary">Browse Assets</a>
          <Link href="/wiki/topics" className="button secondary">Read Wiki Topics</Link>
        </div>
      </section>

      <section className="wikiPanel">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">New Reference Guide</p>
            <h2>Morgan Silver Dollar</h2>
          </div>
          <Link href="/wiki/coins/morgan-silver-dollar" className="textLink">Open guide →</Link>
        </div>
        <div className="wikiGrid twoCol">
          <Link href="/wiki/coins/morgan-silver-dollar" className="wikiCard">
            <div className="wikiCardMeta"><span>Coin Library</span><span>5-minute guide</span></div>
            <h3>Dates, mint marks, silver content, and value drivers</h3>
            <p>
              Learn why two Morgan Dollars with the same silver content can carry very different market values,
              then use the practical checklist before buying or selling.
            </p>
          </Link>
          <Link href="/wiki/coins/morgan-silver-dollar" className="wikiCard">
            <div className="wikiCardMeta"><span>Visual Reference</span><span>Mobile friendly</span></div>
            <h3>Saveable Morgan Dollar infographic</h3>
            <p>
              A concise Tangible Value graphic covering 1878–1904 and 1921, 90% silver composition,
              0.7734 troy ounce silver content, mint marks, and value factors.
            </p>
          </Link>
        </div>
      </section>

      <section className="wikiPanel">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Reference Structure</p>
            <h2>Wiki Categories</h2>
          </div>
          <p>{registryTaxonomy.page_count_after_wiki_expansion} crawlable wiki pages in this release structure.</p>
        </div>
        <div className="wikiGrid threeCol">
          {getCategoryHubs().map((hub) => (
            <Link href={hub.path} className="wikiCard" key={hub.path}>
              <div className="wikiCardMeta"><span>{hub.asset_count} pages</span><span>Hub</span></div>
              <h3>{hub.label}</h3>
              <p>{hub.seo_role}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="wikiPanel" id="assets">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Asset Pages</p>
            <h2>Featured Asset References</h2>
          </div>
          <Link href="/wiki/topics" className="textLink">Wiki Topics →</Link>
        </div>
        <div className="wikiGrid">
          {featuredAssets.map((asset) => (
            <WikiAssetCard key={asset.asset_id} asset={asset} />
          ))}
        </div>
      </section>

      <section className="wikiPanel">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Learning Layer</p>
            <h2>Core Wiki Topics</h2>
          </div>
          <Link href="/wiki/topics" className="textLink">View all topics →</Link>
        </div>
        <div className="wikiGrid twoCol">
          {featuredArticles.map((article) => (
            <WikiArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

import WikiArticleCard from "@/components/WikiArticleCard";
import WikiBreadcrumbs from "@/components/WikiBreadcrumbs";
import { wikiArticles } from "@/lib/wikiData";

export const metadata = {
  title: "Wiki Topics | Tangible Value",
  description: "Reference articles explaining melt value, premiums, buyback spreads, authentication, and precious-metal resale context.",
  alternates: { canonical: "/wiki/topics" },
};

export default function WikiTopicsPage() {
  return (
    <main className="wikiPage">
      <WikiBreadcrumbs items={[{ href: "/wiki/topics", label: "Topics" }]} />
      <section className="wikiHero compact">
        <p className="eyebrow">Wiki Topics</p>
        <h1>Reference articles for precious-metal decisions.</h1>
        <p className="lede">Start with melt value, premiums, dealer spreads, authentication, and the practical language of coins and bullion.</p>
      </section>
      <section className="wikiPanel">
        <div className="wikiGrid twoCol">
          {wikiArticles.map((article) => (
            <WikiArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

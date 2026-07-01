import { Metadata } from "next";
import { notFound } from "next/navigation";
import WikiAssetCard from "@/components/WikiAssetCard";
import WikiBreadcrumbs from "@/components/WikiBreadcrumbs";
import { getArticleBySlug, getAssetById, getTopicPath, wikiArticles } from "@/lib/wikiData";

export function generateStaticParams() {
  return wikiArticles.map((article) => ({ slug: article.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Topic Not Found" };
  return {
    title: article.meta_title,
    description: article.meta_description,
    alternates: { canonical: getTopicPath(article.slug) },
  };
}

export default async function WikiTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const relatedAssets = article.related_asset_ids.map(getAssetById).filter(Boolean);

  return (
    <main className="wikiPage narrow">
      <WikiBreadcrumbs items={[{ href: "/wiki/topics", label: "Topics" }, { href: getTopicPath(article.slug), label: article.title }]} />
      <article className="article wikiArticle">
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="lede">{article.summary}</p>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <div className="callout">
          <p>{article.disclaimer}</p>
          <p className="finePrint">Last reviewed: {article.last_reviewed}</p>
        </div>
      </article>
      {relatedAssets.length > 0 && (
        <section className="wikiPanel">
          <h2>Related Asset Pages</h2>
          <div className="wikiGrid twoCol">
            {relatedAssets.map((asset) => asset && <WikiAssetCard key={asset.asset_id} asset={asset} />)}
          </div>
        </section>
      )}
    </main>
  );
}

import Link from "next/link";
import type { WikiArticle } from "@/types/wiki";
import { getTopicPath } from "@/lib/wikiData";

export default function WikiArticleCard({ article }: { article: WikiArticle }) {
  return (
    <Link href={getTopicPath(article.slug)} className="wikiCard">
      <div className="wikiCardMeta">
        <span>{article.category}</span>
        <span>{article.content_type}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
    </Link>
  );
}

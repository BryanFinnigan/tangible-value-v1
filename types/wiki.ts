export type WikiSection = {
  heading: string;
  body: string;
};

export type WikiArticle = {
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  category: string;
  summary: string;
  sections: WikiSection[];
  related_asset_ids: string[];
  content_type: "Wiki Article";
  recommended_url_path: string;
  primary_search_intent: string;
  last_reviewed: string;
  disclaimer: string;
  implementation_mapping: {
    dynamic_route_slug: string;
    category_hub: string;
    seo_template: string;
  };
};

type AffiliateLinks = {
  primary_image_cdn_url: string;
  affiliate_broker_buy_link: string;
  affiliate_sell_quote_link: string;
  affiliate_grading_service_link: string;
  affiliate_supplies_link: string;
};

const actions = [
  { key: "affiliate_broker_buy_link", label: "Compare Buying Options" },
  { key: "affiliate_sell_quote_link", label: "Request a Sell Quote" },
  { key: "affiliate_grading_service_link", label: "Explore Grading Services" },
  { key: "affiliate_supplies_link", label: "Storage & Supplies" },
] as const;

export default function AffiliateActionPanel({ links }: { links: AffiliateLinks }) {
  const activeActions = actions
    .map((action) => ({ ...action, href: links[action.key] }))
    .filter((action) => action.href !== "");

  if (activeActions.length === 0) return null;

  return (
    <section className="wikiPanel">
      <p className="eyebrow">Marketplace</p>
      <h2>Next Steps</h2>
      <div className="actions">
        {activeActions.map((action) => (
          <a
            key={action.key}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="button primary"
          >
            {action.label}
          </a>
        ))}
      </div>
      <p className="finePrint">
        Some marketplace links may be affiliate links when active. Educational content remains separate from product availability.
      </p>
    </section>
  );
}

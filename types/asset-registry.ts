export type MetalType = "Gold" | "Silver" | "Platinum" | "Palladium";

export type AssetType =
  | "Bullion Coin"
  | "Fractional Coin"
  | "Historic Coin"
  | "Constitutional Silver"
  | "Gold Bar"
  | "Silver Bar"
  | "Platinum Bar"
  | "Palladium Bar"
  | "Round";

export type LiquidityRating = "Very High" | "High" | "Medium" | "Low";
export type ValuationConfidence = "High" | "Medium" | "Low";

export type CommonBuyerQuestion = {
  question: string;
  answer: string;
};

export type ChartTelemetryPoint = {
  timestamp: string;
  spot_metal_price_usd_per_oz: number;
  estimated_asset_market_price_usd: number;
  estimated_premium_percentage: number;
};

export type RelatedAssetReference = {
  asset_id: string;
  relationship: string;
};

export type HardAsset = {
  asset_id: string;
  asset_type: AssetType;
  page_metadata: {
    target_h1_title: string;
    meta_title: string;
    meta_description: string;
    primary_search_intent: string;
    recommended_url_path: string;
  };
  asset_identity: {
    common_name: string;
    official_name: string;
    issuing_authority_or_manufacturer: string;
    country_or_origin: string;
    denomination: string;
    production_years_active: string;
    design_notes: string;
  };
  classification: {
    metal_type: MetalType;
    market_role: string;
    investor_profile: string;
    liquidity_rating: LiquidityRating;
    premium_behavior: string;
  };
  composition_and_assay: {
    purity_percentage: number;
    fineness_label: string;
    gross_weight_g: number;
    net_fine_weight_oz: number;
    dimensions_diameter_mm: number;
    dimensions_thickness_mm: number;
    edge_or_format: string;
  };
  valuation_snapshot: {
    baseline_spot_price_assumption_usd_per_oz: number;
    estimated_melt_value_usd: number;
    typical_retail_premium_percentage: number;
    typical_buyback_discount_percentage: number;
    estimated_retail_market_value_usd: number;
    estimated_private_party_value_usd: number;
    estimated_dealer_buyback_value_usd: number;
    valuation_confidence: ValuationConfidence;
    valuation_note: string;
  };
  content_blocks: {
    summary: string;
    why_it_matters: string;
    common_buyer_questions: CommonBuyerQuestion[];
    seller_guidance: string;
    authentication_notes: string;
    storage_and_handling_notes: string;
    comparison_notes: string;
  };
  chart_telemetry_historical_36mo: ChartTelemetryPoint[];
  related_assets: RelatedAssetReference[];
  research_sources: {
    primary_spec_source_name: string;
    primary_spec_source_url: string;
    secondary_reference_source_name: string;
    secondary_reference_source_url: string;
    pricing_methodology_note: string;
  };
  ui_placeholders: {
    primary_image_cdn_url: string;
    affiliate_broker_buy_link: string;
    affiliate_sell_quote_link: string;
    affiliate_grading_service_link: string;
    affiliate_supplies_link: string;
  };
  implementation_mapping: {
    dynamic_route_slug: string;
    category_hub: string;
    chart_component: "InteractiveMetalValueChart";
    spec_table_component: "AssaySpecificationTable";
    affiliate_component: "AffiliateActionPanel";
    seo_template: string;
  };
};

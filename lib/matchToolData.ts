export type Preference = "divisible" | "recognizable" | "lowerPremium" | "silver" | "gold" | "coins" | "bars";
export type WeightUnit = "g" | "ozt" | "dwt";

export type BudgetBand = {
  id: string;
  label: string;
  headline: string;
  defaultResultIds: string[];
  note: string;
};

export type MetalOption = {
  id: string;
  displayName: string;
  metal: "gold" | "silver";
  format: "coin" | "bar" | "round" | "lot";
  estimatedMeltUsdAtSeedSpot: number;
  primaryBudgetBands: string[];
  secondaryBudgetBands: string[];
  badges: string[];
  fitLine: string;
  tradeoffLine: string;
  compareMetric: string;
  wikiPath: string;
  wikiLabel: string;
};

export type SellItem = {
  id: string;
  label: string;
  metal: "gold" | "silver" | "mixed";
  family: string;
  defaultPurity: number | null;
  stampExamples?: string[];
  badges: string[];
  firstCheck: string;
  valueBasis: string;
  bestPath: string;
  avoid: string;
  smartMove: string;
  calculatorHint: string;
  wikiPath: string;
  wikiLabel: string;
};

const TROY_OUNCE_TO_GRAMS = 31.1034768;
const PENNYWEIGHT_TO_GRAMS = 1.55517384;

export const spotSnapshotUsd = {
  goldPerTroyOz: 4046.3,
  silverPerTroyOz: 58.86,
  note: "Prototype seed values only. Production should use current spot data or manually reviewed pricing."
};

export const budgetBands: BudgetBand[] = [
  { id: "under_50", label: "Under $50", headline: "Tiny pieces, real metal, low pressure.", defaultResultIds: ["us90_silver_dime", "us90_silver_quarter", "us90_silver_half", "us90_silver_face_value_sampler"], note: "Lead with 90% U.S. silver because it is divisible and easy to understand at this band." },
  { id: "50_100", label: "$50–$100", headline: "The first full ounce becomes realistic.", defaultResultIds: ["one_oz_silver_round", "one_oz_sovereign_silver_coin", "us90_silver_face_value_sampler"], note: "Good first-click band for silver rounds, recognizable sovereign coins, and small 90% silver lots." },
  { id: "100_250", label: "$100–$250", headline: "A small stack, not just a single piece.", defaultResultIds: ["us90_silver_face_value_sampler", "one_oz_silver_round", "one_oz_sovereign_silver_coin", "one_gram_gold_bar"], note: "Show silver as the main path and gold as a small, premium-heavy entry point." },
  { id: "250_500", label: "$250–$500", headline: "Choose flexibility or efficiency.", defaultResultIds: ["five_oz_silver_bar", "us90_silver_face_value_sampler", "two_point_five_gram_gold_bar", "one_tenth_oz_gold_coin"], note: "This band is where several flexible pieces begin competing with one efficient bar." },
  { id: "500_1000", label: "$500–$1,000", headline: "A serious starter position.", defaultResultIds: ["ten_oz_silver_bar", "one_oz_silver_round", "five_gram_gold_bar", "one_tenth_oz_gold_coin"], note: "Offer a mixed-stack path: some recognizable pieces for liquidity and bars for efficiency." },
  { id: "1000_2500", label: "$1,000–$2,500", headline: "Compact gold and meaningful silver both enter the conversation.", defaultResultIds: ["ten_gram_gold_bar", "quarter_oz_gold_coin", "kilo_silver_bar", "half_oz_gold_coin"], note: "Use comparison framing: compact value versus divisible silver." },
  { id: "2500_plus", label: "$2,500+", headline: "Efficiency matters, but exit strategy matters more.", defaultResultIds: ["one_oz_gold_coin_or_bar", "hundred_oz_silver_bar", "half_oz_gold_coin", "quarter_oz_gold_coin"], note: "Warn that larger bars can be efficient but less flexible at resale." }
];

export const metalOptions: MetalOption[] = [
  { id: "us90_silver_dime", displayName: "90% silver dime", metal: "silver", format: "coin", estimatedMeltUsdAtSeedSpot: 4.26, primaryBudgetBands: ["under_50"], secondaryBudgetBands: ["50_100", "100_250"], badges: ["most divisible", "low entry", "historic U.S. coinage"], fitLine: "A tiny silver unit that lets someone start without buying a full ounce.", tradeoffLine: "Requires melt-value math and premiums can vary by lot quality.", compareMetric: "Price per $1 face value or price per fine silver ounce.", wikiPath: "/wiki/constitutional-silver", wikiLabel: "Constitutional Silver Wiki" },
  { id: "us90_silver_quarter", displayName: "90% silver quarter", metal: "silver", format: "coin", estimatedMeltUsdAtSeedSpot: 10.64, primaryBudgetBands: ["under_50"], secondaryBudgetBands: ["50_100", "100_250"], badges: ["divisible", "recognizable", "U.S. silver"], fitLine: "A practical small silver piece with a direct Wiki page already in place.", tradeoffLine: "Condition and date should be checked before treating every coin as bulk silver.", compareMetric: "Melt value and price per coin.", wikiPath: "/wiki/assets/us-90-percent-silver-quarter", wikiLabel: "90% Silver Quarter" },
  { id: "us90_silver_half", displayName: "90% silver half dollar", metal: "silver", format: "coin", estimatedMeltUsdAtSeedSpot: 21.29, primaryBudgetBands: ["under_50", "50_100"], secondaryBudgetBands: ["100_250"], badges: ["recognizable", "divisible", "constitutional silver"], fitLine: "Larger than a dime or quarter but still flexible enough for small transactions.", tradeoffLine: "Older types and better dates may need numismatic review.", compareMetric: "Price per half dollar or per $1 face value.", wikiPath: "/wiki/constitutional-silver", wikiLabel: "Constitutional Silver Wiki" },
  { id: "us90_silver_face_value_sampler", displayName: "$1 face value of 90% silver", metal: "silver", format: "lot", estimatedMeltUsdAtSeedSpot: 42.08, primaryBudgetBands: ["under_50", "50_100"], secondaryBudgetBands: ["100_250", "250_500"], badges: ["starter lot", "divisible", "sell-side friendly"], fitLine: "A small group of pre-1965 U.S. silver can teach melt value without forcing one large purchase.", tradeoffLine: "The buyer needs to understand face-value multiples and silver content.", compareMetric: "Price per $1 face value.", wikiPath: "/wiki/constitutional-silver", wikiLabel: "Constitutional Silver Wiki" },
  { id: "one_oz_silver_round", displayName: "1 oz silver round", metal: "silver", format: "round", estimatedMeltUsdAtSeedSpot: 58.86, primaryBudgetBands: ["50_100", "100_250"], secondaryBudgetBands: ["250_500", "500_1000"], badges: ["full ounce", "lower premium", "simple"], fitLine: "A full ounce of silver in a simple private-mint format.", tradeoffLine: "Usually less recognizable than a sovereign bullion coin.", compareMetric: "Total price over silver spot.", wikiPath: "/wiki/silver-coins", wikiLabel: "Silver Coins Wiki" },
  { id: "one_oz_sovereign_silver_coin", displayName: "1 oz sovereign silver coin", metal: "silver", format: "coin", estimatedMeltUsdAtSeedSpot: 58.86, primaryBudgetBands: ["50_100", "100_250"], secondaryBudgetBands: ["250_500", "500_1000"], badges: ["recognizable", "coin", "high liquidity"], fitLine: "A full silver ounce with stronger retail recognition than a generic round.", tradeoffLine: "Premiums can be noticeably higher than generic silver.", compareMetric: "Premium over spot and future buyback spread.", wikiPath: "/wiki/assets/us-silver-eagle-1oz-bullion", wikiLabel: "American Silver Eagle" },
  { id: "five_oz_silver_bar", displayName: "5 oz silver bar", metal: "silver", format: "bar", estimatedMeltUsdAtSeedSpot: 294.3, primaryBudgetBands: ["250_500"], secondaryBudgetBands: ["500_1000"], badges: ["efficient", "compact", "bar"], fitLine: "A bridge between one-ounce pieces and larger silver bars.", tradeoffLine: "Less divisible than individual coins or rounds.", compareMetric: "Premium per ounce.", wikiPath: "/wiki/silver-bars", wikiLabel: "Silver Bars Wiki" },
  { id: "ten_oz_silver_bar", displayName: "10 oz silver bar", metal: "silver", format: "bar", estimatedMeltUsdAtSeedSpot: 588.6, primaryBudgetBands: ["500_1000"], secondaryBudgetBands: ["1000_2500"], badges: ["efficient", "popular size", "storage friendly"], fitLine: "A common bar size for people who want more silver without many separate pieces.", tradeoffLine: "The whole bar generally has to be sold as one unit.", compareMetric: "Delivered price per ounce.", wikiPath: "/wiki/silver-bars", wikiLabel: "Silver Bars Wiki" },
  { id: "kilo_silver_bar", displayName: "Kilo silver bar", metal: "silver", format: "bar", estimatedMeltUsdAtSeedSpot: 1892.39, primaryBudgetBands: ["1000_2500"], secondaryBudgetBands: ["2500_plus"], badges: ["bulk silver", "efficient", "less divisible"], fitLine: "A meaningful silver position in one compact unit.", tradeoffLine: "Large bars are efficient but less flexible at resale.", compareMetric: "Price per ounce and buyback spread.", wikiPath: "/wiki/silver-bars", wikiLabel: "Silver Bars Wiki" },
  { id: "hundred_oz_silver_bar", displayName: "100 oz silver bar", metal: "silver", format: "bar", estimatedMeltUsdAtSeedSpot: 5886, primaryBudgetBands: ["2500_plus"], secondaryBudgetBands: [], badges: ["bulk", "low premium", "exit strategy"], fitLine: "A large silver bar can reduce premium per ounce.", tradeoffLine: "It is less flexible and needs a stronger resale plan.", compareMetric: "Dealer buyback and delivery cost.", wikiPath: "/wiki/silver-bars", wikiLabel: "Silver Bars Wiki" },
  { id: "one_gram_gold_bar", displayName: "1 gram gold bar", metal: "gold", format: "bar", estimatedMeltUsdAtSeedSpot: 130.09, primaryBudgetBands: ["100_250"], secondaryBudgetBands: ["250_500"], badges: ["tiny gold", "premium-heavy", "giftable"], fitLine: "A small entry into gold when a full coin is out of reach.", tradeoffLine: "Premium percentage is usually high on tiny gold.", compareMetric: "Premium percentage over melt.", wikiPath: "/wiki/gold-bars", wikiLabel: "Gold Bars Wiki" },
  { id: "two_point_five_gram_gold_bar", displayName: "2.5 gram gold bar", metal: "gold", format: "bar", estimatedMeltUsdAtSeedSpot: 325.23, primaryBudgetBands: ["250_500"], secondaryBudgetBands: ["500_1000"], badges: ["small gold", "compact", "assay matters"], fitLine: "A small gold bar that fits a mid-level starter budget.", tradeoffLine: "Still carries a higher percentage premium than larger gold.", compareMetric: "Premium and assay packaging.", wikiPath: "/wiki/gold-bars", wikiLabel: "Gold Bars Wiki" },
  { id: "five_gram_gold_bar", displayName: "5 gram gold bar", metal: "gold", format: "bar", estimatedMeltUsdAtSeedSpot: 650.46, primaryBudgetBands: ["500_1000"], secondaryBudgetBands: ["1000_2500"], badges: ["compact", "recognized refiner", "assay"], fitLine: "A practical fractional gold bar for someone not ready for a full ounce.", tradeoffLine: "Brand and packaging matter at resale.", compareMetric: "Premium and refiner recognition.", wikiPath: "/wiki/gold-bars", wikiLabel: "Gold Bars Wiki" },
  { id: "ten_gram_gold_bar", displayName: "10 gram gold bar", metal: "gold", format: "bar", estimatedMeltUsdAtSeedSpot: 1300.92, primaryBudgetBands: ["1000_2500"], secondaryBudgetBands: ["2500_plus"], badges: ["compact value", "bar", "assay"], fitLine: "A meaningful amount of gold below the cost of a full ounce.", tradeoffLine: "Still less recognizable to casual buyers than a major sovereign coin.", compareMetric: "Premium compared with 1 oz gold bars.", wikiPath: "/wiki/gold-bars", wikiLabel: "Gold Bars Wiki" },
  { id: "one_tenth_oz_gold_coin", displayName: "1/10 oz gold coin", metal: "gold", format: "coin", estimatedMeltUsdAtSeedSpot: 404.63, primaryBudgetBands: ["500_1000"], secondaryBudgetBands: ["250_500", "1000_2500"], badges: ["divisible gold", "recognizable", "premium-heavy"], fitLine: "A fractional gold coin keeps the ticket size lower than a full ounce.", tradeoffLine: "Premium percentage can be high.", compareMetric: "Premium percentage and future liquidity.", wikiPath: "/wiki/gold-coins", wikiLabel: "Gold Coins Wiki" },
  { id: "quarter_oz_gold_coin", displayName: "1/4 oz gold coin", metal: "gold", format: "coin", estimatedMeltUsdAtSeedSpot: 1011.58, primaryBudgetBands: ["1000_2500"], secondaryBudgetBands: ["2500_plus"], badges: ["fractional", "recognizable", "liquid"], fitLine: "A more substantial fractional gold coin with better recognition than tiny bars.", tradeoffLine: "Premiums remain higher than one-ounce gold.", compareMetric: "Premium over spot versus divisibility.", wikiPath: "/wiki/gold-coins", wikiLabel: "Gold Coins Wiki" },
  { id: "half_oz_gold_coin", displayName: "1/2 oz gold coin", metal: "gold", format: "coin", estimatedMeltUsdAtSeedSpot: 2023.15, primaryBudgetBands: ["1000_2500", "2500_plus"], secondaryBudgetBands: [], badges: ["recognizable", "compact", "liquid"], fitLine: "A high-value fractional gold coin with more liquidity than obscure formats.", tradeoffLine: "Not as premium-efficient as a full ounce.", compareMetric: "Premium versus 1 oz coin.", wikiPath: "/wiki/gold-coins", wikiLabel: "Gold Coins Wiki" },
  { id: "one_oz_gold_coin_or_bar", displayName: "1 oz gold coin or bar", metal: "gold", format: "coin", estimatedMeltUsdAtSeedSpot: 4046.3, primaryBudgetBands: ["2500_plus"], secondaryBudgetBands: [], badges: ["core bullion", "high liquidity", "benchmark"], fitLine: "The central comparison point for serious gold buyers.", tradeoffLine: "A full ounce is efficient but less divisible than fractional pieces.", compareMetric: "Coin premium versus bar premium.", wikiPath: "/wiki/assets/us-gold-eagle-1oz-bullion", wikiLabel: "American Gold Eagle" }
];

export const sellItems: SellItem[] = [
  { id: "gold_jewelry_10k", label: "10K gold jewelry", metal: "gold", family: "scrap or resale jewelry", defaultPurity: 0.4167, stampExamples: ["10K", "417"], badges: ["common", "scrap-value basis", "stone caution"], firstCheck: "Look for 10K or 417 markings, then weigh the item without packaging.", valueBasis: "Gold content, weight, condition, and whether the piece has designer or resale value above melt.", bestPath: "Get at least two local quotes. Consider resale only if the style, brand, or condition suggests value above scrap.", avoid: "Do not accept an offer before you know gram weight and approximate melt value.", smartMove: "Ask the buyer what purity and weight they used to calculate the offer.", calculatorHint: "Estimated melt = gram weight × 0.4167 × gold spot per gram.", wikiPath: "/wiki/topics/melt-value-explained", wikiLabel: "Melt Value Explained" },
  { id: "gold_jewelry_14k", label: "14K gold jewelry", metal: "gold", family: "scrap or resale jewelry", defaultPurity: 0.5833, stampExamples: ["14K", "585"], badges: ["very common", "strong starter category", "quote before selling"], firstCheck: "Look for 14K or 585 markings and weigh the item in grams.", valueBasis: "Melt value is driven by gold content, but jewelry style, brand, and condition may add resale value.", bestPath: "Compare a coin shop, jeweler, or reputable gold buyer before taking a fast-cash offer.", avoid: "Do not value it by original retail price, and do not ignore stones or designer marks.", smartMove: "Photograph stamps and weigh pieces separately before getting quotes.", calculatorHint: "Estimated melt = gram weight × 0.5833 × gold spot per gram.", wikiPath: "/wiki/topics/dealer-buyback-spread", wikiLabel: "Dealer Buyback Spread" },
  { id: "gold_jewelry_18k", label: "18K gold jewelry", metal: "gold", family: "higher-purity jewelry", defaultPurity: 0.75, stampExamples: ["18K", "750"], badges: ["higher purity", "weigh carefully", "resale check"], firstCheck: "Look for 18K or 750 marks and check for designer signatures.", valueBasis: "Gold content is meaningful, but branded or well-made jewelry may sell above melt.", bestPath: "Compare scrap quotes with a resale or consignment path if the piece is wearable or branded.", avoid: "Do not rush to scrap a signed or high-quality piece.", smartMove: "Separate 18K pieces from lower-karat jewelry before getting quotes.", calculatorHint: "Estimated melt = gram weight × 0.75 × gold spot per gram.", wikiPath: "/wiki/topics/melt-value-explained", wikiLabel: "Melt Value Explained" },
  { id: "unknown_gold_item", label: "Unknown gold-colored item", metal: "gold", family: "unknown or untested item", defaultPurity: null, stampExamples: ["10K", "14K", "18K", "GP", "GF"], badges: ["test first", "plating risk", "do not assume"], firstCheck: "Look for stamps, magnet reaction, wear-through, and whether it may be plated or filled.", valueBasis: "The value depends on whether the item is solid gold, plated, filled, or base metal.", bestPath: "Have it tested before treating it as gold.", avoid: "Do not estimate value from color alone.", smartMove: "Use a reputable jeweler or coin shop for testing before selling.", calculatorHint: "No reliable melt estimate until metal and purity are confirmed.", wikiPath: "/wiki/topics/assay-and-authentication", wikiLabel: "Assay and Authentication" },
  { id: "sterling_jewelry", label: "Sterling silver jewelry", metal: "silver", family: "sterling jewelry", defaultPurity: 0.925, stampExamples: ["925", "Sterling"], badges: ["common", "lower value per gram", "style matters"], firstCheck: "Look for 925 or Sterling marks and check for designer or gemstone value.", valueBasis: "Silver melt value is usually modest, but design and brand can matter.", bestPath: "Consider resale before scrap if the item is wearable or signed.", avoid: "Do not expect gold-like payouts from sterling weight.", smartMove: "Group sterling by type and keep signed pieces separate.", calculatorHint: "Estimated melt = gram weight × 0.925 × silver spot per gram.", wikiPath: "/wiki/topics/melt-value-explained", wikiLabel: "Melt Value Explained" },
  { id: "sterling_flatware", label: "Sterling flatware", metal: "silver", family: "flatware and tableware", defaultPurity: 0.925, stampExamples: ["Sterling", "925"], badges: ["verify sterling", "pattern value", "not all silverware"], firstCheck: "Confirm it says Sterling, not stainless or silverplate.", valueBasis: "Sterling flatware is valued by silver weight and sometimes by pattern demand.", bestPath: "Check pattern resale before melting a complete or desirable set.", avoid: "Do not treat silverplate as sterling.", smartMove: "Separate knives and weighted handles from solid forks and spoons.", calculatorHint: "Estimated melt = usable sterling gram weight × 0.925 × silver spot per gram.", wikiPath: "/wiki/topics/dealer-buyback-spread", wikiLabel: "Dealer Buyback Spread" },
  { id: "weighted_sterling", label: "Weighted sterling item", metal: "silver", family: "weighted or filled sterling", defaultPurity: null, stampExamples: ["Weighted", "Sterling weighted"], badges: ["filler caution", "low silver yield", "test carefully"], firstCheck: "Look for weighted marks and remember much of the item may be filler.", valueBasis: "Only the sterling shell counts toward melt value; filler reduces real metal content.", bestPath: "Ask buyers how they account for filler before accepting an offer.", avoid: "Do not weigh the whole item and assume it is all sterling.", smartMove: "Get an explanation of estimated recoverable silver.", calculatorHint: "Needs more information because gross weight overstates silver content.", wikiPath: "/wiki/topics/assay-and-authentication", wikiLabel: "Assay and Authentication" },
  { id: "us90_silver_coins", label: "90% U.S. silver coins", metal: "silver", family: "pre-1965 U.S. circulating silver", defaultPurity: 0.9, stampExamples: ["1964 or earlier", "dimes", "quarters", "halves"], badges: ["constitutional silver", "divisible", "check dates"], firstCheck: "Sort by denomination and date. Check for better dates before selling as bulk silver.", valueBasis: "Mostly melt value and face-value multiples, unless a coin has collectible value.", bestPath: "Compare offers based on face value and silver spot.", avoid: "Do not clean coins or mix clad with silver.", smartMove: "Count face value by denomination before asking for quotes.", calculatorHint: "Common 90% silver is often priced as a multiple of face value.", wikiPath: "/wiki/assets/us-90-percent-silver-quarter", wikiLabel: "90% Silver Quarter" },
  { id: "silver_bullion_coin", label: "1 oz silver bullion coin", metal: "silver", family: "government bullion coin", defaultPurity: 0.999, stampExamples: ["1 oz fine silver", ".999"], badges: ["recognizable", "premium possible", "coin shop friendly"], firstCheck: "Identify the issuing mint and confirm weight and condition.", valueBasis: "Melt value plus any retail premium for recognizable sovereign coins.", bestPath: "Separate sovereign coins from generic rounds before getting quotes.", avoid: "Do not accept generic-round pricing for a premium coin without comparison.", smartMove: "Ask whether the offer includes a premium above melt.", calculatorHint: "Estimated melt = silver spot per troy ounce for a one-ounce coin.", wikiPath: "/wiki/assets/us-silver-eagle-1oz-bullion", wikiLabel: "American Silver Eagle" },
  { id: "silver_round_or_bar", label: "Silver round or bar", metal: "silver", family: "private mint bullion", defaultPurity: 0.999, stampExamples: [".999 fine silver", "1 troy oz", "10 oz"], badges: ["bullion", "premium varies", "brand matters"], firstCheck: "Confirm weight, purity, and refiner or mint name.", valueBasis: "Melt value plus a smaller premium depending on brand, size, and condition.", bestPath: "Compare price per ounce and buyback spread.", avoid: "Do not assume every private mint product gets the same premium.", smartMove: "Group matching rounds or bars together for cleaner quotes.", calculatorHint: "Estimated melt = fine troy ounces × silver spot.", wikiPath: "/wiki/silver-bars", wikiLabel: "Silver Bars Wiki" },
  { id: "gold_bullion_coin", label: "Gold bullion coin", metal: "gold", family: "government bullion coin", defaultPurity: 0.9999, stampExamples: ["1 oz fine gold", "Maple Leaf", "Buffalo", "Eagle"], badges: ["high value", "verify", "strong liquidity"], firstCheck: "Identify the coin, size, mint, and fine gold content.", valueBasis: "Fine gold content, spot price, and sovereign coin premium.", bestPath: "Compare dealer buyback and private-party value before selling.", avoid: "Do not mail high-value gold without a trusted process.", smartMove: "Check at least two quotes for one-ounce coins.", calculatorHint: "Estimated melt = fine troy ounces × gold spot.", wikiPath: "/wiki/assets/us-gold-eagle-1oz-bullion", wikiLabel: "American Gold Eagle" },
  { id: "gold_bar", label: "Gold bar", metal: "gold", family: "fine gold bullion", defaultPurity: 0.9999, stampExamples: ["999.9", ".9999", "assay"], badges: ["assay matters", "serial number", "verify"], firstCheck: "Check refiner, serial number, assay package, weight, and purity.", valueBasis: "Fine gold content and refiner recognition, with packaging and authenticity affecting spread.", bestPath: "Use a buyer who can verify bars professionally.", avoid: "Do not remove assay packaging unless necessary for testing.", smartMove: "Photograph the serial number and packaging before quotes.", calculatorHint: "Estimated melt = fine troy ounces × gold spot.", wikiPath: "/wiki/assets/generic-gold-bar-1oz", wikiLabel: "1 oz Gold Bar" },
  { id: "mixed_estate_lot", label: "Mixed estate or inherited lot", metal: "mixed", family: "mixed lot", defaultPurity: null, stampExamples: ["10K", "925", "Sterling", ".999"], badges: ["sort first", "do not rush", "possible outliers"], firstCheck: "Separate gold, sterling, coins, bars, costume jewelry, and unknown items before pricing.", valueBasis: "Different items need different value methods: melt, bullion premium, resale value, or authentication.", bestPath: "Inventory and photograph the lot before selling pieces individually or as a group.", avoid: "Do not let one buyer sweep the whole lot without explaining item-level values.", smartMove: "Create a simple list with stamps, weights, and photos.", calculatorHint: "Mixed lots need item-by-item review before melt estimates are reliable.", wikiPath: "/wiki/topics/assay-and-authentication", wikiLabel: "Assay and Authentication" }
];

export function formatUsd(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return "Needs more info";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: value < 100 ? 2 : 0 }).format(value);
}

export function getBudgetBand(amount: number) {
  if (amount < 50) return budgetBands[0];
  if (amount < 100) return budgetBands[1];
  if (amount < 250) return budgetBands[2];
  if (amount < 500) return budgetBands[3];
  if (amount < 1000) return budgetBands[4];
  if (amount < 2500) return budgetBands[5];
  return budgetBands[6];
}

function preferenceScore(card: MetalOption, preference: Preference) {
  if (preference === "gold") return card.metal === "gold" ? 20 : -8;
  if (preference === "silver") return card.metal === "silver" ? 20 : -8;
  if (preference === "coins") return card.format === "coin" ? 14 : -4;
  if (preference === "bars") return card.format === "bar" ? 14 : -4;
  if (preference === "divisible") return card.badges.some((badge) => badge.includes("divisible") || badge.includes("fractional")) ? 15 : 0;
  if (preference === "recognizable") return card.badges.some((badge) => badge.includes("recognizable") || badge.includes("liquid")) ? 15 : 0;
  if (preference === "lowerPremium") return card.badges.some((badge) => badge.includes("low premium") || badge.includes("efficient")) ? 15 : 0;
  return 0;
}

export function getMetalMatches(amount: number, preferences: Preference[]) {
  const band = getBudgetBand(amount);
  const defaultIds = new Set(band.defaultResultIds);
  const cards = metalOptions
    .map((card) => {
      let score = 0;
      if (defaultIds.has(card.id)) score += 50;
      if (card.primaryBudgetBands.includes(band.id)) score += 30;
      if (card.secondaryBudgetBands.includes(band.id)) score += 12;
      for (const preference of preferences) score += preferenceScore(card, preference);
      return { card, score };
    })
    .filter((item) => item.score > 10)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.card);

  return { band, cards };
}

export function getSellItem(id: string) {
  return sellItems.find((item) => item.id === id) ?? sellItems[0];
}

export function convertToGrams(weight: number, unit: WeightUnit) {
  if (!Number.isFinite(weight) || weight <= 0) return 0;
  if (unit === "ozt") return weight * TROY_OUNCE_TO_GRAMS;
  if (unit === "dwt") return weight * PENNYWEIGHT_TO_GRAMS;
  return weight;
}

export function estimateMeltValue(params: { metal: "gold" | "silver" | "mixed"; weight: number; unit: WeightUnit; purity: number | null; goldSpot: number; silverSpot: number }) {
  const { metal, weight, unit, purity, goldSpot, silverSpot } = params;
  if (metal === "mixed" || purity === null) return null;
  const grams = convertToGrams(weight, unit);
  if (!grams) return null;
  const spotPerGram = (metal === "gold" ? goldSpot : silverSpot) / TROY_OUNCE_TO_GRAMS;
  return grams * purity * spotPerGram;
}

export function formatPercent(value: number | null) {
  if (value === null || !Number.isFinite(value)) return "Unknown";
  return `${(value * 100).toFixed(value > 0.99 ? 2 : 1)}%`;
}

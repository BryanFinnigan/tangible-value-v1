import SellMatchTool from "@/components/SellMatchTool";

export const metadata = {
  title: "Sell Match | Tangible Value",
  description: "Identify what you are selling, estimate a value basis, and link to related precious-metals Wiki context.",
  alternates: { canonical: "/tools/sell-match" },
};

export default function SellMatchPage() {
  return <SellMatchTool />;
}

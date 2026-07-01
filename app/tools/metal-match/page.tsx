import MetalMatchTool from "@/components/MetalMatchTool";

export const metadata = {
  title: "Metal Match | Tangible Value",
  description: "Match a precious-metals budget to practical gold and silver formats with links into the Wiki.",
  alternates: { canonical: "/tools/metal-match" },
};

export default function MetalMatchPage() {
  return <MetalMatchTool />;
}

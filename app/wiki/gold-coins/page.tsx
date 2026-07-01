import WikiCategoryPage from "@/components/WikiCategoryPage";

export const metadata = {
  title: "Gold Coins Wiki | Tangible Value",
  description: "Reference pages for gold coins with specifications, melt value context, premiums, and resale notes.",
  alternates: { canonical: "/wiki/gold-coins" },
};

export default function Page() {
  return <WikiCategoryPage categoryPath="/wiki/gold-coins" />;
}

import WikiCategoryPage from "@/components/WikiCategoryPage";

export const metadata = {
  title: "Silver Coins Wiki | Tangible Value",
  description: "Reference pages for silver coins with specifications, melt value context, premiums, and resale notes.",
  alternates: { canonical: "/wiki/silver-coins" },
};

export default function Page() {
  return <WikiCategoryPage categoryPath="/wiki/silver-coins" />;
}

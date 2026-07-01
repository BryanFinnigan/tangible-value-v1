import WikiCategoryPage from "@/components/WikiCategoryPage";

export const metadata = {
  title: "Gold Bars Wiki | Tangible Value",
  description: "Reference pages for gold bars with specifications, melt value context, premiums, and resale notes.",
  alternates: { canonical: "/wiki/gold-bars" },
};

export default function Page() {
  return <WikiCategoryPage categoryPath="/wiki/gold-bars" />;
}

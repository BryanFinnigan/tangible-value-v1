import WikiCategoryPage from "@/components/WikiCategoryPage";

export const metadata = {
  title: "Silver Bars Wiki | Tangible Value",
  description: "Reference pages for silver bars with specifications, melt value context, premiums, and resale notes.",
  alternates: { canonical: "/wiki/silver-bars" },
};

export default function Page() {
  return <WikiCategoryPage categoryPath="/wiki/silver-bars" />;
}

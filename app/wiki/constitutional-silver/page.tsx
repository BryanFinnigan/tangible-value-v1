import WikiCategoryPage from "@/components/WikiCategoryPage";

export const metadata = {
  title: "Constitutional Silver Wiki | Tangible Value",
  description: "Reference pages for constitutional silver with specifications, melt value context, premiums, and resale notes.",
  alternates: { canonical: "/wiki/constitutional-silver" },
};

export default function Page() {
  return <WikiCategoryPage categoryPath="/wiki/constitutional-silver" />;
}

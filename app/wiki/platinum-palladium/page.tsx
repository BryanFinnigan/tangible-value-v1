import WikiCategoryPage from "@/components/WikiCategoryPage";

export const metadata = {
  title: "Platinum & Palladium Wiki | Tangible Value",
  description: "Reference pages for platinum and palladium with specifications, melt value context, premiums, and resale notes.",
  alternates: { canonical: "/wiki/platinum-palladium" },
};

export default function Page() {
  return <WikiCategoryPage categoryPath="/wiki/platinum-palladium" />;
}

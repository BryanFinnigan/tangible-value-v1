import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://tangibleknowledge.com"),
  title: {
    default: "Tangible Value | Knowledge, Value, Confidence",
    template: "%s | Tangible Value",
  },
  description:
    "Education-first guides, buying resources, tools, and source recommendations for gold, silver, coins, bullion, jewelry, antiques, and tangible assets.",
  openGraph: {
    title: "Tangible Value",
    description:
      "Empowerment through education for precious metals, coins, bullion, jewelry, antiques, and tangible assets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

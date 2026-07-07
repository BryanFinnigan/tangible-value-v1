import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Tangible Knowledge",
  description:
    "Education-first guides for gold, silver, coins, jewelry, and tangible assets.",
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
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://rootwork.energy"),
  title: "Rootwork Energy — Operator-led. Built to recover.",
  description:
    "Rootwork Energy is an operator-led independent power producer that acquires underperforming, interconnection-capable assets, recovers their performance, and holds them for the long term.",
  openGraph: {
    title: "Rootwork Energy",
    description:
      "Operator-led. Built to recover. An independent power producer that recovers underperforming, interconnection-capable assets and holds them for the long term.",
    url: "https://rootwork.energy",
    siteName: "Rootwork Energy",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#2A2A26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

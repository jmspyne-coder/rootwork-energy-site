// Self-hosted fonts (no external requests) — Source Serif 4 (display) + Inter (body)
import "@fontsource/source-serif-4/latin-400.css";
import "@fontsource/source-serif-4/latin-600.css";
import "@fontsource/source-serif-4/latin-400-italic.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "./globals.css";
import Script from "next/script";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { GA_ID } from "./site-config";

export const metadata = {
  metadataBase: new URL("https://rootwork.energy"),
  title: "Rootwork Energy · Operator-Led. Intelligence-Driven.",
  description:
    "Rootwork Energy builds independent performance intelligence on the utility-scale storage fleet, identifying assets underdelivering relative to their market. We acquire them at distressed valuations, repower them with field-proven operations, and hold long term as an IPP.",
  openGraph: {
    title: "Rootwork Energy",
    description:
      "Independent performance intelligence on the utility-scale storage fleet. Acquire underperforming assets, repower them, hold long term as an IPP.",
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
      <head>
        {/* Kick off the hero background download early (it's a CSS bg image) */}
        <link
          rel="preload"
          as="image"
          href="/img/hero-bess-row.webp"
          fetchPriority="high"
        />
      </head>
      <body>
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
        <Nav />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}

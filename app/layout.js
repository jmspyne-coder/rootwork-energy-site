// Self-hosted fonts (no external requests)
import "@fontsource/fraunces/latin-400.css";
import "@fontsource/fraunces/latin-500.css";
import "@fontsource/fraunces/latin-600.css";
import "@fontsource/fraunces/latin-400-italic.css";
import "@fontsource/hanken-grotesk/latin-400.css";
import "@fontsource/hanken-grotesk/latin-500.css";
import "@fontsource/hanken-grotesk/latin-600.css";
import "@fontsource/hanken-grotesk/latin-700.css";
import "./globals.css";
import Script from "next/script";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Footer from "./components/Footer";
import { GA_ID } from "./site-config";

export const metadata = {
  metadataBase: new URL("https://rootwork.energy"),
  title: {
    default: "Rootwork Energy · Operator-led. Built to recover.",
    template: "%s · Rootwork Energy",
  },
  description:
    "Rootwork Energy is an operator-led independent power producer that acquires underperforming utility-scale storage and generation at distressed valuations, repowers it, and holds it long term.",
  openGraph: {
    title: "Rootwork Energy",
    description:
      "Operator-led. Built to recover. We acquire underperforming energy storage and generation assets, repower them, and hold long term as an independent power producer.",
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
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('rw-js')",
          }}
        />
        {/* Branded duotone filter for body imagery */}
        <svg
          aria-hidden="true"
          focusable="false"
          width="0"
          height="0"
          style={{ position: "absolute", width: 0, height: 0 }}
        >
          <filter id="rw-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0"
            />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.12 0.93" />
              <feFuncG type="table" tableValues="0.14 0.92" />
              <feFuncB type="table" tableValues="0.11 0.86" />
            </feComponentTransfer>
          </filter>
        </svg>

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

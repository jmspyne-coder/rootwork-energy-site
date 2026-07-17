// Self-hosted fonts (no external requests)
import "@fontsource/source-serif-4/latin-400.css";
import "@fontsource/source-serif-4/latin-500.css";
import "@fontsource/source-serif-4/latin-600.css";
import "@fontsource/source-serif-4/latin-400-italic.css";
import "@fontsource/source-serif-4/latin-500-italic.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "./globals.css";
import Script from "next/script";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Footer from "./components/Footer";
import { GA_ID } from "./site-config";

export const metadata = {
  metadataBase: new URL("https://rootwork.energy"),
  title: {
    default: "Rootwork Energy | Operator-led. Built to recover.",
    template: "%s | Rootwork Energy",
  },
  description:
    "Rootwork Energy acquires underperforming, interconnection-capable energy assets, restores them through proprietary repower execution, and holds them for the demand era AI is creating.",
  openGraph: {
    title: "Rootwork Energy",
    description:
      "Operator-led. Built to recover. Rootwork acquires underperforming, interconnection-capable energy assets, restores them, and holds them for the demand era AI is creating.",
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

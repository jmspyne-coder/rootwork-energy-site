import Image from "next/image";
import Link from "next/link";
import { EMAIL, CAPABILITIES } from "./site-config";

export default function Home() {
  const teaser = CAPABILITIES.slice(0, 6);
  return (
    <main>
      {/* Hero */}
      <section className="band-charcoal hero">
        <div className="container">
          <Image
            className="hero__wordmark reveal d1"
            src="/wordmark-light.png"
            alt="Rootwork Energy"
            width={1009}
            height={246}
            priority
          />
          <hr className="keyline reveal d2" aria-hidden="true" />
          <h1 className="hero__tagline reveal d2">
            Operator-led. Built to recover.
          </h1>
          <p className="hero__thesis reveal d3">
            An operator-led independent power producer that acquires
            underperforming, interconnection-capable assets, recovers their
            performance, and holds them for the long term.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="band-bone section">
        <div className="container split">
          <div className="split__text">
            <p className="eyebrow on-light">What we do</p>
            <p className="lede">
              Rootwork is an operator-led independent power producer. We identify
              interconnection-capable assets that are underperforming in CAISO
              and ERCOT, acquire them at distressed valuations, and restore their
              output through hands-on repower execution — then operate and hold
              them for the long term.
            </p>
            <Link href="/capabilities" className="textlink on-light">
              See what we do →
            </Link>
          </div>
          <div className="split__media">
            <Image
              src="/photos/bess-array.jpg"
              alt="Rows of utility-scale battery energy storage enclosures on a gravel site."
              width={640}
              height={480}
              className="photo"
            />
          </div>
        </div>
      </section>

      {/* Capabilities teaser */}
      <section className="band-charcoal section">
        <div className="container">
          <p className="eyebrow on-dark">Across the asset lifecycle</p>
          <h2 className="section-title">
            Operator-led means we do the work ourselves.
          </h2>
          <ul className="teaser-grid">
            {teaser.map((c) => (
              <li key={c.title} className="teaser-item">
                {c.title}
              </li>
            ))}
          </ul>
          <Link href="/capabilities" className="textlink on-dark">
            All capabilities →
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="band-bone section">
        <div className="container">
          <p className="eyebrow on-light">Get in touch</p>
          <p className="lede" style={{ marginBottom: "1.5rem" }}>
            For asset, partnership, and investment inquiries.
          </p>
          <a className="contact__email contact__email--light" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}

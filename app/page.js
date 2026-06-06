import Image from "next/image";
import Link from "next/link";
import { EMAIL, CAPABILITIES } from "./site-config";

const MODEL = [
  { n: "01", t: "Acquire", b: "Underperforming, interconnection-capable assets at distressed valuations." },
  { n: "02", t: "Recover", b: "Hands-on repower execution to restore output and availability." },
  { n: "03", t: "Operate", b: "Disciplined operations and active performance management." },
  { n: "04", t: "Hold", b: "Long-term ownership — not a quick resale." },
];

export default function Home() {
  const teaser = CAPABILITIES.slice(0, 6);
  return (
    <main>
      {/* Hero */}
      <section
        className="hero hero--photo"
        style={{ backgroundImage: "url(/photos/bess-array.jpg)" }}
      >
        <div className="container">
          <p className="overline on-dark reveal d1">Independent Power Producer</p>
          <h1 className="hero__tagline reveal d2">Operator-led. Built to recover.</h1>
          <p className="hero__thesis reveal d3">
            We acquire underperforming, interconnection-capable assets, recover
            their performance through hands-on execution, and hold them for the
            long term.
          </p>
        </div>
      </section>

      {/* Model */}
      <section className="model section">
        <div className="container">
          <p className="eyebrow on-dark">How we create value</p>
          <div className="model-grid reveal-up">
            {MODEL.map((m) => (
              <div key={m.n} className="model-item">
                <span className="model-num">{m.n}</span>
                <h3 className="model-title">{m.t}</h3>
                <p className="model-blurb">{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="band-bone section">
        <div className="container split reveal-up">
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
              src="/photos/battery-modules.jpg"
              alt="Battery module rack with cooling fans inside a storage enclosure."
              width={640}
              height={431}
              className="photo"
            />
          </div>
        </div>
      </section>

      {/* Capabilities teaser */}
      <section className="band-charcoal section">
        <div className="container reveal-up">
          <p className="eyebrow on-dark">Across the asset lifecycle</p>
          <h2 className="section-title">Operator-led means we do the work ourselves.</h2>
          <ul className="teaser-grid">
            {teaser.map((c) => (
              <li key={c.title} className="teaser-item">{c.title}</li>
            ))}
          </ul>
          <Link href="/capabilities" className="textlink on-dark">All capabilities →</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="band-bone section">
        <div className="container reveal-up">
          <p className="eyebrow on-light">Get in touch</p>
          <p className="lede" style={{ marginBottom: "1.6rem" }}>
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

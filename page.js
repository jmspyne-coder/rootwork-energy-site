import Image from "next/image";
import Link from "next/link";
import { EMAIL, CAPABILITIES } from "./site-config";

const MODEL = [
  { n: "01", t: "Commission", b: "Systems brought online and into commercial service: testing, integration, clean handover." },
  { n: "02", t: "Recover", b: "Hands-on recovery to restore output and availability on systems running below their potential." },
  { n: "03", t: "Operate", b: "Disciplined operations and active performance management, season over season." },
  { n: "04", t: "Control", b: "Controls and energy management so assets dispatch reliably and deliver what they are contracted to deliver." },
];

export default function Home() {
  const teaser = CAPABILITIES.slice(0, 6);
  return (
    <main>
      {/* Hero */}
      <section className="hero hero--photo">
        <div
          className="hero__media"
          style={{ backgroundImage: "url(/photos/fleet-winter.jpg)" }}
        />
        <div className="container">
          <p className="overline on-dark reveal d1">Commissioning · Operations · Recovery</p>
          <h1 className="hero__tagline reveal d2">
            Operator-led. Built to <em>recover</em>.
          </h1>
          <p className="hero__thesis reveal d3">
            We commission, operate, and recover utility-scale storage and
            renewables. The hands-on execution that decides whether an asset
            delivers what its model promised.
          </p>
          <div className="hero-meta reveal d4">
            <div className="hero-meta__item">
              <span className="hero-meta__label">Focus</span>
              <span className="hero-meta__value">Utility-scale storage &amp; renewables</span>
            </div>
            <div className="hero-meta__item">
              <span className="hero-meta__label">Markets</span>
              <span className="hero-meta__value">CAISO + ERCOT</span>
            </div>
            <div className="hero-meta__item">
              <span className="hero-meta__label">Scope</span>
              <span className="hero-meta__value">Commission · Operate · Recover</span>
            </div>
          </div>
        </div>
      </section>

      {/* Model */}
      <section className="model section">
        <div className="container">
          <p className="eyebrow on-dark">How we operate</p>
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
        <div className="container">
          <article className="cap-feature cap-feature--reverse reveal-up">
            <div className="cap-feature__media">
              <Image
                src="/photos/battery-modules.jpg"
                alt="Battery module rack with cooling fans inside a storage enclosure."
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="cap-img"
              />
            </div>
            <div className="cap-feature__body">
              <p className="eyebrow on-light">What we do</p>
              <p className="lede">
                Rootwork is an operator-led company built around field execution. We
                commission, operate, and recover utility-scale storage and renewables
                across CAISO and ERCOT, for the owners and developers who need the
                work done right. We own and operate assets of our own as well, which
                is why we run yours the same way: managed to the field reality, not
                the model.
              </p>
              <Link href="/services" className="textlink on-light">
                See what we do →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Capabilities teaser */}
      <section className="band-charcoal section">
        <div className="container reveal-up">
          <p className="eyebrow on-dark">Across the asset lifecycle</p>
          <h2 className="section-title">Operator-led means we do the work <em>ourselves</em>.</h2>
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
            For owners and developers who need execution in the field, and for
            partnership and investment inquiries.
          </p>
          <a className="contact__email contact__email--light" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}

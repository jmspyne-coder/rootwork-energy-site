import Image from "next/image";

const EMAIL = "james@rootwork.energy";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      {/* ---------- Hero ---------- */}
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

      {/* ---------- What we do ---------- */}
      <section className="band-bone section">
        <div className="container">
          <p className="eyebrow on-light">What we do</p>
          <p className="lede">
            Rootwork is an operator-led independent power producer. We identify
            interconnection-capable assets that are underperforming in CAISO and
            ERCOT, acquire them at distressed valuations, and restore their
            output through hands-on repower execution — then operate and hold
            them for the long term.
          </p>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="band-charcoal section">
        <div className="container">
          <p className="eyebrow on-dark">Get in touch</p>
          <p className="contact__intro">
            For asset, partnership, and investment inquiries:
          </p>
          <a className="contact__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container footer__inner">
          <Image
            className="footer__wordmark"
            src="/wordmark-light.png"
            alt="Rootwork Energy"
            width={1009}
            height={246}
          />
          <div className="footer__right">
            <a className="footer__email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <span className="footer__copy">
              © {year} Rootwork Energy LLC. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

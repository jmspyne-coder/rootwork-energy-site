import Link from "next/link";
import Image from "next/image";
import { EMAIL } from "./site-config";

const PILLARS = [
  { n: "01", t: "Operator-led origination", b: "We identify distressed assets before they hit the market using proprietary performance diagnostics built from field experience across 2.5 GW of operating assets." },
  { n: "02", t: "Recovery, not speculation", b: "Every acquisition starts with an existing interconnection and a known performance gap. We don't build from scratch. We buy what's broken and fix what others couldn't." },
  { n: "03", t: "Long-term ownership", b: "We hold and operate. Revenue compounds from day one through existing power purchase agreements and merchant exposure, amplified by the performance recovery we deliver." },
];

export default function Home() {
  return (
    <main>
      {/* HERO — full-bleed BESS background */}
      <section className="rw-hero--photo">
        <Image
          src="/photos/bess-row.jpg"
          alt="Rows of utility-scale battery storage enclosures receding to the horizon."
          fill
          priority
          sizes="100vw"
          className="rw-hero__bg"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className="rw-hero__scrim" />
        <div className="container rw-hero__content">
          <p className="rw-kicker rw-reveal rw-d1">Acquire · Repower · Operate</p>
          <h1 className="rw-display rw-reveal rw-d2">
            Operator‑led.<br />Built to <em>recover</em>.
          </h1>
          <p className="rw-hero__thesis rw-reveal rw-d3">
            Rootwork Energy acquires underperforming battery storage and power
            generation assets at distressed valuations, repowers them through
            proprietary operational diagnostics, and holds them long term as an
            independent power producer. We don't speculate on sites or technologies. We
            buy broken assets with existing interconnections and fix them, because we
            have spent a decade doing exactly that for other owners.
          </p>
          <div className="rw-actions rw-reveal rw-d4">
            <Link className="rw-btn" href="/investors">For investors</Link>
            <Link className="rw-btn rw-btn--ghost" href="/about">Learn more</Link>
          </div>
        </div>
      </section>

      {/* THESIS + dispatch signature */}
      <section className="rw-statement">
        <div className="container rw-dispatch-row">
          <div>
            <p className="rw-statement__eyebrow rw-reveal">The thesis</p>
            <p className="rw-statement__text rw-reveal rw-d1">
              The gap between the proforma and the megawatt is <span className="hl">execution</span>.
            </p>
            <p className="rw-statement__sub rw-reveal rw-d2">
              Assets deliver their model only when someone commissions the system
              correctly, holds availability through every season, and chases the
              warranty scope no one else will. That gap is where value is lost, and it
              is exactly where we buy. The distress others cannot see is the distress we
              acquire and recover.
            </p>
          </div>
          <aside className="rw-hero__data rw-reveal rw-d2">
            <div className="rw-dispatch">
              <svg viewBox="0 0 520 360" role="img" aria-label="Stated dispatch versus actual field dispatch">
                <defs>
                  <linearGradient id="rwGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#88B06C" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#88B06C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="rw-dispatch__model" d="M16 196 L504 120" />
                <path className="rw-dispatch__fill" d="M16 196 C70 184 104 188 150 214 C196 240 220 300 266 296 C312 292 330 232 380 244 C430 256 462 196 504 188 L504 340 L16 340 Z" />
                <path className="rw-dispatch__actual" d="M16 196 C70 184 104 188 150 214 C196 240 220 300 266 296 C312 292 330 232 380 244 C430 256 462 196 504 188" />
                <circle className="rw-dispatch__dot" cx="266" cy="296" r="4" style={{ animationDelay: "2.4s" }} />
                <circle className="rw-dispatch__dot" cx="504" cy="188" r="4" style={{ animationDelay: "2.9s" }} />
                <text className="rw-dispatch__label" x="430" y="108" fill="rgba(236,233,225,0.5)">MODEL</text>
                <text className="rw-dispatch__label" x="120" y="332" fill="#88B06C">FIELD</text>
              </svg>
            </div>
            <dl className="rw-readouts">
              <div><dt>Markets</dt><dd>CAISO · ERCOT</dd></div>
              <div><dt>Field</dt><dd>10+ years</dd></div>
              <div><dt>Model</dt><dd>Acquire · Hold</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* HOW OPERATOR-LED OWNERSHIP COMPOUNDS */}
      <section className="rw-do">
        <div className="container">
          <div className="rw-do__head rw-reveal">
            <h2 className="rw-do__title">Acquire, repower, <em>hold</em>.</h2>
            <Link href="/investors" className="textlink on-light">For investors →</Link>
          </div>
          <div className="rw-grid3 rw-reveal rw-d1">
            {PILLARS.map((p) => (
              <article key={p.n} className="rw-pill">
                <span className="rw-pill__n">{p.n}</span>
                <h3 className="rw-pill__t">{p.t}</h3>
                <p className="rw-pill__b">{p.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE LAYER: how the operating model is instrumented */}
      <section className="rw-do">
        <div className="container">
          <div className="rw-do__head rw-reveal">
            <h2 className="rw-do__title">How we see what others <em>miss</em>.</h2>
            <Link href="/capabilities" className="textlink on-light">The tools we built →</Link>
          </div>
          <p className="lede rw-reveal rw-d1" style={{ maxWidth: "64ch", marginBottom: "3.2rem" }}>
            A small team runs at the scale of a large one because the work is
            instrumented. We continuously read public signal, fleet records, market
            prices, dispatch patterns, and regulatory filings, and pair it with a decade
            of field knowledge made queryable: what goes wrong on a site, why an asset
            bleeds output, and what the numbers mean in context. It is an AI-native way
            of operating, and it is how we find distress before its owner does.
          </p>
          <div className="cap-iconlist rw-reveal rw-d2">
            <div className="cap-cell">
              <span className="cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 15 L7 9 L11 13 L16 5 L22 12" />
                  <circle cx="7" cy="9" r="1" /><circle cx="16" cy="5" r="1" />
                  <path d="M2 20 H22" opacity="0.4" />
                </svg>
              </span>
              <span className="cap-num">01</span>
              <h3 className="cap-title cap-title--sm">Public signal, continuously read</h3>
              <p className="cap-blurb">Fleet records, ISO market prices, dispatch patterns, and regulatory filings, ingested and analyzed on a schedule, not scraped once for a slide.</p>
            </div>
            <div className="cap-cell">
              <span className="cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 L21 8 L12 13 L3 8 Z" />
                  <path d="M3 12 L12 17 L21 12" opacity="0.6" />
                  <path d="M3 16 L12 21 L21 16" opacity="0.3" />
                </svg>
              </span>
              <span className="cap-num">02</span>
              <h3 className="cap-title cap-title--sm">Field knowledge, made queryable</h3>
              <p className="cap-blurb">A decade of commissioning and operations, structured into something the system can search. Not a log of readings. The knowledge of what the readings mean.</p>
            </div>
            <div className="cap-cell">
              <span className="cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="7" r="2.2" /><circle cx="12" cy="18" r="2.2" />
                  <path d="M8 7 L16 8 M7 8 L11 16 M17 9 L13 16" opacity="0.7" />
                </svg>
              </span>
              <span className="cap-num">03</span>
              <h3 className="cap-title cap-title--sm">Tools that compound</h3>
              <p className="cap-blurb">A distress screen that sources acquisitions, a cost engine that prices a build in seconds, an EMS built from field reality. Each one sharper with every use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rw-cta">
        <div className="container">
          <div className="rw-cta__row rw-reveal">
            <h2 className="rw-cta__title">Talk to an operator.</h2>
            <a className="rw-cta__mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

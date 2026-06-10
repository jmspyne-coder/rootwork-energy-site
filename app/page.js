import Link from "next/link";
import { EMAIL } from "./site-config";

const DO = [
  { t: "Commissioning & energization", b: "Systems brought online and into commercial service: testing, integration, and a clean handover." },
  { t: "Operations & maintenance", b: "Preventive and corrective maintenance with active performance management to hold availability through every season." },
  { t: "Controls & energy management", b: "Controls and EMS configured and optimized so assets dispatch reliably and deliver what they are contracted to deliver." },
  { t: "Performance recovery", b: "Diagnose and restore output on systems running below their potential, including assets others have written off." },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="rw-hero">
        <div className="rw-hero__grid container">
          <div className="rw-hero__lead">
            <p className="rw-kicker rw-reveal rw-d1">Commissioning · Operations · Recovery</p>
            <h1 className="rw-display rw-reveal rw-d2">
              Operator-led.<br />Built to <em>recover</em>.
            </h1>
            <p className="rw-hero__thesis rw-reveal rw-d3">
              The distance between a model and a megawatt is execution. We commission,
              operate, and recover utility-scale storage and renewables across CAISO
              and ERCOT, and run them like the field reality is the only thing that
              matters.
            </p>
            <div className="rw-actions rw-reveal rw-d4">
              <Link className="rw-btn" href="/services">What we do</Link>
              <Link className="rw-btn rw-btn--ghost" href="/why-rootwork">Why Rootwork</Link>
            </div>
          </div>

          <aside className="rw-hero__data rw-reveal rw-d4">
            <div className="rw-dispatch">
              <svg viewBox="0 0 520 360" role="img" aria-label="Stated dispatch versus actual field dispatch">
                <defs>
                  <linearGradient id="rwGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#88B06C" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#88B06C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* model (proforma) line */}
                <path className="rw-dispatch__model" d="M16 196 L504 120" />
                {/* fill under actual */}
                <path className="rw-dispatch__fill" d="M16 196 C70 184 104 188 150 214 C196 240 220 300 266 296 C312 292 330 232 380 244 C430 256 462 196 504 188 L504 340 L16 340 Z" />
                {/* actual field dispatch */}
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
              <div><dt>Scope</dt><dd>Full lifecycle</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="rw-statement">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal">The thesis</p>
          <p className="rw-statement__text rw-reveal rw-d1">
            The gap between the proforma and the megawatt is <span className="hl">execution</span>.
          </p>
          <p className="rw-statement__sub rw-reveal rw-d2">
            Models promise output. Assets deliver it only when someone commissions the
            system correctly, holds availability through every season, and chases the
            warranty scope no one else will. That work is what we do.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="rw-do">
        <div className="container">
          <div className="rw-do__head rw-reveal">
            <h2 className="rw-do__title">What operator-led <em>looks like</em>.</h2>
            <Link href="/services" className="textlink on-light">All services →</Link>
          </div>
          <div className="rw-grid2 rw-reveal rw-d1">
            {DO.map((c) => (
              <article key={c.t} className="rw-cell">
                <span className="rw-cell__tick" />
                <h3 className="rw-cell__t">{c.t}</h3>
                <p className="rw-cell__b">{c.b}</p>
              </article>
            ))}
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

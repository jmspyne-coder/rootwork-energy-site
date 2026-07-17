import Link from "next/link";
import Image from "next/image";
import { STATS } from "./site-config";

const MODEL = [
  {
    title: "Screen",
    body: "Proprietary analytics surface assets whose performance gap the market has not priced.",
  },
  {
    title: "Acquire",
    body: "Distressed entry on interconnection-capable assets, with queue position as the embedded option.",
  },
  {
    title: "Repower",
    body: "Proprietary repower execution restores delivered performance and revenue capture.",
  },
  {
    title: "Operate & Hold",
    body: "Long-term ownership by the operators who fixed it, compounding the intelligence with every asset.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO — dark, full-bleed photo, Ken Burns */}
      <section className="hero">
        <Image
          src="/photos/bess-row.jpg"
          alt="Rows of utility-scale battery storage enclosures receding to the horizon."
          fill
          priority
          sizes="100vw"
          className="hero__bg"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <p className="kicker rw-reveal rw-d1">Operator-led. Built to recover.</p>
          <h1 className="display rw-reveal rw-d2">
            The grid is short on power. The fleet built to supply it is
            <em> underperforming</em>.
          </h1>
          <p className="hero-sub rw-reveal rw-d3">
            Rootwork Energy acquires underperforming, interconnection-capable
            energy assets, restores them through proprietary repower execution,
            and holds them for the demand era AI is creating.
          </p>
          <div className="actions rw-reveal rw-d4">
            <Link className="btn" href="/approach">
              Read the thesis
            </Link>
            <Link className="btn btn--ghost" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="telemetry" aria-hidden="true">
          <div className="container">
            <svg viewBox="0 0 1200 150" preserveAspectRatio="none" style={{ height: "clamp(80px, 12vh, 150px)" }}>
              <path
                className="t-bleed"
                d="M0,34 L1200,34 L1200,34 C1050,34 980,34 940,34 C860,34 800,96 700,104 C600,112 520,88 430,72 C340,56 240,40 120,35 C80,34 40,34 0,34 Z"
              />
              <line className="t-obligated" x1="0" y1="34" x2="1200" y2="34" />
              <path
                className="t-delivered"
                d="M0,34 C40,34 80,34 120,35 C240,40 340,56 430,72 C520,88 600,112 700,104 C800,96 860,34 940,34 C980,34 1050,34 1200,34"
              />
              <circle className="t-dot" cx="940" cy="34" r="3" />
              <text className="t-label" x="0" y="22">OBLIGATED</text>
              <text className="t-label" x="560" y="134">DELIVERED</text>
              <text className="t-label t-label--green" x="920" y="22">REPOWERED</text>
            </svg>
          </div>
        </div>
      </section>

      {/* BAND 1 — Why now (light, editorial two-column) */}
      <section className="band band--light">
        <div className="container duo">
          <div>
            <p className="kicker on-light rw-reveal">Why now</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              AI changed the demand curve.
            </h2>
          </div>
          <div className="duo__body">
            <p className="body-copy rw-reveal rw-d2">
              Data-center load growth is the largest new source of electricity
              demand the US grid has seen in decades, and interconnection
              queues stretch years. New capacity cannot be built fast enough.
            </p>
            <p className="pull rw-reveal rw-d2">
              The fastest megawatt to market is the one already connected and
              underperforming.
            </p>
            <p className="body-copy rw-reveal rw-d2">
              Queue position is a finite asset that cannot be manufactured, and
              every underperforming plant that holds one is future capacity
              hiding in plain sight.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTOBAND — full-bleed statement */}
      <section className="photoband">
        <Image
          src="/photos/substation-gis.jpg"
          alt="High-voltage circuit breaker with radiating bushings at a grid interconnection."
          fill
          sizes="100vw"
          className="photoband__img"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="photoband__scrim" />
        <div className="container photoband__inner">
          <p className="photoband__t rw-reveal">
            Queue position is a finite asset that cannot be manufactured.
          </p>
        </div>
      </section>

      {/* BAND 2 — The edge (dark) */}
      <section className="band band--dark">
        <div className="container">
          <p className="kicker rw-reveal">The edge</p>
          <h2 className="section-title rw-reveal rw-d1">
            We find the bleed before the market prices it.
          </h2>
          <p className="body-copy rw-reveal rw-d2">
            Storage assets rarely fail outright. They bleed: chemistry,
            inverters, software, dispatch, and compliance failures compound
            until the drag defines the asset&rsquo;s economics, often before the
            owner sees it clearly. Rootwork built a proprietary screening
            platform that measures true delivered performance across the
            operating fleet and ranks assets by recoverable value. That is
            where distressed entry prices come from.
          </p>
          <div className="stats rw-reveal rw-d2">
            {STATS.map((s) => (
              <div key={s.value} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="stats-note rw-reveal rw-d3">Directional</p>
        </div>
      </section>

      {/* BAND 3 — The model (light) */}
      <section className="band band--light">
        <div className="container">
          <p className="kicker on-light rw-reveal">The model</p>
          <h2 className="section-title on-light rw-reveal rw-d1">
            Screen. Acquire. Repower. Operate &amp; Hold.
          </h2>
          <div className="ledger rw-reveal rw-d2">
            {MODEL.map((m, i) => (
              <article key={m.title} className="ledger__row">
                <span className="ledger__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ledger__title">{m.title}</h3>
                <p className="ledger__body">{m.body}</p>
              </article>
            ))}
          </div>
          <Link href="/approach" className="textlink on-light">
            Read the thesis →
          </Link>
        </div>
      </section>

      {/* BAND 4 — Credibility (dark closer) */}
      <section className="band band--deep">
        <div className="container split">
          <div>
            <p className="kicker rw-reveal">Credibility</p>
            <h2 className="section-title rw-reveal rw-d1">
              Built by operators, not spreadsheets.
            </h2>
            <p className="body-copy rw-reveal rw-d2">
              Rootwork is led by James Payne, with more than a decade of
              field-to-leadership experience across roughly 2.5 GW of
              utility-scale storage and renewables in the US and Canada,
              spanning commissioning, operations, and O&amp;M. Understanding
              what makes assets fail is scar-tissue knowledge. No amount of
              capital replicates it on a fundraising timeline.
            </p>
            <Link href="/about" className="textlink">
              About Rootwork →
            </Link>
          </div>
          <div className="split__media rw-reveal rw-d2" style={{ aspectRatio: "16/10" }}>
            <Image
              src="/photos/commissioning-field.jpg"
              alt="Field commissioning work at a utility-scale substation."
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

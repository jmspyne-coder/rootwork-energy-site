import Link from "next/link";
import Image from "next/image";
import { STATS } from "../site-config";

export const metadata = {
  title: "Intelligence Platform",
  description:
    "A proprietary data platform covering the US storage fleet. It measures delivered performance rather than reported availability, and ranks underperforming, interconnection-capable assets by recoverable value.",
};

export default function Intelligence() {
  return (
    <main>
      {/* HERO */}
      <section className="hero phero">
        <Image
          src="/photos/controls-board.jpg"
          alt="Battery management control board wired inside an equipment enclosure."
          fill
          priority
          sizes="100vw"
          className="hero__bg"
          style={{ objectFit: "cover" }}
        />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <p className="kicker rw-reveal rw-d1">The platform</p>
          <h1 className="display rw-reveal rw-d2">
            We measure what the fleet actually <em>delivers</em>.
          </h1>
          <p className="hero-sub rw-reveal rw-d3" style={{ marginBottom: 0 }}>
            A proprietary intelligence platform built to see the difference
            between an asset that reports available and an asset that performs.
          </p>
        </div>
      </section>

      {/* SECTION 1 — what it is (light) */}
      <section className="band band--light">
        <div className="container">
          <p className="kicker on-light rw-reveal">What it is</p>
          <h2 className="section-title on-light rw-reveal rw-d1">
            Built on the whole fleet, not the sales pitch.
          </h2>
          <p className="body-copy rw-reveal rw-d2">
            Rootwork&rsquo;s platform is a proprietary data system built on
            public, market, and operating data covering the US storage fleet.
            Where standard reporting stops at whether an asset says it is
            available, the platform measures delivered performance: what each
            asset actually did when the market called on it.
          </p>
        </div>
      </section>

      {/* SECTION 2 — the insight (dark statement) */}
      <section className="band band--dark">
        <div className="container">
          <p className="kicker rw-reveal">The insight</p>
          <h2 className="section-title rw-reveal rw-d1" style={{ maxWidth: "26ch" }}>
            Availability is not being online. It is being online with charge at
            the moment of <em>dispatch</em>.
          </h2>
          <p className="body-copy rw-reveal rw-d2">
            An asset mismanaged for state of charge fails its obligation as
            surely as one that is offline, and standard availability metrics
            miss it entirely. The plant looks healthy on every report its owner
            reads, while the revenue it was built to capture goes uncaptured.
          </p>
        </div>
      </section>

      {/* SECTION 3 — what it produces (light) */}
      <section className="band band--light">
        <div className="container split">
          <div>
            <p className="kicker on-light rw-reveal">What it produces</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              A ranked national screen of recoverable value.
            </h2>
            <p className="body-copy rw-reveal rw-d2">
              The platform produces a ranked national screen of
              underperforming, interconnection-capable assets and the
              recoverable value in each. It is an origination engine, not a
              reporting tool: it tells Rootwork what to buy, what it is worth,
              and what recovery is available.
            </p>
            <p className="body-copy rw-reveal rw-d2">
              The same intelligence compounds with every asset operated. Each
              plant Rootwork runs feeds what the platform knows, and each
              acquisition sharpens the screen for the next one.
            </p>
          </div>
          <div className="split__media rw-reveal rw-d2">
            <Image
              src="/photos/controls-pcb.jpg"
              alt="Detail of a printed circuit board from an energy storage control system."
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — directional proof + closer (dark) */}
      <section className="band band--deep">
        <div className="container">
          <p className="kicker rw-reveal">The proof</p>
          <h2 className="section-title rw-reveal rw-d1">
            What the screen has already seen.
          </h2>
          <div className="stats rw-reveal rw-d2">
            {STATS.map((s) => (
              <div key={s.value} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="stats-note rw-reveal rw-d3">Directional</p>
          <Link className="btn rw-reveal rw-d3" href="/contact" style={{ marginTop: "2.4rem" }}>
            Talk to Rootwork
          </Link>
        </div>
      </section>
    </main>
  );
}

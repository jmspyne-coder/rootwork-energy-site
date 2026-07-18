import Image from "next/image";
import Link from "next/link";
import { STATS } from "../site-config";

export const metadata = {
  title: "Intelligence Platform",
  description:
    "A proprietary intelligence platform built to see the difference between an asset that reports available and an asset that performs.",
};

export default function Intelligence() {
  return (
    <main>
      <section className="hero phero phero--chart hero--chart">
        <div className="container hero__content">
          <p className="kicker rw-reveal rw-d1">The platform</p>
          <h1 className="display rw-reveal rw-d2">
            We measure what the fleet actually <em>delivers</em>.
          </h1>
          <p className="hero-sub rw-reveal rw-d3">
            A proprietary intelligence platform built to see the difference
            between an asset that reports available and an asset that
            performs.
          </p>
        </div>
      </section>

      <section className="band band--light">
        <div className="container duo">
          <div>
            <p className="kicker on-light rw-reveal">What it is</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              Delivered performance, not reported availability.
            </h2>
          </div>
          <div className="duo__body">
            <p className="body-copy rw-reveal rw-d2">
              We built the platform on public, market, and operating data
              covering the US storage fleet. It measures what each asset
              actually delivers against what its obligations require, and it
              does so continuously, across the whole fleet, without waiting
              for an owner to disclose a problem.
            </p>
            <p className="body-copy rw-reveal rw-d2">
              Most of the industry still evaluates assets on reported
              availability. We think that number hides more than it reveals.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--deep">
        <div className="container">
          <p className="kicker rw-reveal">The insight</p>
          <p className="statement rw-reveal rw-d1">
            Availability is not being online. It is being online with charge
            at the moment of <em>dispatch</em>.
          </p>
          <p className="body-copy rw-reveal rw-d2" style={{ marginTop: "1.8rem", maxWidth: "58ch" }}>
            An asset mismanaged for state of charge fails its obligation as
            surely as one that is offline, and standard availability metrics
            miss it. That gap between reported and delivered is where value
            hides, and it is what we built the platform to see.
          </p>
        </div>
      </section>

      <section className="band band--light">
        <div className="container media-split rw-reveal">
          <div>
            <p className="kicker on-light">What it produces</p>
            <h2 className="section-title on-light" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)" }}>
              A ranked national screen of recoverable value.
            </h2>
            <p className="body-copy">
              The platform produces a ranked national screen of
              underperforming, interconnection-capable assets and the
              recoverable value in each. It is an origination engine, not a
              reporting tool: it tells us what to buy, what it is worth, and
              what recovery is available.
            </p>
            <p className="body-copy">
              The same intelligence compounds with every asset we operate.
              Each plant we run feeds what the platform knows, and each
              acquisition sharpens the screen for the next one.
            </p>
          </div>
          <figure className="plate">
            <div className="plate__frame">
              <Image
                src="/photos/controls-board.jpg"
                alt="Plant controls board at a utility-scale storage site."
                width={480}
                height={360}
              />
            </div>
            <figcaption className="plate__cap">Field / Plant controls</figcaption>
          </figure>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <p className="kicker rw-reveal">The fleet, measured</p>
          <div className="stats rw-reveal rw-d1" style={{ marginTop: "2.2rem" }}>
            {STATS.map((s) => (
              <div key={s.value} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="stats-note rw-reveal rw-d2">Directional</p>
          <Link href="/contact" className="textlink" style={{ marginTop: "2.6rem" }}>
            Talk to Rootwork →
          </Link>
        </div>
      </section>
    </main>
  );
}

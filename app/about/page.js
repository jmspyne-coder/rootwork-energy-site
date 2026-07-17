import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Rootwork Energy is an operator-led independent power producer, founded and led by James Payne, building toward its first acquisitions of underperforming, interconnection-capable energy assets.",
};

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="hero phero">
        <Image
          src="/photos/fleet-winter.jpg"
          alt="Energy storage and transformer equipment in a snow-covered field."
          fill
          priority
          sizes="100vw"
          className="hero__bg"
          style={{ objectFit: "cover" }}
        />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <p className="kicker rw-reveal rw-d1">About</p>
          <h1 className="display rw-reveal rw-d2">
            Operators <em>first</em>.
          </h1>
          <p className="hero-sub rw-reveal rw-d3" style={{ marginBottom: 0 }}>
            Rootwork was built by people who run energy assets for a living,
            not by a deck looking for a team.
          </p>
        </div>
      </section>

      {/* FOUNDER (light) */}
      <section className="band band--light">
        <div className="container split">
          <div>
            <p className="kicker on-light rw-reveal">Founder &amp; CEO</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              James Payne
            </h2>
            <p className="body-copy rw-reveal rw-d2">
              James Payne founded Rootwork Energy after more than a decade of
              field-to-leadership experience across roughly 2.5 GW of
              utility-scale storage and renewables in the US and Canada. His
              background runs through operations leadership at utility-scale
              storage and renewables operators, with depth in commissioning,
              operations, and O&amp;M.
            </p>
            <p className="body-copy rw-reveal rw-d2">
              That experience is the company&rsquo;s edge. Understanding what
              makes assets fail, and what it takes to make them deliver, comes
              from having run them through every season and every failure mode.
              It is knowledge that cannot be hired in on a fundraising
              timeline.
            </p>
          </div>
          <div className="split__media rw-reveal rw-d2">
            <Image
              src="/photos/battery-modules.jpg"
              alt="Battery module rack with cooling fans inside a storage enclosure."
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* COMPANY (dark closer) */}
      <section className="band band--deep">
        <div className="container">
          <p className="kicker rw-reveal">The company</p>
          <h2 className="section-title rw-reveal rw-d1">
            An IPP built to own what it fixes.
          </h2>
          <p className="body-copy rw-reveal rw-d2">
            Rootwork Energy is an operator-led independent power producer,
            organized as a Delaware LLC and building toward its first
            acquisitions. The model is to acquire underperforming,
            interconnection-capable energy assets, restore them through
            proprietary repower execution, and hold them long term, with
            commissioning, operations, and maintenance self-performed on the
            assets Rootwork owns.
          </p>
          <Link className="btn rw-reveal rw-d2" href="/contact" style={{ marginTop: "2.4rem" }}>
            Talk to Rootwork
          </Link>
        </div>
      </section>
    </main>
  );
}

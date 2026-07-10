import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "../site-config";

export const metadata = {
  title: "About",
  description:
    "Rootwork Energy is an operator-led independent power producer that acquires underperforming utility-scale storage and generation, repowers it, and holds it long term.",
};

export default function About() {
  return (
    <main>
      <section
        className="rw-phero rw-phero--photo"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(20,20,18,0.92), rgba(20,20,18,0.6) 55%, rgba(20,20,18,0.4)), linear-gradient(180deg, rgba(20,20,18,0.42), rgba(20,20,18,0.82)), url('/photos/bess-winter.jpg')" }}
      >
        <div className="container rw-phero__inner">
          <p className="rw-kicker rw-reveal">About</p>
          <h1 className="rw-phero__display rw-reveal rw-d1">Built by <em>operators</em>.</h1>
          <p className="rw-phero__lede rw-reveal rw-d2">
            Rootwork Energy acquires underperforming utility-scale storage and
            generation, repowers it, and operates it long term as an independent power
            producer. Led by people who came up in the field, on the assets themselves.
          </p>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <div className="rw-split rw-reveal">
            <div>
              <p className="rw-statement__eyebrow" style={{ color: "var(--green)" }}>Our approach</p>
              <h2 className="rw-split__t">Value is created in the <em>field</em>, not the spreadsheet.</h2>
              <p className="lede">
                We buy assets running below their potential, recover their output
                through hands-on execution, and hold availability through disciplined
                operations. We have done exactly this work in the field for a decade,
                which is what tells us which assets can be brought back and what it takes
                to do it.
              </p>
            </div>
            <div className="rw-split__media">
              <Image src="/photos/battery-modules.jpg" alt="Battery module rack with cooling fans inside a storage enclosure." fill sizes="(max-width:880px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="rw-statement">
        <div className="container">
          <div className="rw-split rw-split--rev rw-reveal">
            <div>
              <p className="rw-statement__eyebrow">Why operator-led</p>
              <h2 className="rw-split__t" style={{ color: "var(--warm-white)" }}>We have run these systems <em>ourselves</em>.</h2>
              <p className="lede lede--dark">
                Our work is led by people who have commissioned, maintained, and
                recovered utility-scale storage and renewable assets across North
                America. Having run them in the field, we know what it takes to bring an
                underperforming asset back, and exactly how to do it.
              </p>
            </div>
            <div className="rw-split__media">
              <Image src="/photos/substation-gis.jpg" alt="Gas-insulated switchgear and high-voltage interconnection at a commissioned substation." fill sizes="(max-width:880px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal" style={{ color: "var(--green)" }}>What sets us apart</p>
          <h2 className="rw-do__title rw-reveal rw-d1" style={{ marginBottom: "1.4rem" }}>
            Execution over <em>assumptions</em>.
          </h2>
          <p className="lede rw-reveal rw-d2" style={{ marginBottom: "1.8rem" }}>
            Field reality over the spreadsheet. We measure ourselves by what an asset
            actually delivers, season after season.
          </p>
          <Link href="/capabilities" className="textlink on-light rw-reveal rw-d3">See our capabilities →</Link>
        </div>
      </section>

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

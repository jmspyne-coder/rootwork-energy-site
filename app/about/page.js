import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Rootwork Energy is an operator-led independent power producer that recovers underperforming energy assets and holds them for the long term.",
};

export default function About() {
  return (
    <main>
      {/* Page hero */}
      <section
        className="page-hero page-hero--photo"
        style={{ backgroundImage: "url(/photos/fleet-winter.jpg)" }}
      >
        <div className="container">
          <p className="eyebrow on-dark">About</p>
          <h1 className="page-title">Built by operators, for the long term.</h1>
          <p className="page-lede">
            Rootwork Energy is an operator-led independent power producer. We
            recover underperforming energy assets and hold them for the long
            term — owned and run by people who came up in the field.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="band-bone section">
        <div className="container split">
          <div className="split__text">
            <p className="eyebrow on-light">Our approach</p>
            <p className="lede">
              We buy what the market has written off but that still sits on
              valuable interconnection. We recover performance through
              disciplined, hands-on execution — then operate and hold for the
              long term instead of flipping. The work that creates the value is
              the work we do ourselves.
            </p>
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

      {/* Why operator-led */}
      <section className="band-charcoal section">
        <div className="container split split--reverse">
          <div className="split__text">
            <p className="eyebrow on-dark">Why operator-led</p>
            <p className="lede lede--dark">
              Our capital decisions are made by people who have commissioned,
              maintained, and recovered utility-scale storage and renewable
              assets across North America. Having run these systems in the
              field, we know which underperforming assets can be brought back —
              and exactly how to do it.
            </p>
          </div>
          <div className="split__media">
            <Image
              src="/photos/substation-breaker.jpg"
              alt="High-voltage circuit breaker and bushings at an energized substation."
              width={640}
              height={480}
              className="photo"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="band-bone section">
        <div className="container">
          <p className="eyebrow on-light">What sets us apart</p>
          <p className="lede">
            Recovery over speculation. Field-proven execution over spreadsheets.
            Long-term ownership over the quick exit. We measure ourselves by what
            an asset actually delivers once it is back in our hands.
          </p>
          <Link href="/capabilities" className="textlink on-light">
            See our capabilities →
          </Link>
        </div>
      </section>
    </main>
  );
}

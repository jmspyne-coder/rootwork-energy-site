import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Rootwork Energy is an operator-led company that commissions, operates, and recovers utility-scale storage and renewables for owners and developers, and runs assets of its own.",
};

export default function About() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero page-hero--photo">
        <div
          className="hero__media"
          style={{ backgroundImage: "url(/photos/bess-array.jpg)" }}
        />
        <div className="container">
          <p className="eyebrow on-dark">About</p>
          <h1 className="page-title">Built by <em>operators</em>, for the long term.</h1>
          <p className="page-lede">
            Rootwork Energy is an operator-led company. We commission, operate,
            and recover utility-scale storage and renewables, for the owners and
            developers who hire us and on the assets we run ourselves, led by
            people who came up in the field.
          </p>
        </div>
      </section>

      {/* Approach */}
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
              <p className="eyebrow on-light">Our approach</p>
              <p className="lede">
                The value in this business is created in the field, not in a
                spreadsheet. We commission systems into service, recover output on
                assets running below their potential, and hold availability through
                disciplined operations. We own and operate assets of our own as
                well, which is why we run yours the same way.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Why operator-led */}
      <section className="band-charcoal section">
        <div className="container">
          <article className="cap-feature reveal-up">
            <div className="cap-feature__media">
              <Image
                src="/photos/substation-breaker.jpg"
                alt="High-voltage circuit breaker and bushings at an energized substation."
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="cap-img"
              />
            </div>
            <div className="cap-feature__body">
              <p className="eyebrow on-dark">Why operator-led</p>
              <p className="lede lede--dark">
                Our work is led by people who have commissioned, maintained, and
                recovered utility-scale storage and renewable assets across North
                America. Having run these systems in the field, we know what it
                takes to bring an underperforming asset back, and exactly how to do
                it.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Principles */}
      <section className="band-bone section">
        <div className="container">
          <p className="eyebrow on-light">What sets us apart</p>
          <p className="lede">
            Execution over assumptions. Field reality over the spreadsheet. We
            measure ourselves by what an asset actually delivers, season after
            season.
          </p>
          <Link href="/capabilities" className="textlink on-light">
            See our capabilities →
          </Link>
        </div>
      </section>
    </main>
  );
}

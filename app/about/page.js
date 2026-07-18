import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Who we are",
  description:
    "Rootwork Energy is an operator-led independent power producer building toward its first acquisitions of underperforming, interconnection-capable energy assets.",
};

const PRINCIPLES = [
  {
    title: "Field truth over reported data",
    body: "We trust what an asset delivers, measured at the meter, over what its reporting says. Every decision we make starts from delivered performance.",
  },
  {
    title: "Own what we fix",
    body: "We are not a services shop and not a flipper. The recovery we execute accrues to assets we intend to hold, so the incentive to fix things properly is structural.",
  },
  {
    title: "Compound the intelligence",
    body: "Every asset we screen, diligence, or operate feeds the platform. Each acquisition sharpens the screen for the next one.",
  },
];

export default function About() {
  return (
    <main>
      <section className="hero phero phero--chart hero--chart">
        <div className="container hero__content">
          <p className="kicker rw-reveal rw-d1">Who we are</p>
          <h1 className="display rw-reveal rw-d2">
            Operators <em>first</em>.
          </h1>
          <p className="hero-sub rw-reveal rw-d3">
            Rootwork was built by people who run energy assets for a living,
            not by a deck looking for a team.
          </p>
        </div>
      </section>

      <section className="band band--light">
        <div className="container duo">
          <div>
            <p className="kicker on-light rw-reveal">The firm</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              An independent power producer built on operating truth.
            </h2>
          </div>
          <div className="duo__body">
            <p className="body-copy rw-reveal rw-d2">
              Rootwork Energy is an operator-led independent power producer.
              We acquire underperforming, interconnection-capable energy
              assets at distressed valuations, restore them through
              proprietary repower execution, and hold them for the long term.
            </p>
            <p className="body-copy rw-reveal rw-d2">
              We are building toward our first acquisitions with the
              discipline of people who have commissioned, operated, and
              maintained utility-scale plants through every season and every
              failure mode. That operating history is the reason our
              underwriting sees recoverable value where the market sees a
              broken asset.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <p className="kicker rw-reveal">How we operate</p>
          <h2 className="section-title rw-reveal rw-d1">
            Three commitments run through everything we do.
          </h2>
          <div className="ledger ledger--dark rw-reveal rw-d2">
            {PRINCIPLES.map((m, i) => (
              <article key={m.title} className="ledger__row">
                <span className="ledger__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ledger__title">{m.title}</h3>
                <p className="ledger__body">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--light">
        <div className="container media-split rw-reveal">
          <div>
            <p className="kicker on-light">Leadership</p>
            <h2 className="section-title on-light" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)" }}>
              A decade in the field, on both sides of the meter.
            </h2>
            <p className="body-copy">
              Rootwork&rsquo;s leadership spans more than a decade of
              field-to-leadership experience across roughly 2.5 GW of
              utility-scale storage and renewables in the US and Canada, with
              depth in commissioning, operations, and O&amp;M. The firm is led
              by founder James Payne.
            </p>
            <p className="body-copy">
              Understanding what makes assets fail, and what it takes to make
              them deliver, comes from having run them. It is knowledge that
              cannot be hired in on a fundraising timeline.
            </p>
            <Link href="/contact" className="textlink on-light">
              Talk to Rootwork →
            </Link>
          </div>
          <figure className="plate">
            <div className="plate__frame">
              <Image
                src="/photos/substation-switchgear.jpg"
                alt="Medium-voltage switchgear at a utility-scale site."
                width={640}
                height={424}
              />
            </div>
            <figcaption className="plate__cap">Field / MV switchgear</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

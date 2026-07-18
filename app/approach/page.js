import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Thesis",
  description:
    "AI demand, interconnection scarcity, and an underperforming fleet. The Rootwork thesis: buy the bleed, execute the recovery, hold the capacity.",
};

const MODEL = [
  {
    title: "Screen",
    body: "Proprietary analytics measure delivered performance across the operating fleet and surface assets whose performance gap the market has not priced. Origination starts with evidence, not broker decks.",
  },
  {
    title: "Acquire",
    body: "We enter at distressed valuations on underperforming, interconnection-capable assets. The queue position embedded in each one is a scarce option the seller is rarely paid for.",
  },
  {
    title: "Repower",
    body: "Proprietary repower execution restores delivered performance and revenue capture. This is operating work: commissioning discipline, controls, dispatch, and compliance, done by people who have run these plants.",
  },
  {
    title: "Operate & Hold",
    body: "We hold what we fix. Long-term ownership aligns the recovery with the balance sheet, and every operating year feeds the intelligence that finds the next asset.",
  },
];

export default function Approach() {
  return (
    <main>
      <section className="hero phero phero--chart hero--chart">
        <div className="container hero__content">
          <p className="kicker rw-reveal rw-d1">The thesis</p>
          <h1 className="display rw-reveal rw-d2">
            Connected capacity is the scarcest asset in American <em>power</em>.
          </h1>
          <p className="hero-sub rw-reveal rw-d3">
            AI demand is compounding, interconnection queues stretch years,
            and a measurable share of the operating fleet is quietly failing
            to deliver. That combination is the opportunity.
          </p>
        </div>
      </section>

      <section className="band band--light">
        <div className="container duo">
          <div>
            <p className="kicker on-light rw-reveal">The demand era</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              The grid changed faster than the fleet.
            </h2>
          </div>
          <div className="duo__body">
            <p className="body-copy rw-reveal rw-d2">
              Data-center load growth is the largest new source of electricity
              demand the US grid has seen in decades. Interconnection queues
              stretch years, and new capacity cannot be built fast enough to
              meet it.
            </p>
            <p className="pull rw-reveal rw-d2">
              The fastest megawatt to market is the one already connected and
              underperforming.
            </p>
            <p className="body-copy rw-reveal rw-d3">
              Queue position is a finite asset that cannot be manufactured.
              Every underperforming plant that holds one is future capacity
              hiding in plain sight.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--deep">
        <div className="container">
          <p className="kicker rw-reveal">The bleed</p>
          <p className="statement rw-reveal rw-d1">
            Storage assets rarely fail outright. They <em>bleed</em>.
          </p>
          <p className="body-copy rw-reveal rw-d2" style={{ marginTop: "1.8rem", maxWidth: "58ch" }}>
            Chemistry, inverters, software, dispatch, and compliance failures
            compound until the drag defines the asset&rsquo;s economics, often
            before the owner sees it clearly. The industry built capacity
            faster than it built operating understanding, and the gap between
            the two is measurable, growing, and addressable. That gap is where
            our entry prices come from.
          </p>
        </div>
      </section>

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
        </div>
      </section>

      <section className="band band--dark">
        <div className="container media-split rw-reveal">
          <div>
            <p className="kicker">Asset scope</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)" }}>
              Storage first. Interconnection always.
            </h2>
            <p className="body-copy">
              We acquire across utility-scale storage and renewables, with
              battery energy storage as the specialty. The universe is
              standalone BESS, solar plus storage hybrids, and gas peakers and
              other thermal assets, wherever the combination of recoverable
              performance and interconnection position makes the entry price
              wrong.
            </p>
            <Link href="/contact" className="textlink">
              Talk to Rootwork →
            </Link>
          </div>
          <figure className="plate">
            <div className="plate__frame">
              <Image
                src="/photos/substation-gis.jpg"
                alt="High-voltage interconnection equipment at a utility-scale site."
                width={640}
                height={480}
              />
            </div>
            <figcaption className="plate__cap">Field / Interconnection</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

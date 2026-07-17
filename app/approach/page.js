import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Thesis",
  description:
    "AI changed the demand curve. Rootwork acquires underperforming, interconnection-capable energy assets, restores them through proprietary repower execution, and holds them long term.",
};

const MODEL_DEPTH = [
  {
    title: "Screen",
    body: "Origination starts with evidence, not broker decks. Rootwork's proprietary screening platform measures delivered performance across the operating fleet and surfaces assets whose performance gap the market has not priced. The screen finds the bleed while the owner still reads it as noise.",
  },
  {
    title: "Acquire",
    body: "Entry comes at distressed valuations on interconnection-capable assets. The distress screen finds assets whose owners do not yet see how badly they are bleeding, and that is where distressed entry prices come from. Queue position rides along as the embedded option: future capacity that competitors cannot manufacture.",
  },
  {
    title: "Repower",
    body: "Proprietary repower execution restores delivered performance and revenue capture. Recovery works through the same layers where assets bleed: chemistry, inverter hardware, software, dispatch, and compliance, addressed in the order the economics demand.",
  },
  {
    title: "Operate & Hold",
    body: "Rootwork holds what it fixes, long term, as an operating independent power producer. Commissioning, operations, and maintenance are self-performed on owned assets, and the operating intelligence compounds with every asset added to the portfolio.",
  },
];

export default function Approach() {
  return (
    <main>
      {/* HERO */}
      <section className="hero phero">
        <Image
          src="/photos/bess-array.jpg"
          alt="Utility-scale battery storage array under an open sky."
          fill
          priority
          sizes="100vw"
          className="hero__bg"
          style={{ objectFit: "cover" }}
        />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <p className="kicker rw-reveal rw-d1">The thesis</p>
          <h1 className="display rw-reveal rw-d2">
            Connected and broken beats new and <em>queued</em>.
          </h1>
          <p className="hero-sub rw-reveal rw-d3" style={{ marginBottom: 0 }}>
            The fastest megawatt to market is the one already interconnected
            and underperforming. Rootwork exists to find it, buy it, and make
            it deliver.
          </p>
        </div>
      </section>

      {/* SECTIONS 1 + 2 — light */}
      <section className="band band--light">
        <div className="container">
          <div className="prose-section">
            <p className="kicker on-light rw-reveal">01 · The demand era</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              AI changed the demand curve.
            </h2>
            <p className="body-copy rw-reveal rw-d2">
              Data-center load growth is the largest new source of electricity
              demand the US grid has seen in decades. Interconnection queues
              stretch years, and new capacity cannot be built fast enough to
              meet the load that is already arriving. That inverts the usual
              development math: speed to market now belongs to assets that are
              already connected, even when they are underperforming, not to
              projects waiting in line.
            </p>
            <p className="body-copy rw-reveal rw-d2">
              Queue position is a finite asset that cannot be manufactured.
              Every underperforming plant that holds one is future generating
              capacity hiding in plain sight, and acquiring it means acquiring
              capacity that competitors cannot replicate at any price on any
              timeline.
            </p>
          </div>

          <div className="prose-section">
            <p className="kicker on-light rw-reveal">02 · The bleed</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              Assets do not fail. They bleed.
            </h2>
            <p className="body-copy rw-reveal rw-d2">
              Storage assets rarely fail outright. Small failures across
              chemistry, inverter hardware, software, dispatch, and compliance
              compound until the cumulative drag defines the asset&rsquo;s
              economics, often before the owner sees it clearly. The industry
              built enormous generating capacity without building the operating
              understanding to run it.
            </p>
            <p className="body-copy rw-reveal rw-d2">
              That gap is measurable, growing, and addressable. It shows up as
              the distance between what an asset was modeled to earn and what
              it actually delivers, and it is exactly where Rootwork buys.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — the model in depth (dark) */}
      <section className="band band--dark">
        <div className="container">
          <p className="kicker rw-reveal">03 · The model in depth</p>
          <h2 className="section-title rw-reveal rw-d1">
            You can only fix what you buy if you know how to run it.
          </h2>
          <p className="body-copy rw-reveal rw-d2">
            The acquisition thesis is only credible because the operating
            capability behind it is real. Rootwork self-performs commissioning,
            operations, and maintenance on the assets it owns, and that
            services-grade operating capability is what turns a distressed
            purchase into a performing plant.
          </p>
          <div className="stats rw-reveal rw-d2" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {MODEL_DEPTH.map((m, i) => (
              <article key={m.title} className="stat">
                <span className="card__step" style={{ color: "var(--muted-dark)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="card__title" style={{ color: "var(--bone)" }}>
                  {m.title}
                </h3>
                <p className="card__body" style={{ color: "var(--muted-dark)" }}>
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — asset scope (light) */}
      <section className="band band--light">
        <div className="container split">
          <div>
            <p className="kicker on-light rw-reveal">04 · Asset scope</p>
            <h2 className="section-title on-light rw-reveal rw-d1">
              Storage first. Interconnection always.
            </h2>
            <p className="body-copy rw-reveal rw-d2">
              Rootwork acquires across utility-scale storage and renewables,
              with battery energy storage as the specialty. The universe is
              standalone BESS, solar plus storage hybrids, and gas peakers and
              other thermal assets, wherever the combination of recoverable
              performance and interconnection position makes the entry price
              wrong.
            </p>
          </div>
          <div className="split__media rw-reveal rw-d2">
            <Image
              src="/photos/substation-switchgear.jpg"
              alt="Substation switchgear and high-voltage interconnection structure."
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="band band--deep">
        <div className="container closer__row">
          <h2 className="closer__title rw-reveal">
            The thesis is simple. The execution is the moat.
          </h2>
          <Link className="btn rw-reveal rw-d1" href="/contact">
            Talk to Rootwork
          </Link>
        </div>
      </section>
    </main>
  );
}

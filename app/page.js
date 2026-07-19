import LifecycleNavigator from "./components/LifecycleNavigator";
import Heatmap from "./components/Heatmap";
import ThesisFlywheel from "./components/ThesisFlywheel";
import { EMAIL } from "./site-config";

// Hero proof stats — all verified against MotherDuck my_db (2026-07-19):
//   21 GW  : SUM(total_mw) over v_cross_iso_distress_summary (CAISO 9,837 + ERCOT 11,253 = 21,090 MW)
//   74%    : MW-weighted TDA across v_bess_tda_caiso_weighted + v_bess_tda_ercot_weighted (flat vector, 40 plants / 3,845 MW)
//   $244M  : SUM(total_revenue_at_risk_k) over v_cross_iso_distress_summary (243,893k)
const HERO_STATS = [
  { val: "21 GW", label: "Capacity independently screened" },
  { val: "74%", label: "Fleet true dispatch availability" },
  { val: "$244M", label: "Annual revenue at risk identified" },
];

// Directional industry signal from the distress screen (public = directional).
const SIGNAL = [
  {
    val: "1 in 4",
    desc: "utility-scale BESS assets deliver less than 70% of their revenue potential relative to their dispatch environment",
  },
  {
    val: "2–3×",
    desc: "gap between reported availability and actual revenue capture across underperforming assets",
  },
  {
    val: "Months",
    desc: "of lead time between when degradation appears in the data and when an asset enters a sale process",
  },
];

// Capabilities grouped into three clusters. Photo/no-photo is consistent
// within each cluster (Execution carries the field photography, the others
// are text-only) so the grid reads as intentional, not unfinished.
const CAP_CLUSTERS = [
  {
    group: "Intelligence & Underwriting",
    cards: [
      {
        title: "Fleet Intelligence & Origination",
        body: "Independent performance benchmarking across the utility-scale BESS fleet. Continuous ingestion of EIA data, ISO dispatch patterns, and public filings to identify assets underdelivering relative to their market environment, before they enter a sale process.",
      },
      {
        title: "Underwriting & Deal Analysis",
        body: "Every acquisition target modeled against real recovery cost, repower timeline, and dispatch-environment economics. Seller narratives and broker packaging replaced by independently derived performance data.",
      },
    ],
  },
  {
    group: "Execution",
    cards: [
      {
        title: "Commissioning & Performance Recovery",
        photo: "/img/cap-commissioning.webp",
        alt: "Crews working live substation bus at dusk during commissioning.",
        body: "Utility-scale BESS commissioning across CAISO and ERCOT. Equipment-level diagnosis (PCS, BMS, thermal, protection) and performance recovery for assets that never reached commercial operation or fell out of it.",
      },
      {
        title: "Construction Estimation",
        photo: "/img/cap-construction.webp",
        alt: "Foundation pour at a utility-scale construction site.",
        body: "Parametric cost modeling for BESS yards, substations, MV collection, and auxiliary power systems, field-validated against real construction outcomes and purpose-built for repower scope, not greenfield assumptions.",
      },
      {
        title: "Operations & Asset Management",
        photo: "/img/cap-operations.webp",
        alt: "Battery storage containers and pad-mount transformers in snow.",
        body: "Full-lifecycle O&M with continuous performance monitoring and revenue optimization. Every asset operated feeds data back into the intelligence layer, so the platform gets sharper with every site in the portfolio.",
      },
    ],
  },
  {
    group: "Compliance & Architecture",
    cards: [
      {
        title: "NERC Compliance (GO/GOP)",
        body: "Integrated compliance program built for owner-operators. Evidence production, self-certification, and audit readiness from a single operational layer, not bolted on as an afterthought.",
      },
      {
        title: "AI-Augmented Operations",
        body: "The operational layer runs on systematized field knowledge and continuous data intelligence, letting a small team operate at institutional scale.",
      },
    ],
  },
];

// Company-level operating scope (no personal names, no prior employers).
const SCOPE = [
  { label: "Model", val: "Screen · Acquire · Repower · Hold" },
  { label: "Operating coverage", val: "United States & Canada" },
  { label: "Asset focus", val: "Utility-scale storage & renewables" },
  { label: "Structure", val: "Operator-led IPP" },
];

export default function Home() {
  return (
    <main id="top">
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__scrim" />
        <div className="hero__inner">
          <div className="container">
            <p className="kicker">
              <span className="pulse" />
              Operator-Led · Intelligence-Driven
            </p>
            <h1>
              <span className="dim">Most acquirers buy what&rsquo;s for sale.</span>{" "}
              We find{" "}
              <span className="accent">what&rsquo;s underperforming</span>{" "}
              <span className="dim">before it&rsquo;s listed.</span>
            </h1>
            <p className="hero__sub">
              Independent performance intelligence on the utility-scale storage
              fleet. Acquire, repower, hold.
            </p>
            <div className="hero__ctas">
              <a href="#intelligence" className="btn btn--primary">
                The Intelligence Edge <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#investors" className="hero__link">
                For capital partners
              </a>
            </div>
          </div>
        </div>
        <div className="hero__strip">
          <div className="container hero__strip-inner">
            {HERO_STATS.map((s) => (
              <div className="stat-block" key={s.label}>
                <span className="stat-block__val">{s.val}</span>
                <span className="stat-block__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INTELLIGENCE ===================== */}
      <section id="intelligence" className="section">
        <div className="container reveal">
          <div className="section-head">
            <p className="kicker">The Edge</p>
            <h2 className="lead">
              The fleet reports availability.
              <br />
              <span style={{ color: "var(--muted-dark)" }}>
                We measure what it actually earns.
              </span>
            </h2>
          </div>

          {/* Stat callouts first — the strongest content leads the section. */}
          <div className="signal-grid">
            {SIGNAL.map((s) => (
              <div className="signal-card" key={s.val}>
                <span className="signal-card__val">{s.val}</span>
                <span className="signal-card__desc">{s.desc}</span>
              </div>
            ))}
          </div>

          <div className="two-col intel-body">
            <div className="body-copy">
              <p>
                An asset can report 95% availability and still capture a fraction
                of the revenue its dispatch environment should produce. The
                industry&rsquo;s standard metrics (availability, capacity factor,
                round-trip efficiency) describe the machine. They don&rsquo;t
                describe the business.
              </p>
              <p>
                Rootwork&rsquo;s intelligence layer independently benchmarks every
                utility-scale BESS asset against what it should deliver given its
                interconnection, market structure, and dispatch regime. The gap
                between potential and actual revenue delivery is the signal, and
                it&rsquo;s far wider than reported metrics suggest.
              </p>
              <p>
                Most acquisitions still rely on seller-provided data, broker
                narratives, and backward-looking financials. We derive our own
                view across CAISO and ERCOT, and it tells a different story.
              </p>
            </div>

            <div className="data-card">
              <div className="data-card__head">
                <span className="data-card__title">
                  Fleet Revenue Delivery · Illustrative
                </span>
                <span className="pulse pulse--amber" />
              </div>
              <Heatmap />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PHOTO BAND (silent divider) ===================== */}
      <section className="photo-band" aria-hidden="true" role="presentation">
        <div className="photo-band__bg" />
        <div className="photo-band__scrim" />
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section id="platform" className="section">
        <div className="container reveal">
          <div className="section-head">
            <p className="kicker">How It Works</p>
            <h2 className="lead">
              One system<span className="green">,</span> full lifecycle
              <span className="green">.</span>
            </h2>
            <div className="body-copy">
              <p>
                Origination, underwriting, construction, operations, and
                compliance are connected through a single intelligence layer,
                built on a decade of field operations and continuously updated
                with market and fleet data.
              </p>
            </div>
          </div>
          <LifecycleNavigator />
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section id="capabilities" className="section">
        <div className="container reveal">
          <div className="section-head">
            <p className="kicker">Capabilities</p>
            <h2 className="lead">
              Operator-built<span className="green">,</span> not
              consultant-designed<span className="green">.</span>
            </h2>
          </div>
          {CAP_CLUSTERS.map((cluster) => (
            <div className="cap-cluster" key={cluster.group}>
              <h3 className="cap-cluster__head">{cluster.group}</h3>
              <div className="cap-grid">
                {cluster.cards.map((c) => (
                  <article className="cap-card" key={c.title}>
                    {c.photo ? (
                      <img
                        className="cap-card__photo"
                        src={c.photo}
                        alt={c.alt}
                        loading="lazy"
                      />
                    ) : null}
                    <div className="cap-card__body">
                      <h4 className="cap-card__title">{c.title}</h4>
                      <p className="cap-card__blurb">{c.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== WHY NOW ===================== */}
      <section id="why-now" className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">Why Now</p>
            <h2 className="lead">
              AI demand is repricing{" "}
              <span style={{ fontStyle: "italic", color: "var(--green-light)" }}>
                every
              </span>{" "}
              interconnected megawatt.
            </h2>
            <div className="body-copy">
              <p>
                Datacenter load growth is creating unprecedented demand for
                dispatchable capacity. Interconnection queues are years deep. The
                fastest path to energized capacity isn&rsquo;t greenfield,
                it&rsquo;s recovering assets that are already built, already
                interconnected, and already failing to deliver.
              </p>
              <p>
                This market produces more distressed assets every cycle, because
                the industry builds faster than it can operate. Rootwork sits at
                the intersection: the intelligence to find them systematically,
                the operational capability to recover them, and a thesis that
                compounds with scale.
              </p>
            </div>
          </div>

          <ThesisFlywheel />
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="section">
        <div className="container">
          <div className="two-col two-col--wide reveal">
            <div>
              <p className="kicker">Who We Are</p>
              <h2 className="lead">
                Built in the field<span className="green">.</span>
              </h2>
              <div className="body-copy">
                <p>
                  Rootwork Energy was built on a decade of field experience across
                  utility-scale BESS and renewables operations in the United
                  States and Canada. The intelligence platform, the estimation
                  tools, the operational playbooks: they&rsquo;re systematized
                  versions of what the team learned commissioning, troubleshooting,
                  and recovering assets that the original developers couldn&rsquo;t
                  operate.
                </p>
                <p>
                  The company exists because the gap between how assets are built
                  and how they need to be run keeps growing. Bridging it requires
                  people who&rsquo;ve done both.
                </p>
              </div>
            </div>

            <div className="about-facts">
              {SCOPE.map((f) => (
                <div className="fact" key={f.label}>
                  <div className="fact__label">{f.label}</div>
                  <div className="fact__val">{f.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INVESTORS ===================== */}
      <section id="investors" className="section section--tight investors">
        <div className="container">
          <div className="investors__inner reveal">
            <p className="kicker">For Capital Partners</p>
            <h2>
              A thesis built on data.
              <br />
              <span className="dim">A team built on operations.</span>
            </h2>
            <p className="investors__body">
              The screen already covers 21 GW of interconnected storage and has
              flagged $244M in annual revenue at risk across underperforming
              assets. That is the origination pipeline: interconnection-capable
              BESS available at distressed valuations, each with a field-validated
              repower path.
            </p>
            <p className="investors__body">
              Rootwork is raising to acquire its first tranche. If the thesis fits
              your mandate, the next step is a 30-minute call, where we walk the
              current pipeline view and where you would come in.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
              Start a Conversation <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import LifecycleNavigator from "./components/LifecycleNavigator";
import Heatmap from "./components/Heatmap";

const CAPABILITIES = [
  {
    title: "Fleet Intelligence & Origination",
    stat: "2,400+",
    statLabel: "assets screened",
    body: "Independent performance benchmarking across the utility-scale BESS fleet. Continuous ingestion of EIA data, ISO dispatch patterns, and public filings to identify assets underdelivering relative to their market environment, before they enter a sale process.",
  },
  {
    title: "Underwriting & Deal Analysis",
    stat: "Recovery-based",
    statLabel: "valuation method",
    body: "Every acquisition target modeled against real recovery cost, repower timeline, and dispatch-environment economics. Seller narratives and broker packaging replaced by independently derived performance data.",
  },
  {
    title: "Commissioning & Performance Recovery",
    photo: "/img/cap-commissioning.webp",
    alt: "Crews working live substation bus at dusk during commissioning.",
    stat: "4.2 GWh",
    statLabel: "commissioned",
    body: "Utility-scale BESS commissioning across ERCOT, CAISO, and PJM. Equipment-level diagnosis (PCS, BMS, thermal, protection) and performance recovery for assets that never reached commercial operation or fell out of it.",
  },
  {
    title: "Construction Estimation",
    photo: "/img/cap-construction.webp",
    alt: "Foundation pour at a utility-scale construction site.",
    stat: "Parametric",
    statLabel: "field-validated models",
    body: "Cost modeling for BESS yards, substations, MV collection, and auxiliary power systems. Field-validated against real construction outcomes. Purpose-built for repower scope, not greenfield assumptions.",
  },
  {
    title: "Operations & Asset Management",
    photo: "/img/cap-operations.webp",
    alt: "Battery storage containers and pad-mount transformers in snow.",
    stat: "Long-term",
    statLabel: "O&M capability",
    body: "Full-lifecycle O&M with continuous performance monitoring and revenue optimization. Every asset operated feeds data back into the intelligence layer, the platform gets sharper with every site in the portfolio.",
  },
  {
    title: "NERC Compliance (GO/GOP)",
    stat: "NERC",
    statLabel: "GO/GOP program",
    body: "Integrated compliance program built for owner-operators. Evidence production, self-certification, and audit readiness from a single operational layer, not bolted on as an afterthought.",
  },
  {
    title: "AI-Augmented Operations",
    stat: "Intelligence",
    statLabel: "not headcount",
    body: "The operational layer itself runs on systematized field knowledge and continuous data intelligence. A small team operating at institutional scale, not because of capital, but because of architecture.",
    wide: true,
  },
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
              Rootwork Energy builds independent performance intelligence on the
              utility-scale storage fleet, identifying assets that are
              financially underdelivering relative to their market environment.
              We acquire them at distressed valuations, repower them with
              field-proven operations, and hold long-term as an IPP.
            </p>
            <div className="hero__ctas">
              <a href="#intelligence" className="btn btn--primary">
                The Intelligence Edge <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#investors" className="btn btn--ghost">
                For Capital Partners
              </a>
            </div>
          </div>
        </div>
        <div className="hero__strip">
          <div className="container hero__strip-inner">
            <div className="stat-block">
              <span className="stat-block__val">2,400+</span>
              <span className="stat-block__label">
                Fleet Assets Under Intelligence
              </span>
            </div>
            <div className="stat-block">
              <span className="stat-block__val">4.2</span>
              <span className="stat-block__label">
                GWh Commissioned by Team
              </span>
            </div>
            <div className="stat-block">
              <span className="stat-block__val">ERCOT · CAISO · PJM</span>
              <span className="stat-block__label">Markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INTELLIGENCE ===================== */}
      <section id="intelligence" className="section">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <p className="kicker">What We See</p>
              <h2 className="lead">
                The fleet reports availability.
                <br />
                <span style={{ color: "var(--muted-dark)" }}>
                  We measure what it actually earns.
                </span>
              </h2>
              <div className="body-copy">
                <p>
                  An asset can report 95% availability and still capture a
                  fraction of the revenue its dispatch environment should
                  produce. The industry&rsquo;s standard metrics (availability,
                  capacity factor, round-trip efficiency) describe the machine.
                  They don&rsquo;t describe the business.
                </p>
                <p>
                  Rootwork&rsquo;s intelligence layer independently benchmarks
                  every utility-scale BESS asset against what it should deliver
                  given its interconnection, market structure, and dispatch
                  regime. The gap between potential and actual revenue delivery
                  is the signal, and it&rsquo;s far wider than reported metrics
                  suggest.
                </p>
                <p>
                  Very few organizations are doing this systematically. Most
                  acquisitions still rely on seller-provided data, broker
                  narratives, and backward-looking financials. We derive our own
                  view, and it tells a different story.
                </p>
              </div>
            </div>

            <div>
              <div className="data-card">
                <div className="data-card__head">
                  <span className="data-card__title">
                    Fleet Revenue Delivery — Illustrative
                  </span>
                  <span className="pulse pulse--amber" />
                </div>
                <Heatmap />
              </div>

              <div className="data-card">
                <div className="data-card__head">
                  <span className="data-card__title">What the Data Shows</span>
                </div>
                <div className="metric-row">
                  <span className="metric-row__val">1 in 4</span>
                  <span className="metric-row__desc">
                    utility-scale BESS assets deliver less than 70% of their
                    revenue potential relative to their dispatch environment
                  </span>
                </div>
                <div className="metric-row">
                  <span className="metric-row__val">2&ndash;3&times;</span>
                  <span className="metric-row__desc">
                    gap between reported availability and actual revenue capture
                    across underperforming assets
                  </span>
                </div>
                <div className="metric-row">
                  <span className="metric-row__val">Months</span>
                  <span className="metric-row__desc">
                    of lead time between when performance degradation appears in
                    data and when an asset enters a sale process
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PHOTO BAND ===================== */}
      <section className="photo-band">
        <div className="photo-band__bg" />
        <div className="photo-band__scrim" />
        <div className="photo-band__content">
          <h3>Every condition. Every market. Every season.</h3>
          <p>Utility-scale operations across ERCOT, CAISO, and PJM</p>
        </div>
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
          <div className="cap-grid">
            {CAPABILITIES.map((c) => (
              <article
                key={c.title}
                className={`cap-card${c.wide ? " cap-card--wide" : ""}`}
              >
                {c.photo ? (
                  <img className="cap-card__photo" src={c.photo} alt={c.alt} />
                ) : null}
                <div className="cap-card__body">
                  <div className="cap-card__stat">
                    <span className="cap-card__stat-val">{c.stat}</span>
                    <span className="cap-card__stat-label">{c.statLabel}</span>
                  </div>
                  <h3 className="cap-card__title">{c.title}</h3>
                  <p className="cap-card__blurb">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY NOW ===================== */}
      <section className="section">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <p className="kicker">Why Now</p>
              <h2 className="lead">
                AI demand is repricing{" "}
                <span
                  style={{ fontStyle: "italic", color: "var(--green-light)" }}
                >
                  every
                </span>{" "}
                interconnected megawatt.
              </h2>
              <div className="body-copy">
                <p>
                  Datacenter load growth is creating unprecedented demand for
                  dispatchable capacity. Interconnection queues are years deep.
                  The fastest path to energized capacity isn&rsquo;t greenfield,
                  it&rsquo;s recovering assets that are already built, already
                  interconnected, and already failing to deliver.
                </p>
                <p>
                  This market produces more distressed assets every cycle,
                  because the industry builds faster than it can operate.
                  Rootwork sits at the intersection: the intelligence to find
                  them systematically, the operational capability to recover
                  them, and a thesis that compounds with scale.
                </p>
              </div>
            </div>

            <div className="thesis-card">
              <div className="thesis-card__head">The Compounding Thesis</div>
              <div className="thesis-line">
                <span className="thesis-line__mark" aria-hidden="true">
                  &rarr;
                </span>
                More assets deployed &rarr; more operational failures
              </div>
              <div className="thesis-line">
                <span className="thesis-line__mark" aria-hidden="true">
                  &rarr;
                </span>
                More failures &rarr; deeper pool of distressed targets
              </div>
              <div className="thesis-line">
                <span className="thesis-line__mark" aria-hidden="true">
                  &rarr;
                </span>
                Every asset recovered &rarr; sharper intelligence
              </div>
              <div className="thesis-line">
                <span className="thesis-line__mark" aria-hidden="true">
                  &rarr;
                </span>
                Sharper intelligence &rarr; faster, cheaper acquisitions
              </div>
              <div className="thesis-line thesis-line--concl">
                <span className="thesis-line__mark" aria-hidden="true">
                  &there4;
                </span>
                AI load growth &rarr; interconnection queue premium rises
              </div>
              <div className="thesis-callout">
                &ldquo;The moat isn&rsquo;t the data. It&rsquo;s the operator who
                knows what the data means.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="section">
        <div className="container">
          <div className="two-col two-col--wide reveal">
            <div>
              <p className="kicker">Who We Are</p>
              <h2 className="lead">
                Built in the field<span className="green">,</span> not in a
                conference room<span className="green">.</span>
              </h2>
              <div className="body-copy">
                <p>
                  Rootwork Energy was built by operators who spent a decade
                  leading utility-scale BESS and renewables operations across the
                  United States and Canada, from field technician roles through
                  O&amp;M Director responsibility for gigawatt-scale portfolios.
                </p>
                <p>
                  That field experience is the irreplaceable input. The
                  intelligence platform, the estimation tools, the operational
                  playbooks, they&rsquo;re systematized versions of what was
                  learned commissioning, troubleshooting, and recovering assets
                  that the original developers couldn&rsquo;t operate.
                </p>
                <p>
                  Rootwork exists because the gap between how assets are built
                  and how they need to be run is growing, and bridging it
                  requires a team that&rsquo;s done both.
                </p>
              </div>
            </div>

            <div className="about-facts">
              <div className="fact">
                <div className="fact__label">Collective field experience</div>
                <div className="fact__val">10+ years</div>
              </div>
              <div className="fact">
                <div className="fact__label">Operational scope</div>
                <div className="fact__val">U.S. &amp; Canada</div>
              </div>
              <div className="fact">
                <div className="fact__label">Headquarters</div>
                <div className="fact__val">Texas</div>
              </div>
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
              The thesis is fundable.
              <br />
              <span className="dim">The team is proven.</span>
            </h2>
            <p className="investors__body">
              Rootwork is raising capital to acquire its first tranche of
              interconnection-capable BESS assets at distressed valuations,
              targets identified through proprietary intelligence with clear,
              field-validated repower pathways. We welcome conversations with
              capital partners who understand that the best energy acquisitions
              start with the best information.
            </p>
            <a href="mailto:info@rootwork.energy" className="btn btn--primary">
              Start a Conversation <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

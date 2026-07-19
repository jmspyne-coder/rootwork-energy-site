import LifecycleNavigator from "./components/LifecycleNavigator";
import Heatmap from "./components/Heatmap";
import StatCounter from "./components/StatCounter";
import Flywheel from "./components/Flywheel";
import { EMAIL } from "./site-config";

// Operating capabilities, self-performed across Rootwork's own portfolio.
// Grouped to the lifecycle spine: Screen & Acquire, Repower, Operate & Hold.
// Each cluster leads with a field photograph shot for that stage.
const CAPABILITY_GROUPS = [
  {
    stage: "Screen & Acquire",
    photo: "/img/cap-construction.webp",
    alt: "Foundation and civil work underway on a late-stage development site.",
    cards: [
      {
        title: "Acquisition and Origination",
        body: "Intelligence-led sourcing of distressed and underperforming energy assets.",
      },
      {
        title: "Development Services",
        body: "Late-stage development through interconnection, carried on our own projects.",
      },
    ],
  },
  {
    stage: "Repower",
    photo: "/img/cap-commissioning.webp",
    alt: "Field commissioning at dusk on live high-voltage equipment.",
    cards: [
      {
        title: "Commissioning Management",
        body: "Full-scope project commissioning from NTP through COD.",
      },
      {
        title: "Asset Recovery",
        body: "Proprietary repower execution for underperforming facilities.",
      },
    ],
  },
  {
    stage: "Operate & Hold",
    photo: "/img/cap-operations.webp",
    alt: "A storage yard held to spec through winter operating conditions.",
    cards: [
      {
        title: "Operations and Maintenance",
        body: "Preventive, predictive, and corrective O&M for utility-scale storage and renewables.",
      },
      {
        title: "Dispatch Optimization",
        body: "Revenue maximization through informed dispatch strategy.",
      },
      {
        title: "Compliance and Regulatory",
        body: "NERC GO/GOP compliance program development and management.",
      },
    ],
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
              Operator-led. Built to recover.
            </p>
            <h1>The grid is building capacity it cannot operate.</h1>
            <p className="hero__sub">
              We find the assets bleeding value, and recover them.
            </p>
            <div className="hero__ctas">
              <a href="#intelligence" className="btn btn--primary">
                The intelligence edge <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#about" className="btn btn--ghost">
                Who we are
              </a>
            </div>
          </div>
        </div>
        <div className="hero__strip">
          <div className="container hero__strip-inner">
            <div className="stat-block">
              <span className="stat-block__val">
                <StatCounter value={21} suffix=" GW" />
              </span>
              <span className="stat-block__label">Capacity screened</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__val">
                <StatCounter value={73} suffix="%" />
              </span>
              <span className="stat-block__label">Fleet true availability</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__val">
                <StatCounter value={244} prefix="$" suffix="M" />
              </span>
              <span className="stat-block__label">Revenue at risk identified</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE INTELLIGENCE LAYER ===================== */}
      <section id="intelligence" className="section">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <p className="kicker">The edge</p>
              <h2 className="lead">
                Intelligence built from operations
                <span className="green">,</span> not data feeds
                <span className="green">.</span>
              </h2>
              <div className="body-copy">
                <p>
                  Most acquirers evaluate assets from reported metrics. We derive
                  actual performance independently, because we have operated
                  inside the failure modes the rest of the industry is still
                  learning to diagnose.
                </p>
                <p>
                  Our intelligence platform processes fleet-wide operational data
                  across CAISO, ERCOT, and emerging ISO markets to identify assets
                  whose true performance diverges from what their owners believe.
                  This is not a data overlay. It is a decade of field knowledge,
                  systematized, queryable, and compounding with every asset we
                  touch.
                </p>
                <p>
                  The result: we approach acquisition targets already knowing more
                  about their performance than a casual owner does. That is where
                  distressed valuations come from.
                </p>
              </div>
            </div>

            <div>
              <div className="data-card">
                <div className="data-card__head">
                  <span className="data-card__title">
                    Fleet revenue delivery, illustrative
                  </span>
                  <span className="pulse pulse--amber" />
                </div>
                <Heatmap />
              </div>

              <div className="data-card">
                <div className="data-card__head">
                  <span className="data-card__title">What the screen shows</span>
                </div>
                <div className="metric-row">
                  <span className="metric-row__val">21 GW</span>
                  <span className="metric-row__desc">
                    of utility-scale storage capacity independently screened
                    across CAISO and ERCOT
                  </span>
                </div>
                <div className="metric-row">
                  <span className="metric-row__val">73%</span>
                  <span className="metric-row__desc">
                    true dispatch availability across the instrumented fleet,
                    well below what reported metrics suggest
                  </span>
                </div>
                <div className="metric-row">
                  <span className="metric-row__val">$244M</span>
                  <span className="metric-row__desc">
                    of annual revenue at risk identified across underperforming
                    assets in the screen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATEMENT BAND ===================== */}
      <section className="statement-band" aria-label="Field operations">
        <img
          src="/img/band-substation.webp"
          alt="A crew energizing a high-voltage substation bay in the field."
          className="statement-band__img"
          loading="lazy"
        />
        <span className="statement-band__scrim" aria-hidden="true" />
        <div className="container statement-band__inner">
          <p className="statement-band__line">
            Understanding comes from the field, not the spreadsheet.
          </p>
        </div>
      </section>

      {/* ===================== THE LIFECYCLE ===================== */}
      <section id="platform" className="section section--bone">
        <div className="container reveal">
          <div className="section-head">
            <p className="kicker kicker--dark">How we operate</p>
            <h2 className="lead lead--dark">
              Screen. Acquire. Repower. Hold<span className="green-dark">.</span>
            </h2>
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
              Full lifecycle<span className="green">,</span> one operator
              <span className="green">.</span>
            </h2>
            <div className="body-copy">
              <p>
                Every capability below is self-performed across our own portfolio.
                Operating depth is what makes the acquisition thesis credible:
                you can only fix what you buy if you already know how to run it.
              </p>
            </div>
          </div>
          <div className="cap-clusters">
            {CAPABILITY_GROUPS.map((group) => (
              <div key={group.stage} className="cap-cluster">
                <figure className="cap-cluster__photo">
                  <img src={group.photo} alt={group.alt} loading="lazy" />
                  <span className="cap-cluster__photo-scrim" aria-hidden="true" />
                  <div className="cap-cluster__head">
                    <span className="cap-cluster__mark" aria-hidden="true" />
                    <h3 className="cap-cluster__title">{group.stage}</h3>
                  </div>
                </figure>
                <div className="cap-cluster__grid">
                  {group.cards.map((c) => (
                    <article key={c.title} className="cap-card">
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
        </div>
      </section>

      {/* ===================== WHY NOW ===================== */}
      <section id="why-now" className="section section--bone">
        <div className="container">
          <div className="two-col two-col--wide reveal">
            <div>
              <p className="kicker kicker--dark">The moment</p>
              <h2 className="lead lead--dark">
                The fleet is bleeding<span className="green-dark">.</span>
                <br />
                The demand is surging<span className="green-dark">.</span>
              </h2>
            </div>
            <div className="body-copy body-copy--dark">
              <p>
                AI infrastructure and datacenter expansion are creating the
                largest surge in power demand in a generation. Grid-connected
                storage is the critical flexibility layer, but the existing fleet
                is underperforming at industrial scale.
              </p>
              <p>
                Forced outage rates across major ISOs have climbed. Merchant
                revenue has compressed. Assets built during the boom are entering
                warranty expiration windows without the operational depth to
                sustain performance.
              </p>
              <p>
                The result is a growing pool of interconnection-capable assets
                available at distressed valuations, assets whose queue positions
                alone represent irreplaceable future generating capacity. We exist
                because this moment requires operators, not just capital.
              </p>
            </div>
          </div>

          <div className="flywheel-block reveal">
            <p className="flywheel-block__lead">
              And the advantage compounds. Every asset we operate feeds the screen
              that finds the next one.
            </p>
            <Flywheel />
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="section">
        <div className="container">
          <div className="two-col two-col--wide reveal">
            <div>
              <p className="kicker">Who we are</p>
              <h2 className="lead">
                Built from the field up<span className="green">.</span>
              </h2>
              <div className="body-copy">
                <p>
                  Rootwork Energy is an operator-led independent power producer.
                  Our team carries over a decade of field-to-leadership experience
                  across utility-scale BESS and renewables operations, the kind of
                  scar-tissue knowledge that only comes from having been wrong
                  enough times to know what right looks like.
                </p>
                <p>
                  We are not an advisory firm. We are not a fund. We are operators
                  who buy, fix, and hold energy assets, and who built the
                  intelligence layer to find them first.
                </p>
              </div>
              <a href="mailto:info@rootwork.energy" className="btn btn--primary about__cta">
                info@rootwork.energy
              </a>
            </div>

            <div className="about-facts">
              <div className="fact">
                <div className="fact__label">Structure</div>
                <div className="fact__val">Operator-led IPP</div>
              </div>
              <div className="fact">
                <div className="fact__label">Model</div>
                <div className="fact__val">Screen, acquire, repower, hold</div>
              </div>
              <div className="fact">
                <div className="fact__label">Entity</div>
                <div className="fact__val">Rootwork Energy LLC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CAPITAL PARTNERS ===================== */}
      <section id="capital" className="section section--tight investors">
        <div className="container">
          <div className="investors__inner reveal">
            <p className="kicker">For capital partners</p>
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
              We are raising to acquire the first tranche. If the thesis fits your
              mandate, the next step is a 30-minute call where we walk the current
              pipeline view and where you would come in.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
              Start a conversation <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import { EMAIL } from "../site-config";

export const metadata = {
  title: "Platform",
  description:
    "Operator-led origination, repower, and long-term ownership. We find distressed assets by how they perform in the field, recover them, and hold them as an operating platform.",
};

const ROWS = [
  { k: "The field work", rw: "Done by the same operators who diagnose the asset", own: "Subcontracted and managed at arm's length", gen: "Crew dispatched per scope, no continuity" },
  { k: "Where decisions are made", rw: "By people who have run the asset in the field", own: "In the model, executed downstream", gen: "By the client; the contractor executes" },
  { k: "Optimized for", rw: "What the asset actually delivers", own: "Reported availability", gen: "Completing the scope of work" },
  { k: "Accountability", rw: "We own the outcome", own: "Diffused across vendors", gen: "Ends at substantial completion" },
  { k: "How problems surface", rw: "Early, from telemetry and field presence", own: "Late, in the monthly report", gen: "When someone calls them back" },
];

export default function Platform() {
  return (
    <main>
      <section
        className="rw-phero rw-phero--photo"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(20,20,18,0.92), rgba(20,20,18,0.6) 55%, rgba(20,20,18,0.4)), linear-gradient(180deg, rgba(20,20,18,0.42), rgba(20,20,18,0.82)), url('/photos/substation-fence.jpg')" }}
      >
        <div className="container rw-phero__inner">
          <p className="rw-kicker rw-reveal">Platform</p>
          <h1 className="rw-phero__display rw-reveal rw-d1">We buy the gap others <em>cannot see</em>.</h1>
          <p className="rw-phero__lede rw-reveal rw-d2">
            Every proforma assumes the asset performs. Performance is not given. It is
            commissioned, defended, and recovered in the field, and the assets that lose
            it quietly are the ones we acquire, repower, and hold. Our platform is the
            operator judgment that finds them and the execution that brings them back.
          </p>
        </div>
      </section>

      <section className="rw-statement">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal">The foundation</p>
          <p className="rw-statement__text rw-reveal rw-d1">
            Operational truth is the <span className="hl">foundation</span>.
          </p>
          <p className="rw-statement__sub rw-reveal rw-d2">
            The financing, the valuation, the returns: all of it is built on top of one
            question that only the field can answer. Is the asset doing what it was
            supposed to do? We start there, because everything else is downstream of it.
          </p>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <div className="rw-do__head rw-reveal">
            <h2 className="rw-do__title">What operator-led <em>changes</em>.</h2>
          </div>
          <div className="rw-compare-wrap rw-reveal rw-d1">
            <table className="rw-compare">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="is-rw">Rootwork</th>
                  <th scope="col">Typical owner-operator</th>
                  <th scope="col">Generalist contractor</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.k}>
                    <th scope="row">{r.k}</th>
                    <td className="is-rw">{r.rw}</td>
                    <td>{r.own}</td>
                    <td>{r.gen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brand image band — swap in the four raise images when provided */}
      <section style={{ background: "var(--charcoal-deep)" }}>
        <div className="rw-imageband rw-reveal">
          <figure><img src="/photos/bess-row.jpg" alt="Rows of utility-scale battery storage enclosures receding to the horizon." /></figure>
          <figure><img src="/photos/substation-gis.jpg" alt="Gas-insulated switchgear at a high-voltage substation." /></figure>
          <figure><img src="/photos/controls-pcb.jpg" alt="Battery management system control board with field wiring." /></figure>
          <figure><img src="/photos/bess-winter.jpg" alt="Battery storage enclosures operating in a snow-covered field." /></figure>
        </div>
      </section>

      <section className="rw-cta">
        <div className="container">
          <div className="rw-cta__row rw-reveal">
            <h2 className="rw-cta__title">Operational truth, then everything else.</h2>
            <a className="rw-cta__mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

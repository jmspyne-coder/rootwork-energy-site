import { EMAIL } from "../site-config";

export const metadata = {
  title: "Why Rootwork",
  description:
    "Why operator-led execution produces better outcomes than arm's-length ownership or generalist contracting. Operational truth is the foundation everything else is built on.",
};

const ROWS = [
  { k: "The field work", rw: "Done by the same operators who diagnose the asset", own: "Subcontracted and managed at arm's length", gen: "Crew dispatched per scope, no continuity" },
  { k: "Where decisions are made", rw: "By people who have run the asset in the field", own: "In the model, executed downstream", gen: "By the client; the contractor executes" },
  { k: "Optimized for", rw: "What the asset actually delivers", own: "Reported availability", gen: "Completing the scope of work" },
  { k: "Accountability", rw: "We own the outcome", own: "Diffused across vendors", gen: "Ends at substantial completion" },
  { k: "How problems surface", rw: "Early, from telemetry and field presence", own: "Late, in the monthly report", gen: "When someone calls them back" },
];

export default function WhyRootwork() {
  return (
    <main>
      <section className="rw-phero">
        <div className="container rw-phero__inner">
          <p className="rw-kicker rw-reveal">Why Rootwork</p>
          <h1 className="rw-phero__display rw-reveal rw-d1">The model was never the <em>hard part</em>.</h1>
          <p className="rw-phero__lede rw-reveal rw-d2">
            Every proforma assumes the asset performs. Performance is not given. It is
            commissioned, defended, and recovered in the field, and that is the work
            most owners hand to whoever is cheapest.
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
          <figure><img src="/photos/bess-array.jpg" alt="Utility-scale battery energy storage array." /></figure>
          <figure><img src="/photos/substation-switchgear.jpg" alt="Substation switchgear and interconnection structure." /></figure>
          <figure><img src="/photos/controls-board.jpg" alt="Battery management control board inside an enclosure." /></figure>
          <figure><img src="/photos/fleet-winter.jpg" alt="Energy storage equipment in a snow-covered field." /></figure>
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

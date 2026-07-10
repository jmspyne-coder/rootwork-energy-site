import { EMAIL } from "../site-config";

export const metadata = {
  title: "Investors",
  description:
    "Rootwork Energy is building an operator-led independent power producer. For the thesis, pipeline, and model, reach the team.",
};

const PILLARS = [
  { n: "01", t: "Operator-led origination", b: "We find recoverable assets the way operators do: from how they actually perform in the field, not how they screen on a spreadsheet." },
  { n: "02", t: "Recovery, not speculation", b: "Value is created by restoring performance through hands-on execution, on interconnection-capable assets others have written off." },
  { n: "03", t: "Long-term ownership", b: "We operate and hold what we recover, aligning returns with what the asset delivers over its life rather than a quick exit." },
];

export default function Investors() {
  return (
    <main>
      <section
        className="rw-phero rw-phero--photo"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(20,20,18,0.92), rgba(20,20,18,0.6) 55%, rgba(20,20,18,0.4)), linear-gradient(180deg, rgba(20,20,18,0.42), rgba(20,20,18,0.82)), url('/photos/bess-row.jpg')" }}
      >
        <div className="container rw-phero__inner">
          <p className="rw-kicker rw-reveal">Investors</p>
          <h1 className="rw-phero__display rw-reveal rw-d1">Operator-led ownership <em>compounds</em>.</h1>
          <p className="rw-phero__lede rw-reveal rw-d2">
            Rootwork is building an independent power producer on a simple premise: the
            operators who can recover an asset's performance are the ones who should
            own it. We acquire and repower interconnection-capable assets and hold them
            as an operating platform.
          </p>
        </div>
      </section>

      <section className="rw-statement">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal">The premise</p>
          <p className="rw-statement__text rw-reveal rw-d1">
            We measure value by what an asset <span className="hl">delivers</span>.
          </p>
          <p className="rw-statement__sub rw-reveal rw-d2">
            Not by what it was modeled to deliver. That distinction is the entire edge,
            and it only shows up for owners who have run these systems in the field.
            Rootwork's proprietary analytics platform monitors asset-level performance
            across the US fleet, identifying acquisition candidates before they reach
            the market.
          </p>
        </div>
      </section>

      <section className="rw-statement" style={{ background: "var(--charcoal)" }}>
        <div className="container">
          <div className="rw-grid3 rw-reveal">
            {PILLARS.map((p) => (
              <article key={p.n} className="rw-pill">
                <span className="rw-pill__n">{p.n}</span>
                <h3 className="rw-pill__t">{p.t}</h3>
                <p className="rw-pill__b">{p.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal" style={{ color: "var(--green)" }}>Get in touch</p>
          <h2 className="rw-do__title rw-reveal rw-d1" style={{ marginBottom: "1.6rem" }}>
            We share the thesis directly.
          </h2>
          <p className="lede rw-reveal rw-d2" style={{ marginBottom: "2rem" }}>
            For the deck, the pipeline, and the model, reach the team. We will set up a
            conversation and a data room for qualified parties.
          </p>
          <a className="rw-mailblock rw-reveal rw-d3" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </section>
    </main>
  );
}

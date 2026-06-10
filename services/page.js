import { EMAIL } from "../site-config";

export const metadata = {
  title: "Services",
  description:
    "Operator-led commissioning, operations, controls, and field execution for asset owners and developers across CAISO and ERCOT.",
};

const OWNERS = [
  { n: "01", t: "Commissioning & energization", b: "Systems brought online and up to full operation: testing, integration, and a clean handover into commercial service." },
  { n: "02", t: "Operations & maintenance", b: "Disciplined preventive and corrective maintenance, plus active performance management to hold availability through every season." },
  { n: "03", t: "Controls & energy management", b: "We configure and optimize controls and EMS so assets dispatch reliably and deliver what they are contracted to deliver." },
  { n: "04", t: "Performance recovery", b: "We diagnose and restore output on systems running below their potential, including assets others have written off." },
];

const DEVELOPERS = [
  { n: "01", t: "Commissioning & startup management", b: "Owner's-side commissioning oversight, integrator and EPC coordination, and punchlist-to-energization on your timeline." },
  { n: "02", t: "Interconnection & substation", b: "High-voltage interconnection and substation scope and coordination to keep your project safely and fully deliverable to the grid." },
  { n: "03", t: "Operational readiness", b: "Independent technical review so the asset you are building or acquiring will actually perform against its proforma." },
  { n: "04", t: "Diagnostics & reporting", b: "Field-grounded performance reporting that tells you what an asset is really doing, not what the model assumed it would." },
];

export default function Services() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero page-hero--photo">
        <div
          className="hero__media"
          style={{ backgroundImage: "url(/photos/controls-board.jpg)" }}
        />
        <div className="container">
          <p className="eyebrow on-dark">For owners &amp; developers</p>
          <h1 className="page-title">Operator-led execution, <em>on your assets</em>.</h1>
          <p className="page-lede">
            The hands-on capability we bring to our own operations is available to
            the owners and developers who need it executed right. Commissioning,
            operations, controls, and the field work that decides whether an asset
            delivers what its model promised.
          </p>
        </div>
      </section>

      {/* Bridge */}
      <section className="band-bone section">
        <div className="container">
          <p className="eyebrow on-light">Why Rootwork</p>
          <p className="lede">
            Rootwork is an operating company. We commission, energize, and run
            utility-scale storage and renewables, and we bring that same hands-on
            capability to the owners and developers who need it executed right. Hire
            Rootwork and you are not hiring a staffing desk or a generalist
            contractor. You are hiring an operator who has spent over a decade in the
            field across CAISO and ERCOT, and who treats your asset&rsquo;s field
            reality as the thing that actually matters.
          </p>
        </div>
      </section>

      {/* For owners */}
      <section className="model section">
        <div className="container">
          <p className="eyebrow on-dark">For asset owners</p>
          <h2 className="section-title">Assets in or entering service.</h2>
          <div className="model-grid">
            {OWNERS.map((m) => (
              <div key={m.n} className="model-item">
                <span className="model-num">{m.n}</span>
                <h3 className="model-title">{m.t}</h3>
                <p className="model-blurb">{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For developers */}
      <section className="band-charcoal section">
        <div className="container">
          <p className="eyebrow on-dark">For developers</p>
          <h2 className="section-title">Projects in flight.</h2>
          <div className="model-grid">
            {DEVELOPERS.map((m) => (
              <div key={m.n} className="model-item">
                <span className="model-num">{m.n}</span>
                <h3 className="model-title">{m.t}</h3>
                <p className="model-blurb">{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="band-bone section">
        <div className="container">
          <p className="eyebrow on-light">What you are buying</p>
          <p className="lede">
            Judgment in the field. The distance between a model and a megawatt is
            execution: firmware that misreports its own state, cooling that fails in
            the August heat, warranty scope that no one chases. We have worked in
            that gap for over a decade and built the diagnostics to close it. That is
            the difference between an asset that is available on paper and one that
            delivers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="band-charcoal section">
        <div className="container">
          <p className="eyebrow on-dark">Get in touch</p>
          <p className="lede lede--dark" style={{ marginBottom: "1.5rem" }}>
            Building or operating an asset that is not performing the way it should?
            Let&rsquo;s talk.
          </p>
          <a className="contact__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}

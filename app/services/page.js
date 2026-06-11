import Link from "next/link";
import Image from "next/image";
import { EMAIL } from "../site-config";

export const metadata = {
  title: "Services",
  description:
    "Operator-led commissioning, operations, controls, recovery, and development support for asset owners and developers across CAISO and ERCOT.",
};

const OWNERS = [
  { t: "Commissioning & energization", b: "Systems brought online and into commercial service: testing, integration, and a clean handover." },
  { t: "Operations & maintenance", b: "Preventive and corrective maintenance with active performance management to hold availability through every season." },
  { t: "Controls & energy management", b: "Controls and EMS configured and optimized so assets dispatch reliably and deliver what they are contracted to deliver." },
  { t: "Performance recovery", b: "Diagnose and restore output on systems running below their potential, including assets others have written off." },
];
const DEVS = [
  { t: "Commissioning & startup management", b: "Owner's-side commissioning oversight, integrator and EPC coordination, punchlist to energization on your timeline." },
  { t: "Interconnection & substation", b: "High-voltage interconnection and substation scope and coordination to keep a project safely and fully deliverable to the grid." },
  { t: "Operational readiness", b: "Independent technical review so the asset you are building or acquiring will actually perform against its proforma." },
  { t: "Diagnostics & reporting", b: "Field-grounded performance reporting that shows what an asset is really doing, not what the model assumed it would." },
];

function Grid({ items }) {
  return (
    <div className="rw-grid2 rw-reveal rw-d1">
      {items.map((c) => (
        <article key={c.t} className="rw-cell">
          <span className="rw-cell__tick" />
          <h3 className="rw-cell__t">{c.t}</h3>
          <p className="rw-cell__b">{c.b}</p>
        </article>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <main>
      <section className="rw-phero">
        <div className="container rw-phero__inner">
          <p className="rw-kicker rw-reveal">For owners &amp; developers</p>
          <h1 className="rw-phero__display rw-reveal rw-d1">Execution, on your <em>assets</em>.</h1>
          <p className="rw-phero__lede rw-reveal rw-d2">
            The hands-on capability we bring to our own operations, available to the
            owners and developers who need it executed right. Commissioning,
            operations, controls, and the field work that decides whether an asset
            delivers what its model promised.
          </p>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <div className="rw-do__head rw-reveal">
            <h2 className="rw-do__title">For asset <em>owners</em>.</h2>
            <span className="textlink on-light" style={{ pointerEvents: "none" }}>Assets in or entering service</span>
          </div>
          <Grid items={OWNERS} />
        </div>
      </section>

      <section className="rw-statement">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal">For developers</p>
          <p className="rw-statement__text rw-reveal rw-d1">Projects in <span className="hl">flight</span>.</p>
          <p className="rw-statement__sub rw-reveal rw-d2">
            From owner's-side commissioning through interconnection and operational
            readiness, we work the gap between a project on paper and an asset that
            performs.
          </p>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <Grid items={DEVS} />
        </div>
      </section>

      <section className="rw-statement">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal">What you are buying</p>
          <p className="rw-statement__text rw-reveal rw-d1">
            Judgment in the <span className="hl">field</span>.
          </p>
          <p className="rw-statement__sub rw-reveal rw-d2">
            The distance between a model and a megawatt is execution: firmware that
            misreports its own state, cooling that fails in the August heat, warranty
            scope no one chases. We have worked in that gap for over a decade and built
            the diagnostics to close it.
          </p>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <div className="rw-split rw-reveal">
            <div className="rw-split__media">
              <Image src="/photos/commissioning-field.jpg" alt="Engineer reviewing commissioning documentation at an energized substation." fill sizes="(max-width:880px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <div>
              <p className="rw-statement__eyebrow" style={{ color: "var(--green)" }}>In the field</p>
              <h2 className="rw-split__t">Commissioning is where the <em>proforma meets reality</em>.</h2>
              <p className="lede">
                We are on site through energization: testing, integration, punchlist,
                and the handover that decides whether an asset starts its life
                performing or playing catch-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rw-cta">
        <div className="container">
          <div className="rw-cta__row rw-reveal">
            <h2 className="rw-cta__title">Building or operating something that should perform better?</h2>
            <a className="rw-cta__mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

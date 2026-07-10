import Link from "next/link";
import Image from "next/image";
import { EMAIL } from "../site-config";

export const metadata = {
  title: "Capabilities",
  description:
    "The execution we bring to every asset we acquire: commissioning, operational diagnostics, performance recovery, and long-term operations and maintenance.",
};

const CAPS = [
  { t: "Commissioning & integration", b: "We manage the full commissioning lifecycle for every asset in our portfolio, from energization through performance acceptance." },
  { t: "Operational diagnostics", b: "Performance monitoring built from field experience, not spec sheets. We identify degradation patterns and dispatch failures that standard SCADA monitoring misses." },
  { t: "Performance recovery", b: "Systematic repower programs that restore underperforming assets to design-level dispatch. This is the core of our acquisition thesis." },
  { t: "O&M management", b: "Long-term operations and maintenance for owned assets, with the option to extend these capabilities to strategic partners." },
];

export default function Capabilities() {
  return (
    <main>
      <section
        className="rw-phero rw-phero--photo"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(20,20,18,0.92), rgba(20,20,18,0.6) 55%, rgba(20,20,18,0.4)), linear-gradient(180deg, rgba(20,20,18,0.42), rgba(20,20,18,0.82)), url('/photos/substation-gis.jpg')" }}
      >
        <div className="container rw-phero__inner">
          <p className="rw-kicker rw-reveal">Capabilities</p>
          <h1 className="rw-phero__display rw-reveal rw-d1">What we bring to every <em>asset</em>.</h1>
          <p className="rw-phero__lede rw-reveal rw-d2">
            These are the capabilities we run on the assets we own and repower. The same
            hands-on execution that decides whether an asset delivers what its model
            promised, applied to every acquisition we make.
          </p>
        </div>
      </section>

      <section className="rw-do">
        <div className="container">
          <div className="rw-do__head rw-reveal">
            <h2 className="rw-do__title">Execution, on every <em>asset we own</em>.</h2>
            <Link href="/platform" className="textlink on-light">The platform →</Link>
          </div>
          <div className="rw-grid2 rw-reveal rw-d1">
            {CAPS.map((c) => (
              <article key={c.t} className="rw-cell">
                <span className="rw-cell__tick" />
                <h3 className="rw-cell__t">{c.t}</h3>
                <p className="rw-cell__b">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rw-statement">
        <div className="container">
          <p className="rw-statement__eyebrow rw-reveal">Where recovery happens</p>
          <p className="rw-statement__text rw-reveal rw-d1">
            Judgment in the <span className="hl">field</span>.
          </p>
          <p className="rw-statement__sub rw-reveal rw-d2">
            The distance between a model and a megawatt is execution: firmware that
            misreports its own state, cooling that fails in the August heat, warranty
            scope no one chases. We have worked in that gap for over a decade and built
            the diagnostics to close it. It is why we can buy an asset others have
            written off and bring it back.
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
                performing or playing catch-up. It is the same discipline we apply the
                day we take an underperforming asset into our own hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rw-cta">
        <div className="container">
          <div className="rw-cta__row rw-reveal">
            <h2 className="rw-cta__title">Talk to an operator.</h2>
            <a className="rw-cta__mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

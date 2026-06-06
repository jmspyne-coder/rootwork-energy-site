import Image from "next/image";
import Link from "next/link";
import { EMAIL, CAPABILITIES } from "../site-config";

export const metadata = {
  title: "Capabilities",
  description:
    "Operator-led capabilities across the energy asset lifecycle: screening, acquisition, repower and performance recovery, commissioning, operations and maintenance, controls, and interconnection.",
};

export default function Capabilities() {
  return (
    <main>
      {/* Page hero */}
      <section className="band-charcoal page-hero">
        <div className="container">
          <p className="eyebrow on-dark">Capabilities</p>
          <h1 className="page-title">What we do, across the asset lifecycle.</h1>
          <p className="page-lede">
            Operator-led means we do the work ourselves. These are the
            capabilities we bring to every asset we acquire, recover, and hold.
          </p>
        </div>
      </section>

      {/* Capability rows */}
      <section className="band-bone section">
        <div className="container cap-list">
          {CAPABILITIES.map((c, i) => (
            <div
              key={c.title}
              className={`split${i % 2 === 1 ? " split--reverse" : ""}`}
            >
              <div className="split__text">
                <h2 className="cap-title">{c.title}</h2>
                <p className="cap-blurb">{c.blurb}</p>
              </div>
              <div className="split__media">
                <Image
                  src={c.img}
                  alt={c.alt}
                  width={640}
                  height={480}
                  className="photo"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="band-charcoal section">
        <div className="container">
          <p className="eyebrow on-dark">Get in touch</p>
          <p className="lede lede--dark" style={{ marginBottom: "1.5rem" }}>
            For asset, partnership, and investment inquiries.
          </p>
          <a className="contact__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}

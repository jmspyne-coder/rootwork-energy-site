import { EMAIL, CAPABILITIES } from "../site-config";

export const metadata = {
  title: "Capabilities",
  description:
    "Operator-led capabilities across the energy asset lifecycle: screening, acquisition, repower and performance recovery, commissioning, operations and maintenance, controls, and interconnection.",
};

const S = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const KNOB = "#ECE9E1";

const ICONS = [
  // Asset screening & diligence — magnifier
  (
    <svg key="i0" {...S}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.2" y2="15.2" />
    </svg>
  ),
  // Acquisition — acquire into portfolio
  (
    <svg key="i1" {...S}>
      <path d="M12 3v10" />
      <path d="M8 9.5 12 13.5 16 9.5" />
      <path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" />
    </svg>
  ),
  // Repower & performance recovery — trend up
  (
    <svg key="i2" {...S}>
      <polyline points="3 16.5 9 10.5 13 14.5 21 6.5" />
      <polyline points="15.5 6.5 21 6.5 21 12" />
    </svg>
  ),
  // Commissioning & energization — power
  (
    <svg key="i3" {...S}>
      <path d="M12 3v8.5" />
      <path d="M7.6 6.4a7 7 0 1 0 8.8 0" />
    </svg>
  ),
  // Operations & maintenance — gear
  (
    <svg key="i4" {...S}>
      <circle cx="12" cy="12" r="3.3" />
      <path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M17.8 12h3.7M5.2 5.2l2.3 2.3M16.5 16.5l2.3 2.3M18.8 5.2l-2.3 2.3M7.5 16.5l-2.3 2.3" />
    </svg>
  ),
  // Controls & energy management — sliders
  (
    <svg key="i5" {...S}>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
      <circle cx="15" cy="7" r="2.1" fill={KNOB} />
      <circle cx="9" cy="12" r="2.1" fill={KNOB} />
      <circle cx="16" cy="17" r="2.1" fill={KNOB} />
    </svg>
  ),
  // Interconnection & substation — connected nodes
  (
    <svg key="i6" {...S}>
      <circle cx="6" cy="7" r="2.1" />
      <circle cx="18" cy="7" r="2.1" />
      <circle cx="12" cy="17.5" r="2.1" />
      <path d="M8 7h8M7.4 8.6 10.8 15.6M16.6 8.6 13.2 15.6" />
    </svg>
  ),
];

export default function Capabilities() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero page-hero--photo">
        <div
          className="hero__media"
          style={{ backgroundImage: "url(/photos/substation-switchgear.jpg)" }}
        />
        <div className="container">
          <p className="eyebrow on-dark">Capabilities</p>
          <h1 className="page-title">What we do, across the <em>asset lifecycle</em>.</h1>
          <p className="page-lede">
            Operator-led means we do the work ourselves. These are the
            capabilities we bring to every asset we acquire, recover, and hold.
          </p>
        </div>
      </section>

      {/* Capability icon grid */}
      <section className="band-bone section">
        <div className="container">
          <div className="cap-iconlist reveal-up">
            {CAPABILITIES.map((c, i) => (
              <article key={c.title} className="cap-cell">
                <span className="cap-icon">{ICONS[i]}</span>
                <span className="cap-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="cap-title cap-title--sm">{c.title}</h2>
                <p className="cap-blurb">{c.blurb}</p>
              </article>
            ))}
          </div>
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

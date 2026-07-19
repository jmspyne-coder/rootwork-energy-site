// The compounding edge, drawn as a loop: operate -> learn -> screen ->
// acquire -> repower -> operate. Structured markup + inline SVG chevrons
// (never typed arrow characters); flows horizontally on desktop, stacks
// vertically on mobile. No client JS — the reveal animation rides .reveal.

const NODES = [
  { step: "01", title: "Operate", desc: "We run the assets we own." },
  { step: "02", title: "Learn", desc: "Every failure mode gets absorbed." },
  { step: "03", title: "Screen", desc: "The distress signal sharpens." },
  { step: "04", title: "Acquire", desc: "Better targets, lower basis." },
  { step: "05", title: "Repower", desc: "Performance recovered, fleet grows." },
];

function Chevron() {
  return (
    <svg
      className="fw-chev"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      aria-hidden="true"
    >
      <path
        d="M7 4l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Flywheel() {
  return (
    <div
      className="flywheel"
      role="img"
      aria-label="The compounding loop: operate, learn, screen, acquire, repower, and back to operate."
    >
      <div className="fw-track">
        {NODES.map((n, i) => (
          <div className="fw-cell" key={n.step}>
            <div className="fw-node">
              <span className="fw-node__step">{n.step}</span>
              <span className="fw-node__title">{n.title}</span>
              <span className="fw-node__desc">{n.desc}</span>
            </div>
            {i < NODES.length - 1 && <Chevron />}
          </div>
        ))}
      </div>

      <div className="fw-return" aria-hidden="true">
        <svg
          className="fw-chev fw-chev--back"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            d="M15 4l-7 7 7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="fw-return__line" />
        <span className="fw-return__label">
          Each cycle sharpens the screen that finds the next asset
        </span>
      </div>
    </div>
  );
}

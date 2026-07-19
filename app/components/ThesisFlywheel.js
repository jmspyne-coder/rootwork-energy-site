// Compounding-thesis flywheel. Structured layout + inline SVG connectors
// (no typed arrow/logic characters). Flows horizontally on desktop, stacks
// vertically on mobile. Static + CSS-only motion (respects reduced-motion).

const NODES = [
  "More assets deployed, more operational failures surface.",
  "More failures, a deeper pool of distressed targets.",
  "Every asset we recover sharpens the intelligence.",
  "Sharper intelligence, faster and cheaper acquisitions.",
];

function Chevron() {
  return (
    <svg
      className="fw-chevron"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 4l8 8-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThesisFlywheel() {
  return (
    <div className="flywheel" role="img" aria-label="The compounding flywheel: more deployed assets surface more failures, which deepen the pool of distressed targets, which Rootwork recovers, which sharpens the intelligence, which drives faster and cheaper acquisitions, and the cycle repeats.">
      <div className="fw-head">The compounding flywheel</div>

      <div className="fw-track">
        {NODES.map((text, i) => (
          <div className="fw-cell" key={i}>
            <div className="fw-node">
              <span className="fw-node__idx">{i + 1}</span>
              <p className="fw-node__text">{text}</p>
            </div>
            <span className="fw-link" aria-hidden="true">
              <Chevron />
            </span>
          </div>
        ))}
      </div>

      <div className="fw-loop" aria-hidden="true">
        <svg
          className="fw-loop__svg"
          viewBox="0 0 60 24"
          width="60"
          height="24"
          focusable="false"
        >
          <path
            d="M54 6 H14 a8 8 0 0 0 -8 8 v0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M10 10 l-4 4 4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="fw-loop__text">
          Every recovered asset sharpens the next screen. The cycle compounds
          with scale.
        </span>
      </div>

      <div className="fw-concl">
        <span className="fw-concl__mark" aria-hidden="true">
          <svg viewBox="0 0 20 18" width="20" height="18" focusable="false">
            <circle cx="10" cy="4" r="2.4" fill="currentColor" />
            <circle cx="4" cy="14" r="2.4" fill="currentColor" />
            <circle cx="16" cy="14" r="2.4" fill="currentColor" />
          </svg>
        </span>
        <p>
          AI load growth is lifting the interconnection-queue premium faster than
          the fleet can be operated. Rootwork sits where that gap is widest.
        </p>
      </div>
    </div>
  );
}

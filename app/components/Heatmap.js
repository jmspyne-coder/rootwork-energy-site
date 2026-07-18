// Illustrative fleet-revenue-delivery grid (12 x 8).
// Deterministic (fixed seed) so server and client render identically —
// no hydration mismatch. Distribution ~60% performing / 25% under / 15% distressed.

const COLS = 12;
const ROWS = 8;

// Small seeded PRNG (mulberry32) with a fixed seed → stable output.
function makeCells() {
  let s = 0x9e3779b9;
  const rand = () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const cells = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    const r = rand();
    let cls = "cell--ok";
    if (r > 0.85) cls = "cell--bad";
    else if (r > 0.6) cls = "cell--warn";
    cells.push(cls);
  }
  return cells;
}

const CELLS = makeCells();

export default function Heatmap() {
  return (
    <div>
      <div className="heatmap" aria-hidden="true">
        {CELLS.map((cls, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          return (
            <span
              key={i}
              className={`heatmap__cell ${cls}`}
              style={{ transitionDelay: `${(col + row) * 28}ms` }}
            />
          );
        })}
      </div>
      <div className="heatmap__legend">
        <span className="legend-item">
          <span className="legend-swatch cell--ok" />
          Performing
        </span>
        <span className="legend-item">
          <span className="legend-swatch cell--warn" />
          Underdelivering
        </span>
        <span className="legend-item">
          <span className="legend-swatch cell--bad" />
          Distressed
        </span>
      </div>
    </div>
  );
}

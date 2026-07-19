"use client";
import { useState } from "react";

// Canon model: Screen -> Acquire -> Repower -> Operate and Hold.
const NODES = [
  {
    label: "Screen",
    short: "See distress before the market does",
    text: "Our proprietary intelligence platform continuously scans fleet-wide performance data to identify assets whose real output diverges from reported metrics. We find what the market has not yet priced.",
  },
  {
    label: "Acquire",
    short: "Buy the queue position competitors cannot rebuild",
    text: "We acquire interconnection-capable assets at distressed valuations, operating facilities with queue positions that cannot be rebuilt from scratch. The queue is the asset.",
  },
  {
    label: "Repower",
    short: "Recover lost capacity, not rebuild",
    text: "Proprietary repower execution recovers lost capacity through targeted intervention across chemistry, controls, inverter hardware, and dispatch optimization. Not a rebuild. A recovery.",
  },
  {
    label: "Operate and Hold",
    short: "Intelligence compounds with every asset",
    text: "We hold long-term for the cash flows and the compounding intelligence. Every asset operated deepens the data layer, sharpens the screen, and widens the moat.",
  },
];

export default function LifecycleNavigator() {
  const [active, setActive] = useState(0);
  const node = NODES[active];

  return (
    <div className="lifecycle">
      <div className="lc-nav" role="tablist" aria-label="Lifecycle stages">
        {NODES.map((n, i) => (
          <button
            key={n.label}
            role="tab"
            aria-selected={i === active}
            className={`lc-node${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="lc-node__num">{i + 1}</span>
            <span>
              <span className="lc-node__label">{n.label}</span>
              <span className="lc-node__desc">{n.short}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="lc-panel">
        <div className="lc-panel__kicker">
          Stage {active + 1} of {NODES.length}
        </div>
        <h3 className="lc-panel__title">{node.label}</h3>
        <p className="lc-panel__text">{node.text}</p>
        <div className="lc-progress" aria-hidden="true">
          {NODES.map((n, i) => (
            <span
              key={n.label}
              className={`lc-progress__seg${i <= active ? " is-lit" : ""}`}
            />
          ))}
        </div>
        <div className="lc-progress__label">Each stage feeds the next.</div>
      </div>
    </div>
  );
}

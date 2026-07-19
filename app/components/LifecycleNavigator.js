"use client";
import { useState } from "react";

const NODES = [
  {
    label: "Screen",
    short: "See distress before the market does",
    text: "Continuous ingestion of fleet data, ISO dispatch patterns, and public filings, cross-referenced against independently derived performance benchmarks. We identify the gap between what an asset should earn in its market and what it actually delivers. That gap is the signal.",
  },
  {
    label: "Acquire",
    short: "Price the recovery, move before the market does",
    text: "Every target is modeled against real recovery cost and timeline, not the seller's narrative, with parametric field-validated construction estimation and repower economics stress-tested against the dispatch environment the asset actually sits in. Because the intelligence layer surfaces candidates independently, Rootwork engages owners directly, often before a formal sale process begins, for better pricing and cleaner structure.",
  },
  {
    label: "Repower",
    short: "Fix what's actually broken",
    text: "A decade of utility-scale BESS commissioning and O&M. Every repower plan is built from direct equipment-level diagnosis: PCS behavior, thermal management, BMS configuration, protection coordination. Not consultant reports.",
  },
  {
    label: "Operate & Hold",
    short: "Intelligence compounds with every asset",
    text: "Continuous performance monitoring, NERC compliance, and revenue optimization. Every asset operated feeds data back into the screening layer, sharpening the next acquisition. The platform gets smarter with scale.",
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
        <div className="lc-progress__label">Each stage feeds data forward.</div>
      </div>
    </div>
  );
}

// Single source of truth for shared content.

// Google Analytics 4 Measurement ID (looks like "G-XXXXXXXXXX").
// Leave as "" to disable analytics. Paste your ID here to turn it on.
export const GA_ID = "";

export const EMAIL = "info@rootwork.energy";

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
  { href: "/investors", label: "Investors" },
];

export const FOOTER_NAV = [
  ...[
    { href: "/about", label: "About" },
    { href: "/platform", label: "Platform" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact" },
  ],
];

export const CAPABILITIES = [
  {
    title: "Diligence & operational readiness",
    blurb:
      "Independent technical and commercial review of whether an asset will actually perform against its plan, run on every acquisition target before we buy.",
    img: "/photos/substation-yard.jpg",
    alt: "Grid-connected substation switchyard behind a perimeter fence.",
  },
  {
    title: "Repower & performance recovery",
    blurb:
      "Hands-on execution to restore output and availability on systems running below their potential, including assets others have written off.",
    img: "/photos/battery-modules.jpg",
    alt: "Battery module rack with cooling fans inside a storage enclosure.",
  },
  {
    title: "Commissioning & energization",
    blurb:
      "We bring systems online and up to full operation, with testing, integration, and a clean handover into commercial service.",
    img: "/photos/substation-breaker.jpg",
    alt: "High-voltage circuit breaker and bushings at an energized substation.",
  },
  {
    title: "Operations & maintenance",
    blurb:
      "Disciplined preventive and corrective maintenance, plus active performance management to hold availability over time and through every season.",
    img: "/photos/fleet-winter.jpg",
    alt: "Energy storage and transformer equipment in a snow-covered field.",
  },
  {
    title: "Controls & energy management",
    blurb:
      "We configure and optimize controls and energy management so assets dispatch reliably and deliver what they are contracted to deliver.",
    img: "/photos/controls-board.jpg",
    alt: "Battery management control board wired inside an equipment enclosure.",
  },
  {
    title: "Interconnection & substation",
    blurb:
      "We coordinate and manage high-voltage interconnection and substation scope with licensed contractors, keeping assets safely and fully deliverable to the grid.",
    img: "/photos/substation-switchgear.jpg",
    alt: "Substation switchgear and high-voltage interconnection structure.",
  },
];

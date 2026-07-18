// Single source of truth for shared content.

// Google Analytics 4 Measurement ID (looks like "G-XXXXXXXXXX").
// Leave as "" to disable analytics. Paste your ID here to turn it on.
export const GA_ID = "";

export const EMAIL = "info@rootwork.energy";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/about", label: "Who we are" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/about", label: "Who we are" },
  { href: "/contact", label: "Contact" },
];

// Three directional proof stats, shared by Home and /intelligence.
// PR-REVIEW: James verifies these three figures against MotherDuck before merge.
export const STATS = [
  { value: "20+ GW", label: "of operating fleet screened" },
  { value: "~73%", label: "true fleet availability measured" },
  { value: "Nine figures", label: "of annual revenue at risk identified" },
];

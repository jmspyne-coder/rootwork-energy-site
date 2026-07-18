"use client";
import { useEffect, useState } from "react";
import { NAV } from "../site-config";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav${solid || open ? " is-solid" : ""}${open ? " is-open" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Rootwork Energy home" onClick={close}>
          {/* Reversed wordmark PNG — never re-typeset */}
          <img
            src="/wordmark-reversed.png"
            alt="Rootwork Energy"
            className="nav__wordmark"
            width={700}
            height={167}
          />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#investors" className="nav__cta" onClick={close}>
            Capital Partners
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav__burger${open ? " is-x" : ""}`} />
        </button>
      </div>
    </header>
  );
}

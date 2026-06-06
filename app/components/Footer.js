import Link from "next/link";
import Image from "next/image";
import { EMAIL, NAV } from "../site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" aria-label="Rootwork Energy — home">
            <Image
              className="footer__wordmark"
              src="/wordmark-light.png"
              alt="Rootwork Energy"
              width={1009}
              height={246}
            />
          </Link>
          <p className="footer__tagline">
            Operator-led independent power producer. Built to recover.
          </p>
        </div>
        <div className="footer__right">
          <nav className="footer__links" aria-label="Footer">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className="footer__link">
                {l.label}
              </Link>
            ))}
          </nav>
          <a className="footer__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <span className="footer__copy">
            © {year} Rootwork Energy LLC. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

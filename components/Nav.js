import Link from "next/link";
import Image from "next/image";
import { NAV } from "../site-config";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" aria-label="Rootwork Energy home">
          <Image
            src="/wordmark-light.png"
            alt="Rootwork Energy"
            width={1009}
            height={246}
            className="nav__wordmark"
            priority
          />
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className="nav__link">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

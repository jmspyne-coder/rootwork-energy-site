"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Capabilities has been folded into Services. This route redirects there.
export default function Capabilities() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/services");
  }, [router]);
  return (
    <main>
      <section className="rw-phero">
        <div className="container rw-phero__inner">
          <p className="rw-kicker">Capabilities</p>
          <h1 className="rw-phero__display">Now under <em>Services</em>.</h1>
          <p className="rw-phero__lede">
            Taking you there now. <Link href="/services" className="textlink on-dark">Go to Services →</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

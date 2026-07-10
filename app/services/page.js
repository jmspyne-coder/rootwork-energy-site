"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Services has been reframed as Capabilities. This route redirects there.
export default function Services() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/capabilities");
  }, [router]);
  return (
    <main>
      <section className="rw-phero">
        <div className="container rw-phero__inner">
          <p className="rw-kicker">Capabilities</p>
          <h1 className="rw-phero__display">Now under <em>Capabilities</em>.</h1>
          <p className="rw-phero__lede">
            Taking you there now. <Link href="/capabilities" className="textlink on-dark">Go to Capabilities →</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

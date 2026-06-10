// app/services/page.js
// Rootwork Energy — Services (For Owners & Developers)
// Self-contained: brings its own styles scoped under `.svc`, so it does NOT depend
// on class names in globals.css. Nav + Footer are rendered by app/layout.js, so this
// file is body-only.
//
// ONE-LINE CHECK before you ship: open app/about/page.js. If it STARTS with <Nav/>
// and ENDS with <Footer/>, your pages render their own chrome — in that case add
//   import Nav from "../components/Nav";
//   import Footer from "../components/Footer";
// and wrap the <main> below as  <><Nav/>{ ...main... }<Footer/></>.
// If about/page.js is just the page body (no Nav/Footer), leave this file as-is.

export const metadata = {
  title: "Services — Rootwork Energy",
  description:
    "Operator-led commissioning, operations, controls, and field execution for asset owners and developers across CAISO and ERCOT.",
};

export default function Services() {
  return (
    <main className="svc">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&display=swap"
      />

      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-bg" />
        <div className="svc-hero-scrim" />
        <div className="svc-wrap svc-hero-inner">
          <p className="svc-eyebrow">For owners and developers</p>
          <h1 className="svc-h1">
            Operator-led execution, <em className="svc-em">on your assets.</em>
          </h1>
          <p className="svc-lede">
            The same hands-on capability we bring to the assets we own is available
            to the owners and developers who need it executed right. Commissioning,
            operations, controls, and the field work that decides whether an asset
            delivers what its model promised.
          </p>
        </div>
      </section>

      {/* BRIDGE */}
      <section className="svc-band">
        <div className="svc-wrap">
          <p className="svc-bridge">
            Rootwork is an operating company first. We acquire and recover
            underperforming assets because we know how to make them run, and that
            same execution capability is available as a service. Hire Rootwork and
            you are not hiring a staffing desk or a generalist contractor. You are
            hiring an operator who has commissioned, energized, and run utility-scale
            storage and renewables across CAISO and ERCOT, and who treats your
            asset&apos;s field reality as the thing that actually matters.
          </p>
        </div>
      </section>

      {/* FOR OWNERS */}
      <section className="svc-band svc-band-alt">
        <div className="svc-wrap">
          <p className="svc-label">For asset owners</p>
          <h2 className="svc-h2">Assets in or entering service.</h2>
          <div className="svc-grid">
            <article className="svc-card">
              <h3>Commissioning and energization</h3>
              <p>We bring new systems online and up to full operation. Testing, integration, and a clean handover into commercial service.</p>
            </article>
            <article className="svc-card">
              <h3>Operations and maintenance</h3>
              <p>Disciplined preventive and corrective maintenance, plus active performance management to hold availability through every season.</p>
            </article>
            <article className="svc-card">
              <h3>Controls and energy management</h3>
              <p>We configure and optimize controls and EMS so assets dispatch reliably and deliver what they are contracted to deliver.</p>
            </article>
            <article className="svc-card">
              <h3>Performance recovery</h3>
              <p>We diagnose and restore output on systems underperforming relative to their potential, including assets others have written off.</p>
            </article>
          </div>
        </div>
      </section>

      {/* FOR DEVELOPERS */}
      <section className="svc-band">
        <div className="svc-wrap">
          <p className="svc-label">For developers</p>
          <h2 className="svc-h2">Projects in flight.</h2>
          <div className="svc-grid">
            <article className="svc-card">
              <h3>Owner&apos;s-side commissioning and startup management</h3>
              <p>Independent commissioning oversight, integrator and EPC coordination, and punchlist-to-energization on your timeline.</p>
            </article>
            <article className="svc-card">
              <h3>Interconnection and substation support</h3>
              <p>High-voltage interconnection and substation scope and coordination to keep your project safely and fully deliverable to the grid.</p>
            </article>
            <article className="svc-card">
              <h3>Operational readiness and diligence</h3>
              <p>Independent technical review so the asset you are building or acquiring will actually perform against its proforma.</p>
            </article>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="svc-close">
        <div className="svc-close-bg" />
        <div className="svc-close-scrim" />
        <div className="svc-wrap svc-close-inner">
          <p className="svc-close-text">
            What you are actually buying is judgment in the field. The distance
            between a model and a megawatt is execution: firmware that misreports its
            own state, cooling that fails in the August heat, warranty scope that no
            one chases. We have worked in that gap for over a decade and built the
            diagnostics to close it. That is the difference between an asset that is
            available on paper and one that delivers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-wrap">
          <p className="svc-label">Get in touch</p>
          <p className="svc-cta-line">
            Building or operating an asset that is not performing the way it should?
            Let&apos;s talk.
          </p>
          <a className="svc-cta-mail" href="mailto:contact@rootwork.energy">
            contact@rootwork.energy
          </a>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .svc { color:#EDE9E0; background:#2A2A26; }
        .svc-wrap { max-width:1120px; margin:0 auto; padding:0 1.5rem; }

        .svc-hero { position:relative; overflow:hidden; min-height:62vh; display:flex; align-items:flex-end; }
        .svc-hero-bg { position:absolute; inset:0; background:#1f1f1c url('/photos/bess-array.jpg') center/cover no-repeat; transform:scale(1.06); animation:svcKenBurns 24s ease-out infinite alternate; }
        .svc-hero-scrim { position:absolute; inset:0; background:linear-gradient(to top, rgba(42,42,38,0.96) 0%, rgba(42,42,38,0.6) 45%, rgba(42,42,38,0.72) 100%); }
        .svc-hero-inner { position:relative; padding-top:7rem; padding-bottom:4rem; }
        @keyframes svcKenBurns { from{transform:scale(1.06)} to{transform:scale(1.16)} }

        .svc-eyebrow { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; color:#4F7A3A; margin:0 0 1.1rem; font-weight:600; }
        .svc-h1 { font-family:Georgia,'Times New Roman',serif; font-weight:400; font-size:clamp(2.4rem,5vw,3.9rem); line-height:1.05; margin:0 0 1.4rem; color:#F4F1EA; max-width:18ch; }
        .svc-em { font-family:'Fraunces',Georgia,serif; font-style:italic; color:#EDE9E0; }
        .svc-lede { font-size:clamp(1.05rem,1.6vw,1.3rem); line-height:1.6; color:#CFC9BD; max-width:62ch; margin:0; }

        .svc-band { padding:5.5rem 0; }
        .svc-band-alt { background:#262622; }
        .svc-bridge { font-size:clamp(1.15rem,1.8vw,1.5rem); line-height:1.6; color:#E3DED3; max-width:68ch; margin:0 auto; text-align:center; font-family:Georgia,serif; }

        .svc-label { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; color:#4F7A3A; margin:0 0 0.9rem; font-weight:600; }
        .svc-h2 { font-family:Georgia,serif; font-weight:400; font-size:clamp(1.8rem,3vw,2.6rem); line-height:1.1; margin:0 0 2.4rem; color:#F4F1EA; }

        .svc-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1.1rem; }
        .svc-card { background:#33332E; border:1px solid rgba(244,241,234,0.09); border-radius:5px; padding:1.9rem; }
        .svc-card h3 { font-family:Georgia,serif; font-weight:400; font-size:1.25rem; line-height:1.25; margin:0 0 0.7rem; color:#F4F1EA; }
        .svc-card p { font-size:1rem; line-height:1.6; color:#B8B2A6; margin:0; }

        .svc-close { position:relative; overflow:hidden; }
        .svc-close-bg { position:absolute; inset:0; background:#1f1f1c url('/photos/controls-board.jpg') center/cover no-repeat; transform:scale(1.06); animation:svcKenBurns 24s ease-out infinite alternate; }
        .svc-close-scrim { position:absolute; inset:0; background:linear-gradient(to right, rgba(42,42,38,0.95) 0%, rgba(42,42,38,0.82) 60%, rgba(42,42,38,0.7) 100%); }
        .svc-close-inner { position:relative; padding:6.5rem 1.5rem; }
        .svc-close-text { font-family:Georgia,serif; font-size:clamp(1.3rem,2.3vw,1.9rem); line-height:1.5; color:#F4F1EA; max-width:60ch; margin:0; }

        .svc-cta { padding:5.5rem 0 6.5rem; text-align:center; }
        .svc-cta-line { font-size:clamp(1.1rem,1.7vw,1.35rem); line-height:1.5; color:#E3DED3; max-width:48ch; margin:0 auto 1.6rem; }
        .svc-cta-mail { display:inline-block; font-size:1.15rem; color:#4F7A3A; text-decoration:none; border-bottom:1px solid rgba(79,122,58,0.5); padding-bottom:2px; }
        .svc-cta-mail:hover { color:#6a9b52; border-color:#6a9b52; }

        @media (max-width:760px){
          .svc-grid { grid-template-columns:1fr; }
          .svc-hero { min-height:70vh; }
          .svc-band { padding:4rem 0; }
          .svc-bridge { text-align:left; }
        }
      `,
        }}
      />
    </main>
  );
}

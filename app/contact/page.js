import { EMAIL } from "../site-config";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Rootwork Energy for acquisition, partnership, and investment inquiries.",
};

export default function Contact() {
  return (
    <main>
      <section
        className="rw-phero rw-phero--photo"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(20,20,18,0.92), rgba(20,20,18,0.6) 55%, rgba(20,20,18,0.4)), linear-gradient(180deg, rgba(20,20,18,0.42), rgba(20,20,18,0.82)), url('/photos/commissioning-field.jpg')" }}
      >
        <div className="container rw-phero__inner" style={{ minHeight: "52vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="rw-kicker rw-reveal">Contact</p>
          <h1 className="rw-phero__display rw-reveal rw-d1">Get in <em>touch</em>.</h1>
          <p className="rw-phero__lede rw-reveal rw-d2" style={{ marginBottom: "2.4rem" }}>
            For acquisition, partnership, and investment inquiries, reach us directly.
          </p>
          <a className="rw-mailblock rw-reveal rw-d3" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </section>
    </main>
  );
}

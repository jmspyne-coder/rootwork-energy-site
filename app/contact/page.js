import { EMAIL } from "../site-config";

export const metadata = {
  title: "Contact",
  description:
    "Capital conversations, asset opportunities, and inquiries. Reach Rootwork Energy directly.",
};

export default function Contact() {
  return (
    <main>
      <section className="band band--dark" style={{ minHeight: "62vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <p className="kicker rw-reveal rw-d1">Contact</p>
          <h1 className="display rw-reveal rw-d2">Talk to Rootwork.</h1>
          <p className="hero-sub rw-reveal rw-d3" style={{ marginBottom: 0 }}>
            Capital conversations, asset opportunities, and inquiries.
          </p>
          <a className="contact-email rw-reveal rw-d4" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}

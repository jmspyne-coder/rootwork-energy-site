import { EMAIL } from "../site-config";

export const metadata = {
  title: "Contact",
  description:
    "Contact Rootwork Energy for execution, partnership, and investment inquiries.",
};

export default function Contact() {
  return (
    <main>
      <section className="page-hero page-hero--tall page-hero--photo">
        <div
          className="hero__media"
          style={{ backgroundImage: "url(/photos/substation-yard.jpg)" }}
        />
        <div className="container">
          <p className="eyebrow on-dark">Contact</p>
          <h1 className="page-title">Let&rsquo;s talk.</h1>
          <p className="page-lede">
            For owners and developers who need execution in the field, and for
            partnership and investment inquiries, reach us directly.
          </p>
          <a className="contact__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}

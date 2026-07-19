export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-block">
          {/* Reversed wordmark PNG — never re-typeset */}
          <img
            src="/wordmark-reversed.png"
            alt="Rootwork Energy"
            className="footer__wordmark"
            width={700}
            height={167}
          />
          <div className="footer__legal">Rootwork Energy LLC · Delaware</div>
        </div>
        <div className="footer__contact">
          <a href="mailto:info@rootwork.energy" className="footer__email">
            info@rootwork.energy
          </a>
          <div className="footer__legal">
            © {new Date().getFullYear()} Rootwork Energy LLC
          </div>
        </div>
      </div>
    </footer>
  );
}

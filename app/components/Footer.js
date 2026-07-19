export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
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
    </footer>
  );
}

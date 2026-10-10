import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img
            src={logo}
            alt="Fatima Lajam"
            className="footer-logo"
          />

          <div>
            <h3>Fatima Lajam</h3>
            <p>Building practical digital solutions</p>
          </div>
        </div>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/fatima-lajam-229352218"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/falb79"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:Fatimalajaam@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Chapter 1 — Arjuna Vishada Yoga", path: "/chapter/1" },
    { name: "Chapter 2 — Sankhya Yoga", path: "/chapter/2" },
    { name: "Chapter 3 — Karma Yoga", path: "/chapter/3" },
    { name: "View All 18 Chapters", path: "/chapters" },
  ];

  const resources = [
    { name: "About the Gita", path: "/about" },
    { name: "Reading Guide", path: "/guide" },
    { name: "Sanskrit Glossary", path: "/glossary" },
    { name: "Connect / Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: "ri-twitter-x-line", url: "https://twitter.com", label: "Twitter" },
    { icon: "ri-instagram-line", url: "https://instagram.com", label: "Instagram" },
    { icon: "ri-youtube-line", url: "https://youtube.com", label: "YouTube" },
    { icon: "ri-github-line", url: "https://github.com/grchetan/bhagwat-gita", label: "GitHub" },
  ];

  return (
    <footer className="footer">
      {/* Sacred Top Accent Border */}
      <div className="footer-top-accent"></div>

      {/* Main Content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand">
            <div className="brand-header">
              <img
                src="https://public.readdy.ai/ai/img_res/e8eb0435-7826-446b-80f5-0fa0e2da0efa.png"
                alt="Bhagavad Gita Logo"
                className="footer-logo"
              />
              <span>Bhagavad Gita</span>
            </div>
            <p className="brand-description">
              A digital sanctuary dedicated to preserving and exploring the eternal wisdom of the Gita. 
              Discover profound Sanskrit shlokas, word-by-word breakdowns, and modern life lessons 
              to guide your soul toward absolute peace.
            </p>
            {/* Social Links */}
            <div className="social-links-container">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Chapters Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">Sacred Chapters</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.name} className="footer-link-item">
                  <Link to={link.path} className="footer-link">
                    <i className="ri-arrow-right-s-line link-chevron"></i>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Info Column */}
          <div className="footer-column">
            <h3 className="footer-title">Explore Wisdom</h3>
            <ul className="footer-links-list">
              {resources.map((link) => (
                <li key={link.name} className="footer-link-item">
                  <Link to={link.path} className="footer-link">
                    <i className="ri-arrow-right-s-line link-chevron"></i>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column newsletter-column">
            <h3 className="footer-title">Weekly Wisdom</h3>
            <p className="newsletter-text">
              Subscribe to receive sacred verses, translations, and deep commentaries directly in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="footer-newsletter-form">
              <div className="newsletter-input-wrapper">
                <i className="ri-mail-line newsletter-mail-icon"></i>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input" 
                  required
                />
              </div>
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
            <p className="privacy-note">
              We respect your spiritual privacy. <Link to="/privacy" className="privacy-link">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Om Watermark Section */}
      <div className="om-watermark-container">
        <span className="om-watermark-text">ॐ शान्तिः शान्तिः शान्तिः</span>
      </div>

      {/* Bottom Footer copyright info */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © {currentYear} Bhagavad Gita Digital sanctuary. Devotedly crafted for all seekers of truth.
          </p>
          <div className="footer-credit">
            <span>
              Designed & Developed by{" "}
              <a href="https://grchetan.github.io/sitereadypro/" target="_blank" rel="noopener noreferrer" className="credit-link">
                siteReadyPro
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

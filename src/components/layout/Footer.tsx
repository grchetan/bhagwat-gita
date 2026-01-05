import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  const quickLinks = [
    { name: "Chapter 1", path: "/chapter/1" },
    { name: "Chapter 2", path: "/chapter/2" },
    { name: "Chapter 3", path: "/chapter/3" },
    { name: "View All Chapters", path: "/chapters" },
  ];

  const resources = [
    { name: "About the Gita", path: "/about" },
    { name: "Reading Guide", path: "/guide" },
    { name: "Glossary", path: "/glossary" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="footer">
      {/* Main Content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-header">
              <img
                src="https://public.readdy.ai/ai/img_res/e8eb0435-7826-446b-80f5-0fa0e2da0efa.png"
                alt="Bhagavad Gita Logo"
              />
              <span>Bhagavad Gita</span>
            </div>
            <p>
              A digital sanctuary for exploring the timeless wisdom of the Gita.
              Discover profound teachings that guide the soul toward
              enlightenment.
            </p>
          </div>

          {/* Chapters */}
          <div>
            <h3 className="footer-title">Chapters</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer-title">Explore</h3>
            <ul>
              {resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title">Stay Connected</h3>
            <p className="footer-text">Receive weekly wisdom</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
            <p className="privacy">
              We respect your <Link to="/privacy">privacy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Om Section */}
      <div className="om-section">ॐ</div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Bhagavad Gita Digital. All rights reserved.</p>
        <span>
          Powered by{" "}
          <a href="https://grchetan.github.io/sitereadypro/" target="_blank">
            siteReadyPro
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import "../../styles/footer.css";

type ModalType = "guide" | "glossary" | "privacy" | null;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  const quickLinks = [
    { name: "Chapter 1 — Arjuna Vishada Yoga", path: "/chapter/1" },
    { name: "Chapter 2 — Sankhya Yoga", path: "/chapter/2" },
    { name: "Chapter 3 — Karma Yoga", path: "/chapter/3" },
    { name: "Chapter 6 — Dhyana Yoga", path: "/chapter/6" },
    { name: "View All 18 Chapters", path: "/chapters" },
  ];

  const socialLinks = [
    { icon: "ri-twitter-x-line", url: "https://twitter.com", label: "Twitter" },
    { icon: "ri-instagram-line", url: "https://instagram.com", label: "Instagram" },
    { icon: "ri-youtube-line", url: "https://youtube.com", label: "YouTube" },
    { icon: "ri-github-line", url: "https://github.com/grchetan/bhagwat-gita", label: "GitHub" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="footer">
      {/* Sacred Top Accent Border */}
      <div className="footer-top-accent"></div>

      {/* Main Content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand">
            <Link to="/" className="brand-header" aria-label="Bhagavad Gita Sanctuary Home">
              <img
                src={logoImg}
                alt="Bhagavad Gita Logo"
                className="footer-logo"
              />
              <div className="brand-title-wrap">
                <span className="brand-title">Bhagavad Gita</span>
                <span className="brand-subtitle">श्रीमद्भगवद्गीता</span>
              </div>
            </Link>
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
              <li className="footer-link-item">
                <Link to="/about" className="footer-link">
                  <i className="ri-arrow-right-s-line link-chevron"></i>
                  <span>About the Gita</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <button
                  type="button"
                  onClick={() => setActiveModal("guide")}
                  className="footer-link footer-link-btn"
                >
                  <i className="ri-arrow-right-s-line link-chevron"></i>
                  <span>Reading Guide</span>
                </button>
              </li>
              <li className="footer-link-item">
                <button
                  type="button"
                  onClick={() => setActiveModal("glossary")}
                  className="footer-link footer-link-btn"
                >
                  <i className="ri-arrow-right-s-line link-chevron"></i>
                  <span>Sanskrit Glossary</span>
                </button>
              </li>
              <li className="footer-link-item">
                <Link to="/contact" className="footer-link">
                  <i className="ri-arrow-right-s-line link-chevron"></i>
                  <span>Connect / Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column newsletter-column">
            <h3 className="footer-title">Weekly Wisdom</h3>
            <p className="newsletter-text">
              Subscribe to receive sacred verses, translations, and deep commentaries directly in your inbox.
            </p>

            {isSubscribed ? (
              <div className="newsletter-success-box">
                <i className="ri-checkbox-circle-fill success-icon"></i>
                <div className="success-content">
                  <p className="success-title">🙏 Namaste & Welcome</p>
                  <p className="success-desc">
                    You are subscribed with blessings! Wisdom verses will arrive weekly.
                  </p>
                </div>
                <button
                  type="button"
                  className="newsletter-reset-btn"
                  onClick={() => {
                    setIsSubscribed(false);
                    setEmail("");
                  }}
                  title="Subscribe another email"
                  aria-label="Subscribe another email"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                <div className="newsletter-input-wrapper">
                  <i className="ri-mail-line newsletter-mail-icon"></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="newsletter-input"
                    required
                  />
                </div>
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe to weekly wisdom">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </form>
            )}

            <p className="privacy-note">
              We respect your spiritual privacy.{" "}
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="privacy-link-btn"
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Sacred Mantra Watermark Separator */}
      <div className="om-watermark-container">
        <span className="om-watermark-text">॥ ॐ श्री कृष्णार्पणमस्तु ॥</span>
      </div>

      {/* Bottom Footer copyright info */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © {currentYear} Bhagavad Gita Digital Sanctuary. Devotedly crafted for all seekers of truth.
          </p>
          <div className="footer-credit">
            <span>
              Designed &amp; Developed by{" "}
              <a
                href="https://grchetan.github.io/sitereadypro/"
                target="_blank"
                rel="noopener noreferrer"
                className="credit-link"
              >
                siteReadyPro
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Wisdom Modals */}
      {activeModal && (
        <div
          className="footer-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="footer-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="footer-modal-header">
              <div className="footer-modal-title">
                {activeModal === "guide" && (
                  <>
                    <i className="ri-compass-3-line"></i>
                    <span>How to Read the Bhagavad Gita</span>
                  </>
                )}
                {activeModal === "glossary" && (
                  <>
                    <i className="ri-book-mark-line"></i>
                    <span>Sanskrit Spiritual Glossary</span>
                  </>
                )}
                {activeModal === "privacy" && (
                  <>
                    <i className="ri-shield-check-line"></i>
                    <span>Spiritual Privacy Policy</span>
                  </>
                )}
              </div>
              <button
                type="button"
                className="footer-modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close dialog"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="footer-modal-body">
              {activeModal === "guide" && (
                <div>
                  <p>
                    The Bhagavad Gita is not merely a book to be read once—it is a lifelong companion for daily reflection. Here is the recommended path for sincere contemplation:
                  </p>
                  <div className="guide-steps-list">
                    <div className="guide-step-card">
                      <div className="guide-step-num">1</div>
                      <div className="guide-step-content">
                        <h4>Approach with Humility (श्रद्धा)</h4>
                        <p>Begin each reading session with a tranquil mind, seeking clarity and detachment rather than academic debate.</p>
                      </div>
                    </div>
                    <div className="guide-step-card">
                      <div className="guide-step-num">2</div>
                      <div className="guide-step-content">
                        <h4>Recite the Sanskrit (मूल श्लोक)</h4>
                        <p>Chant or read the Devanagari verse slowly. The meter (Anushtubh Chhanda) creates sacred inner vibrations that center your thoughts.</p>
                      </div>
                    </div>
                    <div className="guide-step-card">
                      <div className="guide-step-num">3</div>
                      <div className="guide-step-content">
                        <h4>Examine Word Meanings (पदच्छेद व अर्थ)</h4>
                        <p>Review the word-by-word breakdown to grasp the nuanced spiritual vocabulary behind each divine statement.</p>
                      </div>
                    </div>
                    <div className="guide-step-card">
                      <div className="guide-step-num">4</div>
                      <div className="guide-step-content">
                        <h4>Contemplate &amp; Practice (निदिध्यासन)</h4>
                        <p>Apply Lord Krishna’s instructions of detached duty (Nishkama Karma) and equanimity to your real-life situations today.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === "glossary" && (
                <div>
                  <p>
                    Essential foundational terms from the divine dialogue of Sri Krishna and Arjuna:
                  </p>
                  <div className="glossary-terms-grid">
                    <div className="glossary-term-item">
                      <div>
                        <strong>Dharma</strong>
                        <span className="term-devanagari">(धर्म)</span>
                      </div>
                      <p>Righteous duty, moral order, and living in eternal alignment with universal truth.</p>
                    </div>
                    <div className="glossary-term-item">
                      <div>
                        <strong>Nishkama Karma</strong>
                        <span className="term-devanagari">(निष्काम कर्म)</span>
                      </div>
                      <p>Selfless action performed purely out of duty without clinging attachment to the fruits or results.</p>
                    </div>
                    <div className="glossary-term-item">
                      <div>
                        <strong>Atman</strong>
                        <span className="term-devanagari">(आत्मन्)</span>
                      </div>
                      <p>The eternal, indestructible, unchangeable soul—never slain when the physical body perishes.</p>
                    </div>
                    <div className="glossary-term-item">
                      <div>
                        <strong>Brahman</strong>
                        <span className="term-devanagari">(ब्रह्म)</span>
                      </div>
                      <p>The supreme, infinite, unmanifest absolute reality underlying all cosmic existence.</p>
                    </div>
                    <div className="glossary-term-item">
                      <div>
                        <strong>Samatvam</strong>
                        <span className="term-devanagari">(समत्वम्)</span>
                      </div>
                      <p>Poised equanimity of the mind—remaining steady through triumph and defeat, pleasure and pain.</p>
                    </div>
                    <div className="glossary-term-item">
                      <div>
                        <strong>Moksha</strong>
                        <span className="term-devanagari">(मोक्ष)</span>
                      </div>
                      <p>Ultimate spiritual liberation from the cycle of birth, death, and material bondage.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === "privacy" && (
                <div>
                  <p>
                    Welcome to the Bhagavad Gita Digital Sanctuary. Your trust and sacred contemplation are of utmost reverence to us.
                  </p>
                  <div className="guide-steps-list">
                    <div className="guide-step-card">
                      <div className="guide-step-num">
                        <i className="ri-heart-line"></i>
                      </div>
                      <div className="guide-step-content">
                        <h4>Zero Tracking or Commercial Ads</h4>
                        <p>We do not track your reading habits, sell your data, or serve third-party advertising. This platform is purely dedicated to spiritual upliftment.</p>
                      </div>
                    </div>
                    <div className="guide-step-card">
                      <div className="guide-step-num">
                        <i className="ri-lock-line"></i>
                      </div>
                      <div className="guide-step-content">
                        <h4>Local Device Preferences</h4>
                        <p>Your chosen interface language, reading font size, and view preferences are stored exclusively in your own browser via standard local storage.</p>
                      </div>
                    </div>
                    <div className="guide-step-card">
                      <div className="guide-step-num">
                        <i className="ri-mail-check-line"></i>
                      </div>
                      <div className="guide-step-content">
                        <h4>Newsletter Integrity</h4>
                        <p>Email addresses provided for Weekly Wisdom reflections are kept strictly private and used solely for delivering Gita verses. You can unsubscribe at any time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="footer-modal-actions">
              {activeModal === "guide" && (
                <Link
                  to="/chapter/1"
                  className="footer-modal-btn primary"
                  onClick={() => setActiveModal(null)}
                >
                  <span>Start Reading Chapter 1</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              )}
              {activeModal === "glossary" && (
                <Link
                  to="/chapters"
                  className="footer-modal-btn primary"
                  onClick={() => setActiveModal(null)}
                >
                  <span>Explore Chapters</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              )}
              <button
                type="button"
                className="footer-modal-btn secondary"
                onClick={() => setActiveModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

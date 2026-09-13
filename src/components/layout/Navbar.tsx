import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsChaptersOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/", hindi: "मुख्य पृष्ठ" },
    { name: "Chapters", path: "/chapters", hindi: "सभी 18 अध्याय" },
    { name: "About", path: "/about", hindi: "परिचय" },
    { name: "Contact", path: "/contact", hindi: "संपर्क" },
  ];

  const chapters = [
    {
      number: 1,
      title: "Arjuna Vishada Yoga",
      hindiTitle: "अर्जुन विषाद योग",
      path: "/chapter/1",
      shlokas: 47,
    },
    {
      number: 2,
      title: "Sankhya Yoga",
      hindiTitle: "सांख्य योग",
      path: "/chapter/2",
      shlokas: 72,
    },
    {
      number: 3,
      title: "Karma Yoga",
      hindiTitle: "कर्म योग",
      path: "/chapter/3",
      shlokas: 43,
    },
  ];

  const isReadingChapter = location.pathname.startsWith("/chapter/");

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="logo">
              <img
                src="https://public.readdy.ai/ai/img_res/e8eb0435-7826-446b-80f5-0fa0e2da0efa.png"
                alt="Bhagavad Gita Logo"
              />
              <div className="logo-text">
                <span className="logo-title">Bhagavad Gita</span>
                <span className="logo-subtitle">श्रीमद्भगवद्गीता</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Chapters Dropdown */}
              <div
                className="chapters"
                onMouseEnter={() => setIsChaptersOpen(true)}
                onMouseLeave={() => setIsChaptersOpen(false)}
              >
                <button
                  className={`chapters-btn ${isReadingChapter ? "reading-active" : ""}`}
                  onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                  aria-expanded={isChaptersOpen}
                >
                  <span>Quick Read</span>
                  <i
                    className={`ri-arrow-down-s-line ${
                      isChaptersOpen ? "rotate" : ""
                    }`}
                  ></i>
                </button>

                {isChaptersOpen && (
                  <div className="chapters-dropdown">
                    <div className="dropdown-header">
                      <span>उपलब्ध अध्याय / Available Chapters</span>
                    </div>

                    {chapters.map((ch) => {
                      const isActive = location.pathname === ch.path;
                      return (
                        <Link
                          key={ch.number}
                          to={ch.path}
                          className={`chapter-item ${isActive ? "active" : ""}`}
                        >
                          <div className="chapter-num">{ch.number}</div>
                          <div className="chapter-info">
                            <div className="chapter-title">
                              {ch.hindiTitle}
                            </div>
                            <div className="chapter-sub">
                              Chapter {ch.number} • {ch.title}
                            </div>
                          </div>
                          <span className="chapter-shlok-count">
                            {ch.shlokas} श्लोक
                          </span>
                          <i className="ri-arrow-right-line arrow"></i>
                        </Link>
                      );
                    })}

                    <Link to="/chapters" className="chapter-item view-all-link">
                      <div className="all-chapters-icon">
                        <i className="ri-book-read-line"></i>
                      </div>
                      <div className="chapter-info">
                        <div className="chapter-title">सभी 18 अध्याय देखें</div>
                        <div className="chapter-sub">View All 18 Chapters</div>
                      </div>
                      <i className="ri-arrow-right-line arrow"></i>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <div className="mobile-brand">
              <span className="mobile-title">Bhagavad Gita</span>
              <span className="mobile-tagline">श्रीमद्भगवद्गीता ज्ञान</span>
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="mobile-section-title">Navigation</div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-link ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{link.name}</span>
              <span className="mobile-link-hindi">{link.hindi}</span>
            </Link>
          ))}

          <div className="mobile-divider">अध्याय पढ़ें / Read Chapters</div>
          {chapters.map((ch) => {
            const isActive = location.pathname === ch.path;
            return (
              <Link
                key={ch.number}
                to={ch.path}
                className={`mobile-link mobile-chapter ${isActive ? "active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-ch-num">{ch.number}</span>
                <div className="mobile-ch-text">
                  <span className="mobile-ch-hindi">{ch.hindiTitle}</span>
                  <span className="mobile-ch-eng">Chapter {ch.number}: {ch.title}</span>
                </div>
                <span className="mobile-shlok-badge">{ch.shlokas} श्लोक</span>
              </Link>
            );
          })}

          <Link
            to="/chapters"
            className="mobile-link mobile-view-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="ri-list-unordered"></i>
            <span>सभी 18 अध्याय देखें (All Chapters)</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

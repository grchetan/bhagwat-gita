import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsChaptersOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const chapters = [
    { number: 1, title: "Arjuna Vishada Yoga", path: "/chapter/1" },
    { number: 2, title: "Sankhya Yoga", path: "/chapter/2" },
    { number: 3, title: "Karma Yoga", path: "/chapter/3" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="https://public.readdy.ai/ai/img_res/e8eb0435-7826-446b-80f5-0fa0e2da0efa.png"
              alt="Bhagavad Gita Logo"
            />
            <span>Bhagavad Gita</span>
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
              <button className="chapters-btn">
                Chapters
                <i
                  className={`ri-arrow-down-s-line ${
                    isChaptersOpen ? "rotate" : ""
                  }`}
                ></i>
              </button>

              {isChaptersOpen && (
                <div className="chapters-dropdown">
                  {chapters.map((ch) => (
                    <Link key={ch.number} to={ch.path} className="chapter-item">
                      <div className="chapter-num">{ch.number}</div>
                      <div className="chapter-info">
                        <div className="chapter-title">Chapter {ch.number}</div>
                        <div className="chapter-sub">{ch.title}</div>
                      </div>
                      <i className="ri-arrow-right-line arrow"></i>
                    </Link>
                  ))}
                  <Link to="/chapters" className="chapter-item view-all-link">
                    <i className="ri-list-unordered"></i>
                    <div className="chapter-info">
                      <div className="chapter-title">All 18 Chapters</div>
                      <div className="chapter-sub">View complete list</div>
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
            aria-label="Toggle menu"
          >
            <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mobile-divider">Chapters</div>
            {chapters.map((ch) => (
              <Link
                key={ch.number}
                to={ch.path}
                className="mobile-link mobile-chapter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-ch-num">{ch.number}</span>
                {ch.title}
              </Link>
            ))}
            <Link
              to="/chapters"
              className="mobile-link mobile-view-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="ri-list-unordered"></i> View All 18 Chapters
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

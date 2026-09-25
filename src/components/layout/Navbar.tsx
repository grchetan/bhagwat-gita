import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, type Language } from "../../context/LanguageContext";
import logoImg from "../../assets/images/logo.png";
import "../../styles/navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

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
    setIsLangOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_chapters"), path: "/chapters" },
    { name: t("nav_about"), path: "/about" },
    { name: t("nav_contact"), path: "/contact" },
  ];

  const chapters = [
    {
      number: 1,
      titleKey: "ch1_title",
      subKey: "ch1_subtitle",
      path: "/chapter/1",
      shlokas: 47,
    },
    {
      number: 2,
      titleKey: "ch2_title",
      subKey: "ch2_subtitle",
      path: "/chapter/2",
      shlokas: 72,
    },
    {
      number: 3,
      titleKey: "ch3_title",
      subKey: "ch3_subtitle",
      path: "/chapter/3",
      shlokas: 43,
    },
    {
      number: 4,
      titleKey: "ch4_title",
      subKey: "ch4_subtitle",
      path: "/chapter/4",
      shlokas: 42,
    },
    {
      number: 5,
      titleKey: "ch5_title",
      subKey: "ch5_subtitle",
      path: "/chapter/5",
      shlokas: 29,
    },
  ];

  const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
    { code: "en", label: "English", nativeName: "English", flag: "🇬🇧" },
    { code: "hi", label: "Hindi", nativeName: "हिंदी", flag: "🇮🇳" },
    { code: "te", label: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];
  const isReadingChapter = location.pathname.startsWith("/chapter/");

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="logo">
              <img
                src={logoImg}
                alt="Bhagavad Gita Logo"
                className="logo-img"
              />
              <div className="logo-text">
                <span className="logo-title">{t("logo_title")}</span>
                <span className="logo-subtitle">{t("logo_subtitle")}</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
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
                  <i className="ri-book-open-line"></i>
                  <span>{t("nav_quick_read")}</span>
                  <i
                    className={`ri-arrow-down-s-line ${
                      isChaptersOpen ? "rotate" : ""
                    }`}
                  ></i>
                </button>

                {isChaptersOpen && (
                  <div className="chapters-dropdown">
                    <div className="dropdown-header">
                      <span>{t("nav_available_chapters")}</span>
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
                              {t(ch.titleKey)}
                            </div>
                            <div className="chapter-sub">
                              {t(ch.subKey)}
                            </div>
                          </div>
                          <span className="chapter-shlok-count">
                            {ch.shlokas} {t("verses_suffix")}
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
                        <div className="chapter-title">{t("nav_all_18_chapters")}</div>
                        <div className="chapter-sub">18 Chapters • 700 Shlokas</div>
                      </div>
                      <i className="ri-arrow-right-line arrow"></i>
                    </Link>
                  </div>
                )}
              </div>

              {/* Language Switcher Dropdown */}
              <div
                className="lang-dropdown-wrapper"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <button
                  className="lang-selector-btn"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  aria-expanded={isLangOpen}
                  title="Select Language / भाषा चुनें / భాషను ఎంచుకోండి"
                >
                  <i className="ri-global-line"></i>
                  <span className="lang-flag">{currentLangObj.flag}</span>
                  <span className="lang-code-text">{currentLangObj.label}</span>
                  <i
                    className={`ri-arrow-down-s-line ${
                      isLangOpen ? "rotate" : ""
                    }`}
                  ></i>
                </button>

                {isLangOpen && (
                  <div className="lang-menu">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`lang-option ${
                          language === lang.code ? "active" : ""
                        }`}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                      >
                        <span className="lang-option-flag">{lang.flag}</span>
                        <div className="lang-option-text">
                          <span className="lang-native">{lang.nativeName}</span>
                          <span className="lang-english">({lang.label})</span>
                        </div>
                        {language === lang.code && (
                          <i className="ri-check-line lang-check"></i>
                        )}
                      </button>
                    ))}
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
              <span className="mobile-title">{t("logo_title")}</span>
              <span className="mobile-tagline">{t("logo_subtitle")}</span>
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          {/* Language Selector in Mobile Menu */}
          <div className="mobile-lang-section">
            <span className="mobile-section-title">
              <i className="ri-global-line"></i> {t("nav_language")}
            </span>
            <div className="mobile-lang-pills">
              {languages.map((l) => (
                <button
                  key={l.code}
                  className={`mobile-lang-pill ${
                    language === l.code ? "active" : ""
                  }`}
                  onClick={() => setLanguage(l.code)}
                >
                  <span>{l.flag}</span>
                  <span>{l.nativeName}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mobile-section-title">{t("mobile_nav_title")}</div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{link.name}</span>
            </Link>
          ))}

          <div className="mobile-divider">{t("mobile_chapters_title")}</div>
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
                  <span className="mobile-ch-hindi">{t(ch.titleKey)}</span>
                  <span className="mobile-ch-eng">{t(ch.subKey)}</span>
                </div>
                <span className="mobile-shlok-badge">
                  {ch.shlokas} {t("verses_suffix")}
                </span>
              </Link>
            );
          })}

          <Link
            to="/chapters"
            className="mobile-link mobile-view-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="ri-list-unordered"></i>
            <span>{t("nav_all_18_chapters")}</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

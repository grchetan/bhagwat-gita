import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/scrollToTop.css";

const ScrollToTop = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollTop > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", calculateScrollProgress, { passive: true });
    calculateScrollProgress();

    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circumference for r=22 is 2 * PI * 22 ~= 138.23
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title={t("scroll_to_top_tooltip")}
    >
      <svg className="progress-ring" viewBox="0 0 52 52">
        <circle
          className="progress-ring-circle-bg"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="26"
          cy="26"
        />
        <circle
          className="progress-ring-circle"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
          r={radius}
          cx="26"
          cy="26"
        />
      </svg>
      <i className="ri-arrow-up-line scroll-icon"></i>
      <span className="scroll-tooltip">
        {t("scroll_to_top_tooltip")} {Math.round(scrollProgress)}%
      </span>
    </button>
  );
};

export default ScrollToTop;

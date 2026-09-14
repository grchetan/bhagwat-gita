import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/shlokNavigation.css";

interface ShlokNavigationProps {
  totalShlokas: number;
  currentShlok?: number;
  onShlokSelect: (shlokNumber: number) => void;
}

const ShlokNavigation = ({
  totalShlokas,
  currentShlok = 1,
  onShlokSelect,
}: ShlokNavigationProps) => {
  const [selectedShlok, setSelectedShlok] = useState(currentShlok);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [filterQuery, setFilterQuery] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    setSelectedShlok(currentShlok);
  }, [currentShlok]);

  const handleShlokClick = (shlokNumber: number) => {
    setSelectedShlok(shlokNumber);
    onShlokSelect(shlokNumber);

    const element = document.getElementById(`shlok-${shlokNumber}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleQuickJump = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const shlokNumber = parseInt(event.target.value, 10);
    if (shlokNumber) handleShlokClick(shlokNumber);
  };

  const allNumbers = Array.from({ length: totalShlokas }, (_, i) => i + 1);
  const filteredNumbers = filterQuery
    ? allNumbers.filter((num) => num.toString().includes(filterQuery))
    : allNumbers;

  return (
    <div className="shlok-nav">
      {/* Header with View Toggle */}
      <div className="shlok-header">
        <div className="shlok-header-top">
          <h3>{t("shlokas_list")}</h3>
          <div className="view-mode-toggle">
            <button
              className={`mode-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="List View"
              aria-label="List View"
            >
              <i className="ri-list-check-2"></i>
            </button>
            <button
              className={`mode-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid View"
              aria-label="Grid View"
            >
              <i className="ri-grid-fill"></i>
            </button>
          </div>
        </div>

        {/* Quick Filter Input */}
        <div className="nav-filter-wrapper">
          <i className="ri-search-line filter-icon"></i>
          <input
            type="text"
            placeholder={t("search_shlok_placeholder", { total: totalShlokas })}
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="nav-filter-input"
          />
          {filterQuery && (
            <button
              className="filter-clear"
              onClick={() => setFilterQuery("")}
              aria-label="Clear filter"
            >
              <i className="ri-close-circle-line"></i>
            </button>
          )}
        </div>

        <div className="divider"></div>
      </div>

      {/* List or Grid Display */}
      {viewMode === "list" ? (
        <div className="shlok-list">
          {filteredNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handleShlokClick(number)}
              className={`shlok-item ${selectedShlok === number ? "active" : ""}`}
            >
              <div className="shlok-circle">{number}</div>
              <span>
                {t("shlok_prefix")} {number}
              </span>
              {selectedShlok === number && (
                <i className="ri-arrow-right-line arrow"></i>
              )}
            </button>
          ))}
          {filteredNumbers.length === 0 && (
            <div className="no-shlok-found">{t("no_shlok_found")}</div>
          )}
        </div>
      ) : (
        <div className="shlok-grid">
          {filteredNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handleShlokClick(number)}
              className={`shlok-grid-btn ${
                selectedShlok === number ? "active" : ""
              }`}
              title={`${t("shlok_prefix")} ${number}`}
            >
              {number}
            </button>
          ))}
          {filteredNumbers.length === 0 && (
            <div className="no-shlok-found">{t("no_shlok_found")}</div>
          )}
        </div>
      )}

      {/* Quick Jump Dropdown */}
      <div className="quick-jump">
        <label>{t("quick_jump")}</label>
        <select value={selectedShlok} onChange={handleQuickJump}>
          <option value="">{t("select_shlok_dropdown")}</option>
          {allNumbers.map((number) => (
            <option key={number} value={number}>
              {t("shlok_prefix")} {number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShlokNavigation;

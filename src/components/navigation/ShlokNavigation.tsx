import { useState, useEffect } from "react";
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
    const shlokNumber = parseInt(event.target.value);
    if (shlokNumber) handleShlokClick(shlokNumber);
  };

  const shlokNumbers = Array.from({ length: totalShlokas }, (_, i) => i + 1);

  return (
    <div className="shlok-nav">
      {/* Header */}
      <div className="shlok-header">
        <h3>Shlokas</h3>
        <div className="divider"></div>
      </div>

      {/* List */}
      <div className="shlok-list">
        {shlokNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleShlokClick(number)}
            className={`shlok-item ${selectedShlok === number ? "active" : ""}`}
          >
            <div className="shlok-circle">{number}</div>
            <span>Shlok {number}</span>
            {selectedShlok === number && (
              <i className="ri-arrow-right-line arrow"></i>
            )}
          </button>
        ))}
      </div>

      {/* Quick Jump */}
      <div className="quick-jump">
        <label>Quick Jump</label>
        <select value={selectedShlok} onChange={handleQuickJump}>
          <option value="">Select Shlok...</option>
          {shlokNumbers.map((number) => (
            <option key={number} value={number}>
              Shlok {number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShlokNavigation;

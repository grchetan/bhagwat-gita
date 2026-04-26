import { useState } from "react";
import "../../styles/shlokCard.css";

interface ShlokCardProps {
  number: number;
  sanskritText?: string;
  transliteration?: string;
  hindiMeaning?: string;
  englishMeaning?: string;
  imageUrl?: string;
}

const ShlokCard = ({
  number,
  sanskritText = "श्लोक का पाठ यहाँ दिखाई देगा",
  transliteration = "Shlok transliteration will appear here",
  hindiMeaning = "इस श्लोक का हिंदी अर्थ यहाँ दिखाई देगा।",
  englishMeaning = "The English meaning of this shlok will appear here.",
  imageUrl,
}: ShlokCardProps) => {
  const [lang, setLang] = useState<"both" | "hindi" | "english">("both");

  return (
    <div id={`shlok-${number}`} className="shlok-card">
      {/* Number Badge */}
      <div className="shlok-badge">
        <span>{number}</span>
      </div>

      {/* Sanskrit */}
      <div className="sanskrit-box">
        <p className="sanskrit-text">{sanskritText}</p>
      </div>

      {/* Transliteration */}
      {transliteration && (
        <p className="transliteration">{transliteration}</p>
      )}

      {/* Language Toggle */}
      <div className="lang-toggle">
        <button
          className={lang === "both" ? "active" : ""}
          onClick={() => setLang("both")}
        >
          🌐 दोनों / Both
        </button>
        <button
          className={lang === "hindi" ? "active" : ""}
          onClick={() => setLang("hindi")}
        >
          🇮🇳 हिंदी
        </button>
        <button
          className={lang === "english" ? "active" : ""}
          onClick={() => setLang("english")}
        >
          🇬🇧 English
        </button>
      </div>

      {/* Hindi Meaning */}
      {(lang === "hindi" || lang === "both") && (
        <div className="meaning meaning-hindi">
          <div className="meaning-header">
            <h3>🇮🇳 हिंदी अर्थ</h3>
            <div className="line"></div>
          </div>
          <p className="explanation">{hindiMeaning}</p>
        </div>
      )}

      {/* English Meaning */}
      {(lang === "english" || lang === "both") && (
        <div className="meaning meaning-english">
          <div className="meaning-header">
            <h3>🇬🇧 English Meaning</h3>
            <div className="line"></div>
          </div>
          <p className="explanation">{englishMeaning}</p>
        </div>
      )}

      {/* Image */}
      {imageUrl && (
        <div className="shlok-image">
          <img src={imageUrl} alt={`Illustration for Shlok ${number}`} />
          <p>Sacred illustration for Shlok {number}</p>
        </div>
      )}
    </div>
  );
};

export default ShlokCard;

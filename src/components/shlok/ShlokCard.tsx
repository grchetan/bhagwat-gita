import { useState, useEffect } from "react";
import "../../styles/shlokCard.css";

interface ShlokCardProps {
  number: number;
  sanskritText?: string;
  transliteration?: string;
  wordMeanings?: string;
  hindiMeaning?: string;
  englishMeaning?: string;
  lifeLesson?: string;
  imageUrl?: string;
  globalLang?: "both" | "hindi" | "english";
  fontScale?: "normal" | "large" | "xlarge";
}

const ShlokCard = ({
  number,
  sanskritText = "श्लोक का पाठ यहाँ दिखाई देगा",
  transliteration = "Shlok transliteration will appear here",
  wordMeanings,
  hindiMeaning = "इस श्लोक का हिंदी अर्थ यहाँ दिखाई देगा।",
  englishMeaning = "The English meaning of this shlok will appear here.",
  lifeLesson,
  imageUrl,
  globalLang = "both",
  fontScale = "normal",
}: ShlokCardProps) => {
  const [lang, setLang] = useState<"both" | "hindi" | "english">(globalLang);
  const [isCopied, setIsCopied] = useState(false);

  // Sync with global language filter when changed by parent
  useEffect(() => {
    setLang(globalLang);
  }, [globalLang]);

  const handleCopy = async () => {
    const textToCopy = `भगवद्गीता — श्लोक ${number}\n\n${sanskritText}\n\n${transliteration}\n\n[हिंदी भावार्थ]\n${hindiMeaning}\n\n[English Meaning]\n${englishMeaning}${
      lifeLesson ? `\n\n[जीवन सूत्र / Life Lesson]\n${lifeLesson}` : ""
    }`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    }
  };

  return (
    <div
      id={`shlok-${number}`}
      className={`shlok-card shlok-font-${fontScale}`}
      data-shlok-number={number}
    >
      {/* Number Badge */}
      <div className="shlok-badge">
        <span>{number}</span>
      </div>

      {/* Top Action Bar (Copy Button) */}
      <div className="shlok-card-topbar">
        <button
          className={`shlok-copy-btn ${isCopied ? "copied" : ""}`}
          onClick={handleCopy}
          title="श्लोक और अर्थ कॉपी करें / Copy Shlok"
          aria-label="Copy shlok and meaning"
        >
          <i className={isCopied ? "ri-check-line" : "ri-file-copy-line"}></i>
          <span>{isCopied ? "कॉपी हो गया! / Copied" : "कॉपी करें / Copy"}</span>
        </button>
      </div>

      {/* Sanskrit */}
      <div className="sanskrit-box">
        <p className="sanskrit-text">{sanskritText}</p>
      </div>

      {/* Transliteration */}
      {transliteration && (
        <p className="transliteration">{transliteration}</p>
      )}

      {/* Word Meanings Breakdown */}
      {wordMeanings && (
        <div className="word-meanings">
          <div className="word-meanings-header">
            <span>📜 शब्दार्थ / Word Meanings</span>
          </div>
          <p className="word-meanings-text">{wordMeanings}</p>
        </div>
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
            <h3>🇮🇳 हिंदी व्याख्या</h3>
            <div className="line"></div>
          </div>
          <p className="explanation">{hindiMeaning}</p>
        </div>
      )}

      {/* English Meaning */}
      {(lang === "english" || lang === "both") && (
        <div className="meaning meaning-english">
          <div className="meaning-header">
            <h3>🇬🇧 English Commentary</h3>
            <div className="line"></div>
          </div>
          <p className="explanation">{englishMeaning}</p>
        </div>
      )}

      {/* Life Lesson */}
      {lifeLesson && (
        <div className="life-lesson">
          <div className="life-lesson-header">
            <span className="lamp-icon">🪔</span>
            <h3>Life Lesson / जीवन सूत्र</h3>
            <div className="line"></div>
          </div>
          <p className="life-lesson-text">{lifeLesson}</p>
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

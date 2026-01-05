import "../../styles/shlokCard.css";

interface ShlokCardProps {
  number: number;
  sanskritText?: string;
  transliteration?: string;
  explanation?: string;
  imageUrl?: string;
}

const ShlokCard = ({
  number,
  sanskritText = "श्लोक का पाठ यहाँ दिखाई देगा",
  transliteration = "Shlok transliteration will appear here",
  explanation = "Detailed explanation of this shlok will appear here. This section will contain the profound meaning and context of the sacred verse, providing deep insights into the spiritual teachings.",
  imageUrl,
}: ShlokCardProps) => {
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
      {transliteration && <p className="transliteration">{transliteration}</p>}

      {/* Meaning */}
      <div className="meaning">
        <div className="meaning-header">
          <h3>Meaning</h3>
          <div className="line"></div>
        </div>
        <p className="explanation">{explanation}</p>
      </div>

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

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ShlokNavigation from "../../components/navigation/ShlokNavigation";
import ShlokCard from "../../components/shlok/ShlokCard";
import "../../styles/pages-style/chapterPage.css";

interface ChapterData {
  number: number;
  title: string;
  sanskritTitle: string;
  introduction: string;
  totalShlokas: number;
}

const ChapterPage = () => {
  const { chapterNumber } = useParams<{ chapterNumber: string }>();
  const [currentShlok, setCurrentShlok] = useState(1);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const chapterData: Record<string, ChapterData> = {
    "1": {
      number: 1,
      title: "Arjuna Vishada Yoga",
      sanskritTitle: "अर्जुन विषाद योग",
      introduction:
        "The first chapter of the Bhagavad Gita sets the stage for the entire discourse...",
      totalShlokas: 47,
    },
    "2": {
      number: 2,
      title: "Sankhya Yoga",
      sanskritTitle: "सांख्य योग",
      introduction:
        "In this pivotal chapter, Krishna begins his spiritual instruction...",
      totalShlokas: 72,
    },
    "3": {
      number: 3,
      title: "Karma Yoga",
      sanskritTitle: "कर्म योग",
      introduction:
        "Krishna elaborates on the path of selfless action (Karma Yoga)...",
      totalShlokas: 43,
    },
  };

  const chapter = chapterData[chapterNumber || "1"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentShlok(1);
  }, [chapterNumber]);

  const handleShlokSelect = (shlok: number) => {
    setCurrentShlok(shlok);
    setIsMobileNavOpen(false);
  };

  if (!chapter) {
    return (
      <div className="chapter-error">
        <h1>Chapter Not Found</h1>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  const sampleShlokas = Array.from(
    { length: chapter.totalShlokas },
    (_, i) => ({
      number: i + 1,
      sanskritText: `श्लोक ${i + 1} का पाठ यहाँ दिखाई देगा`,
      transliteration: `Shlok ${i + 1} transliteration will appear here`,
      explanation: `Detailed explanation for Shlok ${i + 1} of Chapter ${
        chapter.number
      }.`,
    })
  );

  return (
    <div className="chapter-page">
      <div className="chapter-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link to="/chapters">Chapters</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span>Chapter {chapter.number}</span>
        </nav>

        <div className="chapter-layout">
          {/* Mobile Nav */}
          <div className="mobile-nav">
            <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
              Shlok Navigation
              <i
                className={`ri-arrow-${isMobileNavOpen ? "up" : "down"}-s-line`}
              ></i>
            </button>

            {isMobileNavOpen && (
              <ShlokNavigation
                totalShlokas={chapter.totalShlokas}
                currentShlok={currentShlok}
                onShlokSelect={handleShlokSelect}
              />
            )}
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <ShlokNavigation
              totalShlokas={chapter.totalShlokas}
              currentShlok={currentShlok}
              onShlokSelect={handleShlokSelect}
            />
          </aside>

          {/* Content */}
          <main className="chapter-content">
            {/* Header */}
            <div className="chapter-header">
              <div className="chapter-number">{chapter.number}</div>
              <div>
                <h1>{chapter.title}</h1>
                <p className="sanskrit">{chapter.sanskritTitle}</p>
              </div>
            </div>

            {/* Intro */}
            <div className="chapter-intro">
              <h2>
                <i className="ri-information-line"></i> Chapter Introduction
              </h2>
              <p>{chapter.introduction}</p>
            </div>

            {/* Shlokas */}
            {sampleShlokas.map((shlok) => (
              <ShlokCard key={shlok.number} {...shlok} />
            ))}

            {/* Footer Nav */}
            <div className="chapter-footer">
              {chapter.number > 1 && (
                <Link
                  to={`/chapter/${chapter.number - 1}`}
                  className="btn light"
                >
                  ← Previous
                </Link>
              )}
              <Link to="/chapters" className="btn outline">
                All Chapters
              </Link>
              {chapter.number < 3 && (
                <Link
                  to={`/chapter/${chapter.number + 1}`}
                  className="btn dark"
                >
                  Next →
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Floating Button */}
      <button className="floating-btn" onClick={() => setIsMobileNavOpen(true)}>
        <i className="ri-list-unordered"></i>
      </button>
    </div>
  );
};

export default ChapterPage;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ShlokNavigation from "../../components/navigation/ShlokNavigation";
import ShlokCard from "../../components/shlok/ShlokCard";
import { chapter1Shlokas, type Shlok } from "../../data/chapter1";
import "../../styles/pages-style/chapterPage.css";

interface ChapterData {
  number: number;
  title: string;
  sanskritTitle: string;
  introduction: string;
  totalShlokas: number;
  shlokas: Shlok[];
}

const chapterData: Record<string, ChapterData> = {
  "1": {
    number: 1,
    title: "Arjuna Vishada Yoga",
    sanskritTitle: "अर्जुन विषाद योग",
    introduction:
      "भगवद्गीता का प्रथम अध्याय 'अर्जुन विषाद योग' कुरुक्षेत्र की रणभूमि पर घटित होता है। जब अर्जुन दोनों सेनाओं में अपने प्रियजनों — गुरुओं, पितामहों, भाइयों और मित्रों को देखते हैं, तो वे गहरे विषाद में डूब जाते हैं। उनके हाथ से धनुष गिर जाता है, अंग शिथिल हो जाते हैं और वे युद्ध न करने का निश्चय कर लेते हैं। यही विषाद (दुःख) समस्त गीता उपदेश की नींव बनता है। || The first chapter of the Bhagavad Gita, 'Arjuna Vishada Yoga', is set on the battlefield of Kurukshetra. When Arjuna sees his dear ones — teachers, grandfathers, brothers, and friends — arrayed on both sides, he is overcome with grief. His bow slips from his hand, his limbs fail, and he resolves not to fight. This sorrow (vishada) becomes the very foundation of the entire divine discourse that follows.",
    totalShlokas: 47,
    shlokas: chapter1Shlokas,
  },
  "2": {
    number: 2,
    title: "Sankhya Yoga",
    sanskritTitle: "सांख्य योग",
    introduction:
      "In this pivotal chapter, Krishna begins his spiritual instruction to Arjuna by explaining the eternal nature of the soul (Atman). He describes the immortal self that cannot be killed, and introduces the concept of Nishkama Karma — performing one's duty without attachment to results. This chapter lays the philosophical foundation of the Gita.",
    totalShlokas: 72,
    shlokas: [],
  },
  "3": {
    number: 3,
    title: "Karma Yoga",
    sanskritTitle: "कर्म योग",
    introduction:
      "Krishna elaborates on the path of selfless action (Karma Yoga). He explains that one cannot avoid action and that it is better to perform one's own duty imperfectly than to perform another's duty perfectly. He stresses the importance of performing actions as a sacrifice to God, without attachment to results.",
    totalShlokas: 43,
    shlokas: [],
  },
};

const ChapterPage = () => {
  const { chapterNumber } = useParams<{ chapterNumber: string }>();
  const [currentShlok, setCurrentShlok] = useState(1);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const chapter = chapterData[chapterNumber || "1"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentShlok(1);
    setIsMobileNavOpen(false);
  }, [chapterNumber]);

  const handleShlokSelect = (shlok: number) => {
    setCurrentShlok(shlok);
    setIsMobileNavOpen(false);
    // Scroll to shlok after short delay to allow re-render
    setTimeout(() => {
      const element = document.getElementById(`shlok-${shlok}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  if (!chapter) {
    return (
      <div className="chapter-error">
        <h1>Chapter Not Found</h1>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  // Use real shlokas for Chapter 1; placeholder for others
  const shlokas =
    chapter.shlokas.length > 0
      ? chapter.shlokas
      : Array.from({ length: chapter.totalShlokas }, (_, i) => ({
          number: i + 1,
          sanskritText: `श्लोक ${i + 1} — जल्द आ रहा है`,
          transliteration: `Shlok ${i + 1} — Coming Soon`,
          hindiMeaning: `अध्याय ${chapter.number} के श्लोक ${i + 1} का हिंदी अर्थ जल्द ही जोड़ा जाएगा।`,
          englishMeaning: `The meaning for Shlok ${i + 1} of Chapter ${chapter.number} will be added soon.`,
        }));

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
          {/* Mobile Nav Toggle */}
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

          {/* Main Content */}
          <main className="chapter-content">
            {/* Header */}
            <div className="chapter-header">
              <div className="chapter-number">{chapter.number}</div>
              <div>
                <h1>{chapter.title}</h1>
                <p className="sanskrit">{chapter.sanskritTitle}</p>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="chapter-stats">
              <span>
                <i className="ri-book-2-line"></i> {chapter.totalShlokas} Shlokas
              </span>
              <span>
                <i className="ri-translate-line"></i> Hindi & English
              </span>
              <span>
                <i className="ri-file-text-line"></i> Full Sanskrit
              </span>
            </div>

            {/* Intro */}
            <div className="chapter-intro">
              <h2>
                <i className="ri-information-line"></i> Chapter Introduction
              </h2>
              <p>{chapter.introduction}</p>
            </div>

            {/* Shlokas */}
            {shlokas.map((shlok) => (
              <ShlokCard
                key={shlok.number}
                number={shlok.number}
                sanskritText={shlok.sanskritText}
                transliteration={shlok.transliteration}
                hindiMeaning={shlok.hindiMeaning}
                englishMeaning={shlok.englishMeaning}
              />
            ))}

            {/* Footer Nav */}
            <div className="chapter-footer">
              {chapter.number > 1 && (
                <Link
                  to={`/chapter/${chapter.number - 1}`}
                  className="btn light"
                >
                  ← Previous Chapter
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
                  Next Chapter →
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Floating Nav Button */}
      <button
        className="floating-btn"
        onClick={() => setIsMobileNavOpen(true)}
        title="Open Shlok Navigation"
      >
        <i className="ri-list-unordered"></i>
      </button>
    </div>
  );
};

export default ChapterPage;

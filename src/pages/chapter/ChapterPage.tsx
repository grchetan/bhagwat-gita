import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ShlokNavigation from "../../components/navigation/ShlokNavigation";
import ShlokCard from "../../components/shlok/ShlokCard";
import { chapter1Shlokas, type Shlok } from "../../data/chapter1";
import "../../styles/pages-style/chapterPage.css";

// Styled vector Peacock Feather (More Pankh) SVG component representing Sri Krishna
const PeacockFeather = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 150" className={`peacock-feather-svg ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 145 C50 115, 48 85, 50 20" stroke="#aa820a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M50 135 Q30 115 20 85 Q10 52 50 20 M50 135 Q70 115 80 85 Q90 52 50 20" stroke="rgba(27, 77, 62, 0.12)" strokeWidth="1" fill="none" />
    
    {/* Concentric glowing rings of the peacock eye (Ocellus) */}
    <ellipse cx="50" cy="50" rx="18" ry="22" fill="#aa820a" opacity="0.8" />
    <ellipse cx="50" cy="52" rx="14" ry="17" fill="#1b4d3e" />
    <ellipse cx="50" cy="54" rx="11" ry="13" fill="#d4af37" />
    <ellipse cx="50" cy="56" rx="8" ry="9" fill="#0c1d3b" />
    <ellipse cx="48" cy="57" rx="4" ry="4" fill="#00e5ff" opacity="0.9" />
    
    {/* Fine barbs along the center stem */}
    <path d="M50 65 Q35 55 25 45 M50 75 Q30 65 18 50 M50 85 Q32 75 15 57 M50 95 Q35 85 20 67 M50 105 Q38 95 25 75 M50 115 Q40 105 28 85 M50 125 Q42 115 32 95" stroke="#aa820a" strokeWidth="1" fill="none" opacity="0.75" />
    <path d="M50 65 Q65 55 75 45 M50 75 Q70 65 82 50 M50 85 Q68 75 85 57 M50 95 Q65 85 80 67 M50 105 Q62 95 75 75 M50 115 Q60 105 72 85 M50 125 Q58 115 68 95" stroke="#aa820a" strokeWidth="1" fill="none" opacity="0.75" />
  </svg>
);

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
      : (Array.from({ length: chapter.totalShlokas }, (_, i) => ({
          number: i + 1,
          sanskritText: `श्लोक ${i + 1} — जल्द आ रहा है`,
          transliteration: `Shlok ${i + 1} — Coming Soon`,
          hindiMeaning: `अध्याय ${chapter.number} के श्लोक ${i + 1} का हिंदी अर्थ जल्द ही जोड़ा जाएगा।`,
          englishMeaning: `The meaning for Shlok ${i + 1} of Chapter ${chapter.number} will be added soon.`,
        })) as Shlok[]);

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
            {/* Header with peacock feather ornament */}
            <div className="chapter-header">
              <div className="chapter-header-left">
                <div className="chapter-number">{chapter.number}</div>
                <div>
                  <h1>{chapter.title}</h1>
                  <p className="sanskrit">{chapter.sanskritTitle}</p>
                </div>
              </div>
              <div className="chapter-header-right">
                <PeacockFeather className="header-feather" />
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

            {/* Intro with peacock feather watermark */}
            <div className="chapter-intro">
              <div className="intro-peacock-watermark">
                <PeacockFeather />
              </div>
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
                wordMeanings={shlok.wordMeanings}
                hindiMeaning={shlok.hindiMeaning}
                englishMeaning={shlok.englishMeaning}
                lifeLesson={shlok.lifeLesson}
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

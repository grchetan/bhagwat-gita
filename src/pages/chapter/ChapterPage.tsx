import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ShlokNavigation from "../../components/navigation/ShlokNavigation";
import ShlokCard from "../../components/shlok/ShlokCard";
import { useLanguage, type Language } from "../../context/LanguageContext";
import { chapter1Shlokas, type Shlok } from "../../data/chapter1";
import { chapter2Shlokas } from "../../data/chapter2";
import { chapter3Shlokas } from "../../data/chapter3";
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
  titleKey: string;
  subKey: string;
  sanskritTitle: string;
  englishTitle: string;
  introduction: string;
  keyThemes: Record<Language, string[]>;
  totalShlokas: number;
  shlokas: Shlok[];
}

const chapterData: Record<string, ChapterData> = {
  "1": {
    number: 1,
    titleKey: "ch1_title",
    subKey: "ch1_subtitle",
    sanskritTitle: "अर्जुन विषाद योग",
    englishTitle: "Arjuna Vishada Yoga",
    introduction:
      "भगवद्गीता का प्रथम अध्याय 'अर्जुन विषाद योग' कुरुक्षेत्र की रणभूमि पर घटित होता है। जब अर्जुन दोनों सेनाओं में अपने प्रियजनों — गुरुओं, पितामहों, भाइयों और मित्रों को देखते हैं, तो वे गहरे विषाद में डूब जाते हैं। उनके हाथ से धनुष गिर जाता है, अंग शिथिल हो जाते हैं और वे युद्ध न करने का निश्चय कर लेते हैं। यही विषाद (दुःख) समस्त गीता उपदेश की नींव बनता है। || The first chapter of the Bhagavad Gita, 'Arjuna Vishada Yoga', is set on the battlefield of Kurukshetra. When Arjuna sees his dear ones — teachers, grandfathers, brothers, and friends — arrayed on both sides, he is overcome with grief. His bow slips from his hand, his limbs fail, and he resolves not to fight. This sorrow (vishada) becomes the very foundation of the entire divine discourse that follows.",
    keyThemes: {
      en: [
        "Arjuna observes both armies at Kurukshetra and falls into deep moral despair and confusion.",
        "Grief and overwhelming personal attachment cause him to drop his Gandiva bow and contemplate renunciation.",
        "True spiritual awakening begins when a seeker recognizes personal limitations and surrenders to the Divine Guide."
      ],
      hi: [
        "कुरुक्षेत्र में दोनों सेनाओं का अवलोकन और अर्जुन का गहरा मानसिक संशय एवं विषाद।",
        "अहंकार और मोह के कारण कर्तव्य से पलायन का प्रयास एवं गाण्डीव का त्याग।",
        "सच्चे आत्म-विकास का आरंभ तब होता है जब मनुष्य अपनी सीमाएं पहचानकर भगवान के आगे समर्पित होता है।"
      ],
      te: [
        "కురుక్షేత్ర రణభూమిలో బంధువులను చూసి అర్జునుడు తీవ్ర విషాదం మరియు మానసిక సంక్షోభంలో పడ్డాడు.",
        "మోహం మరియు మమకారం కారణంగా గాండీవాన్ని విడిచిపెట్టి కర్తవ్య విముఖుడయ్యాడు.",
        "మానవుడు తన పరిమితులను గుర్తించి శ్రీకృష్ణుడికి ఆత్మసమర్పణ చేసినప్పుడే నిజమైన ఆధ్యాత్మిక జ్ఞానోదయం ప్రారంభమవుతుంది."
      ],
    },
    totalShlokas: 47,
    shlokas: chapter1Shlokas,
  },
  "2": {
    number: 2,
    titleKey: "ch2_title",
    subKey: "ch2_subtitle",
    sanskritTitle: "सांख्य योग",
    englishTitle: "Sankhya Yoga",
    introduction:
      "भगवद्गीता का द्वितीय अध्याय 'सांख्य योग' गीता का दार्शनिक आधार है। भगवान श्री कृष्ण यहाँ अर्जुन को आत्मा के अजन्मा और अविनाशी स्वरूप का बोध कराते हैं। वे समझाते हैं कि शरीर नश्वर है किंतु आत्मा शाश्वत है। इसके उपरांत, कृष्ण निष्काम कर्मयोग का अमर सूत्र 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन' देते हैं और एक समत्व बुद्धियुक्त 'स्थितप्रज्ञ' साधक के लक्षण प्रस्तुत करते हैं। || In this pivotal chapter, Krishna begins his spiritual instruction to Arjuna by explaining the eternal nature of the soul (Atman). He describes the immortal self that cannot be killed, and introduces the concept of Nishkama Karma — performing one's duty without attachment to results. This chapter lays the philosophical foundation of the Gita.",
    keyThemes: {
      en: [
        "The Soul (Atman) is eternal and indestructible — it never dies, nor was it ever born (Na Jayate Mriyate Va).",
        "Nishkama Karma — You have a right only to perform your prescribed duty, never to the fruits of action (Karmanyevadhikaraste).",
        "The Sthitaprajna Sage — The enlightened master who remains serene in pleasure and pain, free from fear and anger."
      ],
      hi: [
        "आत्मा शाश्वत और अमर है — न यह कभी जन्म लेती है और न कभी मरती है (न जायते म्रियते वा)।",
        "निष्काम कर्मयोग — केवल कर्म पर तुम्हारा अधिकार है, उसके फलों पर कभी नहीं (कर्मण्येवाधिकारस्ते)।",
        "स्थितप्रज्ञ के लक्षण — जो सुख-दुःख, राग-द्वेष और भय में समभाव रखता है, वही सच्चा आत्मज्ञानी है।"
      ],
      te: [
        "ఆత్మ శాశ్వతమైనది మరియు నాశనం లేనిది — ఆత్మకు చావు పుట్టుకలు లేవు (న జాయతే మ్రియతే వా).",
        "నిష్కామ కర్మయోగం — కర్మను ఆచరించడంలోనే నీకు అధికారం ఉంది, ఫలితాల మీద ఎన్నడూ లేదు (కర్మణ్యేవాధికారస్తే).",
        "స్థితప్రజ్ఞుడి లక్షణాలు — సుఖదుఃఖాలు, భయం మరియు కోపాలను జయించి నిశ్చల బుద్ధితో ఉండేవాడే నిజమైన జ్ఞాని."
      ],
    },
    totalShlokas: 72,
    shlokas: chapter2Shlokas,
  },
  "3": {
    number: 3,
    titleKey: "ch3_title",
    subKey: "ch3_subtitle",
    sanskritTitle: "कर्म योग",
    englishTitle: "Karma Yoga",
    introduction:
      "भगवद्गीता का तृतीय अध्याय 'कर्म योग' जीवन में कर्म की अनिवार्यता और निष्काम कर्म के दिव्य विज्ञान का उद्घाटन करता है। अर्जुन ज्ञान और कर्म के द्वंद्व में उलझकर कर्म से भागने का विचार करते हैं। तब भगवान श्री कृष्ण उन्हें समझाते हैं कि कर्म से कोई भी प्राणी बच नहीं सकता; इसलिए आसक्ति और फल की चिंता छोड़कर लोक-कल्याण की भावना से कर्म करना ही सच्चा योग और मुक्ति का मार्ग है। || The third chapter of the Bhagavad Gita, 'Karma Yoga', unveils the divine science of selfless action and the inevitability of work in human life. Perplexed by the apparent contradiction between contemplative wisdom and active duty, Arjuna contemplates abandoning action. Sri Krishna enlightens him that no living being can remain inactive even for a moment; therefore, performing one's natural duty with dedication, without selfish attachment to the fruits of work, is the supreme path to inner purification and spiritual liberation.",
    keyThemes: {
      en: [
        "No living being can remain inactive even for a moment; dedicated selfless action is the highest spiritual path.",
        "The Cosmic Cycle of Yajna — Contributing back to society and nature in the sacred spirit of mutual sacrifice.",
        "Loka-sangraha (Exemplary Leadership) — Setting inspiring standards through noble personal conduct for the welfare of the world.",
        "Conquering Kama (Selfish Desire) and Krodha (Anger) — Overcoming inner vices through higher spiritual intellect."
      ],
      hi: [
        "कर्म से कोई प्राणी एक क्षण भी मुक्त नहीं रह सकता; अतः निस्वार्थ कर्तव्य-पालन ही सर्वश्रेष्ठ योग है।",
        "यज्ञ-चक्र (पारस्परिक त्याग) — प्रकृति और समाज से जो प्राप्त हो, उसे सेवा रूपी आहुति से लौटाना।",
        "लोक-संग्रह (नेतृत्व) — श्रेष्ठ पुरुष जैसा आचरण करते हैं, सारा समाज उसी का अनुकरण करता है।",
        "काम और क्रोध मनुष्य के सबसे बड़े शत्रु हैं, जिन्हें बुद्धि और आत्म-संयम से जीतना आवश्यक है।"
      ],
      te: [
        "ఏ ప్రాణి కూడా ఒక్క క్షణం కూడా కర్మ చేయకుండా ఉండలేదు; నిస్వార్థ కర్తవ్య పాలనే ఉత్తమ యోగం.",
        "యజ్ఞ చక్రం — సమాజం మరియు ప్రకృతి నుండి పొందిన దానిని నిస్వార్థ సేవ మరియు త్యాగంతో తిరిగి అందించడం.",
        "లోకసంగ్రహం (ఆదర్శ నాయకత్వం) — ఉత్తమ వ్యక్తులు ఆచరించే మార్గాన్నే సామాన్య ప్రజలు అనుసరిస్తారు.",
        "కామం మరియు క్రోధం ఆత్మకు పరమ శత్రువులు, వాటిని ఆత్మజ్ఞానము మరియు బుద్ధి ద్వారా జయించాలి."
      ],
    },
    totalShlokas: 43,
    shlokas: chapter3Shlokas,
  },
};

const ChapterPage = () => {
  const { chapterNumber } = useParams<{ chapterNumber: string }>();
  const [currentShlok, setCurrentShlok] = useState(1);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [globalLang, setGlobalLang] = useState<"both" | "hindi" | "english">("both");
  const [fontScale, setFontScale] = useState<"normal" | "large" | "xlarge">("normal");
  const [showThemes, setShowThemes] = useState(true);
  const [jumpInput, setJumpInput] = useState("");

  const { language, t } = useLanguage();
  const chapter = chapterData[chapterNumber || "1"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentShlok(1);
    setIsMobileNavOpen(false);
    setJumpInput("");
  }, [chapterNumber]);

  // Observer to track which shlok is currently in view
  useEffect(() => {
    const handleScrollTracking = () => {
      const shlokCards = document.querySelectorAll<HTMLElement>("[data-shlok-number]");
      const scrollPosition = window.scrollY + 180;

      for (let i = shlokCards.length - 1; i >= 0; i--) {
        const card = shlokCards[i];
        if (card.offsetTop <= scrollPosition) {
          const num = parseInt(card.getAttribute("data-shlok-number") || "1", 10);
          setCurrentShlok(num);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollTracking, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollTracking);
  }, [chapterNumber]);

  const handleShlokSelect = (shlok: number) => {
    setCurrentShlok(shlok);
    setIsMobileNavOpen(false);
    setTimeout(() => {
      const element = document.getElementById(`shlok-${shlok}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!isNaN(num) && num >= 1 && num <= chapter.totalShlokas) {
      handleShlokSelect(num);
      setJumpInput("");
    }
  };

  if (!chapter) {
    return (
      <div className="chapter-error">
        <h1>Chapter Not Found</h1>
        <p>This chapter is currently in preparation.</p>
        <Link to="/chapters" className="btn dark">
          View All Chapters
        </Link>
      </div>
    );
  }

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

  // Localized main title and subtitle based on selected UI language
  const primaryTitle = language === "en" ? chapter.englishTitle : t(chapter.titleKey);
  const secondaryTitle = language === "en" ? chapter.sanskritTitle : chapter.englishTitle;
  const chapterTagline = t(chapter.subKey);
  const currentThemes = chapter.keyThemes[language] || chapter.keyThemes.en;

  return (
    <div className="chapter-page">
      <div className="chapter-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">{t("breadcrumb_home")}</Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link to="/chapters">{t("breadcrumb_chapters")}</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span>
            {t("breadcrumb_chapter")} {chapter.number}
          </span>
        </nav>

        {/* Quick Chapter Pill Switcher Bar */}
        <div className="chapter-pill-switcher">
          <div className="pill-switcher-label">
            <i className="ri-compass-3-line"></i>
            <span>{t("select_chapter")}</span>
          </div>
          <div className="pill-list">
            <Link
              to="/chapter/1"
              className={`chapter-pill ${chapter.number === 1 ? "active" : ""}`}
            >
              <span className="pill-num">1</span>
              <span>{t("ch1_title")}</span>
            </Link>
            <Link
              to="/chapter/2"
              className={`chapter-pill ${chapter.number === 2 ? "active" : ""}`}
            >
              <span className="pill-num">2</span>
              <span>{t("ch2_title")}</span>
            </Link>
            <Link
              to="/chapter/3"
              className={`chapter-pill ${chapter.number === 3 ? "active" : ""}`}
            >
              <span className="pill-num">3</span>
              <span>{t("ch3_title")}</span>
            </Link>
            <Link to="/chapters" className="chapter-pill all-pill">
              <i className="ri-list-unordered"></i>
              <span>{t("all_chapters_btn")}</span>
            </Link>
          </div>
        </div>

        <div className="chapter-layout">
          {/* Mobile Nav Toggle */}
          <div className="mobile-nav">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Toggle shlok list"
            >
              <span>
                <i className="ri-book-open-line"></i> {t("shlokas_list")} ({t("shlok_prefix")} {currentShlok}/{chapter.totalShlokas})
              </span>
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
                  <h1>{primaryTitle}</h1>
                  <p className="chapter-subtitle-en">
                    {secondaryTitle}
                  </p>
                  <p className="chapter-tagline">{chapterTagline}</p>
                </div>
              </div>
              <div className="chapter-header-right">
                <PeacockFeather className="header-feather" />
              </div>
            </div>

            {/* Stats Bar */}
            <div className="chapter-stats">
              <span>
                <i className="ri-book-2-line"></i> {chapter.totalShlokas} {t("verses_suffix")}
              </span>
              <span>
                <i className="ri-translate-line"></i> {t("stat_translations")}
              </span>
              <span>
                <i className="ri-file-text-line"></i> {t("stat_sanskrit")}
              </span>
            </div>

            {/* Key Themes Guide Banner (अध्याय सार एवं प्रमुख सूत्र) */}
            {currentThemes && (
              <div className="chapter-themes-box">
                <div
                  className="themes-header"
                  onClick={() => setShowThemes(!showThemes)}
                >
                  <div className="themes-title">
                    <span className="themes-icon">🕉️</span>
                    <h3>{t("core_insights")}</h3>
                  </div>
                  <button
                    className="themes-toggle-btn"
                    aria-label="Toggle themes view"
                  >
                    <span>{showThemes ? t("btn_hide") : t("btn_view")}</span>
                    <i
                      className={`ri-arrow-${showThemes ? "up" : "down"}-s-line`}
                    ></i>
                  </button>
                </div>

                {showThemes && (
                  <div className="themes-content">
                    <ul>
                      {currentThemes.map((pt, idx) => (
                        <li key={idx}>
                          <span className="theme-bullet">✦</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Intro with peacock feather watermark */}
            <div className="chapter-intro">
              <div className="intro-peacock-watermark">
                <PeacockFeather />
              </div>
              <h2>
                <i className="ri-information-line"></i> {t("chapter_overview")}
              </h2>
              <p>{chapter.introduction}</p>
            </div>

            {/* Reading Comfort Controls Toolbar */}
            <div className="reading-toolbar">
              <div className="toolbar-section">
                <span className="toolbar-label">
                  <i className="ri-translate"></i> {t("toolbar_meaning_lang")}
                </span>
                <div className="toolbar-btn-group">
                  <button
                    className={`toolbar-btn ${globalLang === "both" ? "active" : ""}`}
                    onClick={() => setGlobalLang("both")}
                  >
                    {t("toolbar_lang_both")}
                  </button>
                  <button
                    className={`toolbar-btn ${globalLang === "hindi" ? "active" : ""}`}
                    onClick={() => setGlobalLang("hindi")}
                  >
                    {t("toolbar_lang_hindi")}
                  </button>
                  <button
                    className={`toolbar-btn ${globalLang === "english" ? "active" : ""}`}
                    onClick={() => setGlobalLang("english")}
                  >
                    {t("toolbar_lang_english")}
                  </button>
                </div>
              </div>

              <div className="toolbar-section">
                <span className="toolbar-label">
                  <i className="ri-font-size-2"></i> {t("toolbar_font_size")}
                </span>
                <div className="toolbar-btn-group font-group">
                  <button
                    className={`toolbar-btn ${fontScale === "normal" ? "active" : ""}`}
                    onClick={() => setFontScale("normal")}
                    title="Normal Size"
                  >
                    A
                  </button>
                  <button
                    className={`toolbar-btn ${fontScale === "large" ? "active" : ""}`}
                    onClick={() => setFontScale("large")}
                    title="Large Size"
                  >
                    A+
                  </button>
                  <button
                    className={`toolbar-btn ${fontScale === "xlarge" ? "active" : ""}`}
                    onClick={() => setFontScale("xlarge")}
                    title="Extra Large Size"
                  >
                    A++
                  </button>
                </div>
              </div>

              {/* Quick Shlok Jumper Form */}
              <form className="shlok-jumper-form" onSubmit={handleJumpSubmit}>
                <span className="toolbar-label">
                  <i className="ri-search-eye-line"></i> {t("toolbar_direct_jump")}
                </span>
                <div className="jumper-input-wrapper">
                  <input
                    type="number"
                    min="1"
                    max={chapter.totalShlokas}
                    placeholder={`1-${chapter.totalShlokas}`}
                    value={jumpInput}
                    onChange={(e) => setJumpInput(e.target.value)}
                    className="jumper-input"
                  />
                  <button type="submit" className="jumper-btn">
                    {t("btn_go")}
                  </button>
                </div>
              </form>
            </div>

            {/* Shlokas List */}
            <div className="shlokas-container">
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
                  globalLang={globalLang}
                  fontScale={fontScale}
                />
              ))}
            </div>

            {/* Footer Navigation between chapters */}
            <div className="chapter-footer">
              {chapter.number > 1 && (
                <Link
                  to={`/chapter/${chapter.number - 1}`}
                  className="btn light"
                >
                  {t("prev_chapter")} (Ch {chapter.number - 1})
                </Link>
              )}
              <Link to="/chapters" className="btn outline">
                {t("all_18_chapters_footer")}
              </Link>
              {chapter.number < 3 && (
                <Link
                  to={`/chapter/${chapter.number + 1}`}
                  className="btn dark"
                >
                  {t("next_chapter")} (Ch {chapter.number + 1})
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Floating Shlok Navigation Button on Mobile */}
      <button
        className="floating-btn"
        onClick={() => setIsMobileNavOpen(true)}
        title={t("shlokas_list")}
        aria-label="Open shlok navigation drawer"
      >
        <i className="ri-list-unordered"></i>
        <span className="floating-badge">{currentShlok}</span>
      </button>
    </div>
  );
};

export default ChapterPage;

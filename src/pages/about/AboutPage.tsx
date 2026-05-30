import { Link } from "react-router-dom";
import "../../styles/pages-style/aboutPage.css";

// Import locally generated high-fidelity spiritual assets
import aboutHeroImg from "../../assets/images/about-hero.png";
import krishnaProfileImg from "../../assets/images/krishna-profile.png";
import jyotisarImg from "../../assets/images/jyotisar.png";
import arjunaDespairImg from "../../assets/images/arjuna-despair.png";
import sacredBookImg from "../../assets/images/sacred-book.png";
import cosmicVisionImg from "../../assets/images/cosmic-vision.png";
import absoluteSurrenderImg from "../../assets/images/absolute-surrender.png";
import ancientTempleImg from "../../assets/images/ancient-temple.png";
import englishTranslationImg from "../../assets/images/english-translation.png";
import globalBeaconImg from "../../assets/images/global-beacon.png";

const AboutPage = () => {
  const chapters = [
    { no: 1, title: "Arjuna Vishada Yoga", eng: "Arjuna's Despair", icon: "ri-shield-line", desc: "Arjuna surveys the battlefield, overwhelmed by grief and moral conflict, and surrenders to Krishna." },
    { no: 2, title: "Sankhya Yoga", eng: "Analytical Teachings", icon: "ri-lightbulb-line", desc: "Krishna teaches the eternity of the soul, duty (dharma), and the path of detached action." },
    { no: 3, title: "Karma Yoga", eng: "Path of Selfless Action", icon: "ri-service-line", desc: "Performing one's duty without attachment to outcomes, turning work into selfless worship." },
    { no: 4, title: "Jnana Karma Sanyasa Yoga", eng: "Knowledge & Sacrifice", icon: "ri-book-open-line", desc: "The descent of divine knowledge, the nature of action, and the fire of spiritual wisdom." },
    { no: 5, title: "Karma Sanyasa Yoga", eng: "Path of Renunciation", icon: "ri-home-heart-line", desc: "Comparing outer renunciation and selfless action, finding peace in internal detachment." },
    { no: 6, title: "Dhyana Yoga", eng: "Path of Meditation", icon: "ri-mental-health-line", desc: "The practice of mental control, sitting in meditation, and realizing the self within." },
    { no: 7, title: "Jnana Vijnana Yoga", eng: "Wisdom & Realization", icon: "ri-focus-2-line", desc: "Understanding the material and spiritual energies of the Divine, and paths of surrender." },
    { no: 8, title: "Akshara Brahma Yoga", eng: "The Imperishable Absolute", icon: "ri-infinity-line", desc: "The nature of creation, life, death, and achieving the supreme destination at the end of life." },
    { no: 9, title: "Raja Vidya Raja Guhya Yoga", eng: "The King of Secrets", icon: "ri-key-2-line", desc: "The most confidential knowledge of devotion, divine protection, and selfless offering." },
    { no: 10, title: "Vibhuti Vistara Yoga", eng: "The Divine Opulences", icon: "ri-star-line", desc: "Krishna reveals His infinite manifestations and opulences in the material and spiritual worlds." },
    { no: 11, title: "Vishwarupa Darshana Yoga", eng: "The Cosmic Vision", icon: "ri-eye-line", desc: "Krishna reveals His majestic, all-devouring Universal Form to Arjuna on the battlefield." },
    { no: 12, title: "Bhakti Yoga", eng: "Path of Devotion", icon: "ri-heart-line", desc: "The qualities of a true devotee and the supremacy of pure, unalloyed love for the Divine." },
    { no: 13, title: "Kshetra Kshetrajna Vibhaga Yoga", eng: "The Field & The Knower", icon: "ri-landscape-line", desc: "Distinguishing between the physical body (field) and the eternal soul (the knower)." },
    { no: 14, title: "Gunatraya Vibhaga Yoga", eng: "The Three Modes of Nature", icon: "ri-git-merge-line", desc: "Analyzing the three binding forces of material nature: goodness, passion, and ignorance." },
    { no: 15, title: "Purushottama Yoga", eng: "The Supreme Person", icon: "ri-user-star-line", desc: "The allegory of the cosmic banyan tree and the nature of the Supreme Divine Personality." },
    { no: 16, title: "Daivasura Sampad Vibhaga Yoga", eng: "Divine & Demonic Natures", icon: "ri-sword-line", desc: "Exploring noble spiritual attributes versus binding, egotistical and destructive qualities." },
    { no: 17, title: "Shraddhatraya Vibhaga Yoga", eng: "Three Divisions of Faith", icon: "ri-sparkles-line", desc: "How faith, food, charity, sacrifice, and penance are influenced by the three gunas." },
    { no: 18, title: "Moksha Sanyasa Yoga", eng: "Liberation & Surrender", icon: "ri-door-open-line", desc: "The ultimate synthesis of all yogas, concluding with total surrender and absolute liberation." }
  ];

  return (
    <div className="about-page">
      {/* 1. Hero Battlefield Banner */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img 
            src={aboutHeroImg} 
            alt="Lord Krishna and Arjuna on the Chariot at Kurukshetra" 
            className="hero-image"
          />
          <div className="about-hero-overlay"></div>
        </div>
        
        <div className="about-hero-container">
          {/* Breadcrumb inside Hero for premium layout */}
          <nav className="about-breadcrumb">
            <Link to="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>About</span>
          </nav>
          
          <div className="hero-content">
            <span className="hero-badge">श्रीमद्भगवद्गीता</span>
            <h1 className="hero-title">
              <span className="sanskrit-title-main">श्रीमद्भगवद्गीता</span>
              <span className="hero-title-en">The Celestial Song of God</span>
            </h1>
            <p className="hero-subtitle">
              An eternal, universal dialogue of self-realization, duty, and ultimate devotion delivered by Lord Sri Krishna to Arjuna on the historic battlefield of Kurukshetra.
            </p>

          </div>
        </div>
      </section>

      <div className="about-sections-wrapper">
        
        {/* 2. Lord Krishna Section */}
        <section className="about-krishna-section">
          <div className="section-container split-layout">
            <div className="text-side krishna-details">
              <span className="section-label">THE SUPREME GUIDE</span>
              <h2 className="section-title">Lord Sri Krishna</h2>
              <div className="divider-gold"></div>
              
              <div className="scholarly-text">
                <p>
                  In the Vedic tradition, Lord Sri Krishna is recognized as the Supreme Personality of Godhead, the source of all cosmic manifestations, and the ultimate shelter of all living entities. During the historic epoch of the Mahabharata, He assumed the role of a loving guide, diplomat, and counselor, choosing to remain neutral by serving as the unarmed charioteer (<em>Parthasarathy</em>) for His dear devotee and friend, Prince Arjuna. 
                </p>
                <p>
                  As the colossal conflict of Kurukshetra loomed, He placed the chariot between the two massive armies to speak the Bhagavad Gita—not merely to solve a temporary battlefield dilemma, but to illuminate the path of righteousness for all of humanity. Sri Krishna possesses the six divine opulences (<em>shad-aishwarya</em>) in absolute full: infinite wealth, absolute power, unmatched fame, exquisite beauty, supreme wisdom, and complete renunciation. 
                </p>
                <p>
                  Through His immortal teachings, Krishna guides the human soul through the conflicts of daily existence, demonstrating how to lead an active life of duty while remaining internally anchored in divine consciousness. His call to surrender is the ultimate assurance of divine love and liberation.
                </p>
              </div>
            </div>
            
            <div className="image-side krishna-visual">
              <div className="spiritual-img-card">
                <img 
                  src={krishnaProfileImg} 
                  alt="Traditional Painting of Lord Krishna" 
                  className="section-img"
                />
                <div className="img-overlay-glow"></div>
                <div className="image-caption">
                  <i className="ri-quill-pen-line"></i>
                  <span>Sri Krishna — Serene Divine Flute Painting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Origin Story Section */}
        <section className="about-origin-section">
          <div className="section-container split-layout reverse">
            <div className="image-side origin-visual">
              <div className="spiritual-img-card">
                <img 
                  src={jyotisarImg} 
                  alt="Jyotisar Kurukshetra Chariot Monument" 
                  className="section-img"
                />
                <div className="img-overlay-glow"></div>
                <div className="image-caption">
                  <i className="ri-map-pin-line"></i>
                  <span>Jyotisar, Kurukshetra — The Birthplace of Bhagavad Gita</span>
                </div>
              </div>
            </div>

            <div className="text-side origin-details">
              <span className="section-label">HISTORICAL & SPIRITUAL ROOTS</span>
              <h2 className="section-title">The Origin Story</h2>
              <div className="divider-gold"></div>
              
              <div className="scholarly-text">
                <p>
                  The Bhagavad Gita was spoken over five thousand years ago on the battlefield of Kurukshetra, located in modern-day Haryana, India. It was the eve of the colossal Mahabharata war, fought between the virtuous Pandavas and the ambitious Kauravas to restore righteousness (<em>dharma</em>) to the royal throne of Hastinapura. 
                </p>
                <p>
                  Just as the conch shells were sounded, signaling the beginning of the clash, Prince Arjuna asked his guide Sri Krishna to drive his chariot into the middle of the field (<em>senayor ubhayor madhye</em>). Looking upon the opposing ranks, Arjuna saw his grandfather Bhishma, his revered preceptor Drona, his cousins, uncles, and lifelong friends ready to slay one another. 
                </p>
                <p>
                  Overwhelmed by deep grief, compassion, and moral confusion, Arjuna's mind failed him, his body trembled, and he laid down his mighty <em>Gandiva</em> bow. It was at this critical juncture of ultimate despair that Lord Krishna spoke the 700 verses of the Gita, transforming Arjuna's grief into unwavering clarity and righteous resolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Moments of the Gita Gallery */}
        <section className="about-gallery-section">
          <div className="section-container text-center">
            <span className="section-label">SACRED VISUAL NARRATIVE</span>
            <h2 className="section-title">Moments of the Gita</h2>
            <p className="section-subtitle">
              Explore the key narrative milestones in the conversation between the human soul and the Divine
            </p>
            <div className="divider-gold center"></div>

            <div className="gita-moments-gallery">
              <div className="moment-card">
                <div className="moment-img-wrapper">
                  <img 
                    src={arjunaDespairImg} 
                    alt="Arjuna's Despair" 
                    className="moment-img"
                  />
                  <div className="moment-glow"></div>
                </div>
                <div className="moment-info">
                  <h3>1. Arjuna's Despair</h3>
                  <span className="sanskrit-moment">अर्जुनविषादयोग</span>
                  <p>
                    Faced with the destruction of his own family, the mighty warrior collapses in grief, laying down his bow and seeking spiritual refuge.
                  </p>
                </div>
              </div>

              <div className="moment-card">
                <div className="moment-img-wrapper">
                  <img 
                    src={sacredBookImg} 
                    alt="The Divine Instruction" 
                    className="moment-img"
                  />
                  <div className="moment-glow"></div>
                </div>
                <div className="moment-info">
                  <h3>2. Divine Instruction</h3>
                  <span className="sanskrit-moment">दिव्योपदेश</span>
                  <p>
                    Lord Krishna reveals the eternal, indestructible nature of the soul and introduces the paths of Karma, Jnana, and Bhakti Yoga.
                  </p>
                </div>
              </div>

              <div className="moment-card">
                <div className="moment-img-wrapper">
                  <img 
                    src={cosmicVisionImg} 
                    alt="The Universal Form" 
                    className="moment-img"
                  />
                  <div className="moment-glow"></div>
                </div>
                <div className="moment-info">
                  <h3>3. Cosmic Revelation</h3>
                  <span className="sanskrit-moment">विश्वरूपदर्शन</span>
                  <p>
                    Sri Krishna reveals His majestic, boundless, and all-devouring Universal Form, showcasing the entire cosmos operating within Him.
                  </p>
                </div>
              </div>

              <div className="moment-card">
                <div className="moment-img-wrapper">
                  <img 
                    src={absoluteSurrenderImg} 
                    alt="The Ultimate Surrender" 
                    className="moment-img"
                  />
                  <div className="moment-glow"></div>
                </div>
                <div className="moment-info">
                  <h3>4. Absolute Surrender</h3>
                  <span className="sanskrit-moment">शरणागति</span>
                  <p>
                    Freed from illusion, Arjuna stands in perfect clarity and devotion, picks up his bow, and resolves to execute the divine will.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 18 Chapters Section */}
        <section className="about-chapters-section">
          <div className="section-container text-center">
            <span className="section-label">THE STRUCTURE OF WISDOM</span>
            <h2 className="section-title">The 18 Chapters of Gita</h2>
            <p className="section-subtitle">
              The scripture is divided into three sections of six chapters each, guiding the soul from action to knowledge and devotion
            </p>
            <div className="divider-gold center"></div>

            <div className="chapters-grid">
              {chapters.map((ch) => (
                <div className="chapter-visual-card" key={ch.no}>
                  <div className="chapter-card-header">
                    <div className="chapter-badge">
                      <span>CH</span>
                      <strong>{ch.no}</strong>
                    </div>
                    <div className="chapter-icon-box">
                      <i className={ch.icon}></i>
                    </div>
                  </div>
                  <div className="chapter-card-body">
                    <h3>{ch.title}</h3>
                    <span className="chapter-translation">{ch.eng}</span>
                    <p>{ch.desc}</p>
                  </div>
                  <div className="card-border-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Historical Timeline Section */}
        <section className="about-timeline-section">
          <div className="section-container">
            <div className="text-center">
              <span className="section-label">THE IMMORTAL LEGACY</span>
              <h2 className="section-title">Journey Through the Millennia</h2>
              <p className="section-subtitle">
                How the divine instructions of Kurukshetra traveled down the ages to become a universal beacon of truth
              </p>
              <div className="divider-gold center"></div>
            </div>

            <div className="historical-timeline">
              <div className="timeline-line"></div>

              {/* Node 1 */}
              <div className="timeline-item left">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-card">
                  <div className="timeline-image-box">
                    <img 
                      src={aboutHeroImg} 
                      alt="Ancient Origins" 
                    />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">3102 BCE</span>
                    <h3>The Battlefield Origin</h3>
                    <p>
                      Spoken directly by Lord Sri Krishna to Arjuna on the eve of the Kurukshetra War. Sages preserved these instructions orally as a sacred lineage (<em>sampradaya</em>) before being compiled into the Mahabharata epic by Srila Vyasadeva.
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 2 */}
              <div className="timeline-item right">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-card">
                  <div className="timeline-image-box">
                    <img 
                      src={ancientTempleImg} 
                      alt="Adi Shankaracharya Bhashya" 
                    />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">8th Century CE</span>
                    <h3>The Vedantic Foundation</h3>
                    <p>
                      The brilliant philosopher Adi Shankaracharya wrote the oldest surviving Sanskrit commentary (<em>Gita Bhashya</em>). This elevated the Gita to a foundational pillar of Vedanta philosophy alongside the Upanishads and Brahma Sutras.
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 3 */}
              <div className="timeline-item left">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-card">
                  <div className="timeline-image-box">
                    <img 
                      src={englishTranslationImg} 
                      alt="First English Translation" 
                    />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">1785 CE</span>
                    <h3>Crossing the Borders</h3>
                    <p>
                      Charles Wilkins translated the Gita into English for the first time under the patronage of Warren Hastings. This introduced Indian spiritual depth to the Western world, deeply inspiring Ralph Waldo Emerson, Thoreau, and early transcendentalists.
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 4 */}
              <div className="timeline-item right">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-card">
                  <div className="timeline-image-box">
                    <img 
                      src={globalBeaconImg} 
                      alt="Global spiritual beacon" 
                    />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">Modern Era</span>
                    <h3>A Global Wisdom Beacon</h3>
                    <p>
                      The Gita served as Mahatma Gandhi's "spiritual dictionary" for his non-violent freedom movement. Today, it stands as a universal, non-sectarian guide for self-realization, read globally by millions in over 80 languages.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Call To Action */}
        <section className="about-cta">
          <div className="cta-container">
            <div className="cta-ornament">ॐ</div>
            <h2>Begin Your Spiritual Journey</h2>
            <p>
              Dive deep into the timeless dialogue between Arjuna and Sri Krishna. Learn how to conquer inner battles, discover your divine nature, and find absolute peace.
            </p>
            <Link to="/chapter/1" className="cta-btn-gilded">
              <span className="btn-shine"></span>
              <span className="btn-text">
                Start Reading Chapter 1
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;

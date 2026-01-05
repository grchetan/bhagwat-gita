import { Link } from "react-router-dom";
import "../../styles/pages-style/aboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span>About</span>
        </nav>

        {/* Header */}
        <header className="about-header">
          <h1>About the Bhagavad Gita</h1>
          <p>
            Discover the timeless wisdom of one of humanity's greatest spiritual
            texts
          </p>
        </header>

        {/* Intro */}
        <section className="about-card">
          <h2>
            <i className="ri-book-open-line"></i>
            What is the Bhagavad Gita?
          </h2>
          <p>
            The Bhagavad Gita, often referred to as simply the "Gita," is a
            700-verse Hindu scripture that is part of the epic Mahabharata. It
            consists of a conversation between Prince Arjuna and his guide Lord
            Krishna on the battlefield of Kurukshetra.
          </p>
          <p>
            This sacred dialogue addresses moral and philosophical dilemmas and
            provides profound insights into duty, righteousness, and the nature
            of reality.
          </p>
        </section>

        {/* Two Cards */}
        <section className="about-grid">
          <div className="info-card">
            <h3>
              <i className="ri-ancient-gate-line"></i>
              Historical Context
            </h3>
            <p>
              Composed between the 5th and 2nd centuries BCE, the Gita explores
              duty, morality, and spiritual liberation on the battlefield of
              Kurukshetra.
            </p>
          </div>

          <div className="info-card">
            <h3>
              <i className="ri-lightbulb-line"></i>
              Universal Teachings
            </h3>
            <p>
              Though rooted in Hindu philosophy, the Gita’s wisdom transcends
              religion and has inspired seekers worldwide for centuries.
            </p>
          </div>
        </section>

        {/* Three Yogas */}
        <section className="yoga-section">
          <h2>The Three Paths of Yoga</h2>
          <p>
            The Bhagavad Gita presents three primary paths (yogas) to spiritual
            realization:
          </p>

          <div className="yoga-card">
            <h3>1. Karma Yoga – The Path of Action</h3>
            <p>
              Performing duty without attachment to results, emphasizing
              selfless service.
            </p>
          </div>

          <div className="yoga-card">
            <h3>2. Jnana Yoga – The Path of Knowledge</h3>
            <p>
              Attaining self-realization through knowledge, contemplation, and
              wisdom.
            </p>
          </div>

          <div className="yoga-card">
            <h3>3. Bhakti Yoga – The Path of Devotion</h3>
            <p>
              Cultivating love and surrender toward the divine through devotion.
            </p>
          </div>
        </section>

        {/* Key Teachings */}
        <section className="key-teachings">
          <h2>Key Teachings</h2>
          <div className="teachings-grid">
            <div>
              <h4>Dharma (Righteous Duty)</h4>
              <p>Fulfilling one’s responsibilities with integrity.</p>
            </div>
            <div>
              <h4>Detachment</h4>
              <p>Freedom through non-attachment to outcomes.</p>
            </div>
            <div>
              <h4>Self-Realization</h4>
              <p>Recognizing the eternal soul beyond body and mind.</p>
            </div>
            <div>
              <h4>Divine Consciousness</h4>
              <p>Seeing the divine presence in all beings.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>Begin Your Journey</h2>
          <p>
            The Bhagavad Gita offers timeless guidance for spiritual growth and
            daily life.
          </p>
          <Link to="/chapter/1" className="cta-btn">
            Start Reading Chapter 1
            <i className="ri-arrow-right-line"></i>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

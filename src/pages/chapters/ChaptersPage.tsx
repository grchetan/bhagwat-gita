import { Link } from "react-router-dom";
import "../../styles/pages-style/chaptersPage.css";

const ChaptersPage = () => {
  const allChapters = [
    { number: 1, title: "Arjuna Vishada Yoga", subtitle: "The Distress of Arjuna", shlokas: 47, available: true },
    { number: 2, title: "Sankhya Yoga", subtitle: "Transcendental Knowledge", shlokas: 72, available: true },
    { number: 3, title: "Karma Yoga", subtitle: "Path of Action", shlokas: 43, available: true },
    { number: 4, title: "Jnana Karma Sanyasa Yoga", subtitle: "Transcendental Knowledge", shlokas: 42, available: false },
    { number: 5, title: "Karma Sanyasa Yoga", subtitle: "Action and Renunciation", shlokas: 29, available: false },
    { number: 6, title: "Atma Samyama Yoga", subtitle: "The Science of Self Realization", shlokas: 47, available: false },
    { number: 7, title: "Paramahamsa Vijnana Yoga", subtitle: "Knowledge of the Ultimate Truth", shlokas: 30, available: false },
    { number: 8, title: "Aksara Parabrahma Yoga", subtitle: "Attaining the Supreme", shlokas: 28, available: false },
    { number: 9, title: "Raja Vidya Yoga", subtitle: "The Most Confidential Knowledge", shlokas: 34, available: false },
    { number: 10, title: "Vibhuti Vistara Yoga", subtitle: "The Infinite Glories of the Ultimate Truth", shlokas: 42, available: false },
    { number: 11, title: "Visvarupa Darsana Yoga", subtitle: "The Vision of the Universal Form", shlokas: 55, available: false },
    { number: 12, title: "Bhakti Yoga", subtitle: "The Path of Devotion", shlokas: 20, available: false },
    { number: 13, title: "Ksetra Ksetrajna Vibhaga Yoga", subtitle: "The Field and the Knower of the Field", shlokas: 35, available: false },
    { number: 14, title: "Gunatraya Vibhaga Yoga", subtitle: "The Three Modes of Material Nature", shlokas: 27, available: false },
    { number: 15, title: "Purusottama Yoga", subtitle: "The Supreme Divine Personality", shlokas: 20, available: false },
    { number: 16, title: "Daivasura Sampad Vibhaga Yoga", subtitle: "The Divine and Demoniac Natures", shlokas: 24, available: false },
    { number: 17, title: "Sraddhatraya Vibhaga Yoga", subtitle: "The Threefold Division of Faith", shlokas: 28, available: false },
    { number: 18, title: "Moksa Opadesa Yoga", subtitle: "The Perfection of Renunciation", shlokas: 78, available: false },
  ];

  return (
    <div className="chapters-page">
      <div className="chapters-container">
        {/* Header */}
        <header className="chapters-header">
          <nav className="breadcrumb center">
            <Link to="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>All Chapters</span>
          </nav>

          <h1>18 Chapters of Wisdom</h1>
          <p>
            Explore the complete journey of spiritual enlightenment through Krishna's divine teachings to Arjuna.
          </p>
        </header>

        {/* Available */}
        <section className="section">
          <h2 className="section-title">
            <i className="ri-check-line green"></i> Available Now
          </h2>

          <div className="cards-grid">
            {allChapters.filter(c => c.available).map(ch => (
              <Link key={ch.number} to={`/chapter/${ch.number}`} className="chapter-card available">
                <div className="card-top">
                  <div className="badge gold">{ch.number}</div>
                  <div className="status ok"><i className="ri-check-line"></i></div>
                </div>

                <h3>Chapter {ch.number}</h3>
                <h4>{ch.title}</h4>
                <p className="subtitle">{ch.subtitle}</p>

                <div className="card-bottom">
                  <span className="pill">{ch.shlokas} Shlokas</span>
                  <span className="read">
                    Read Now <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="section">
          <h2 className="section-title">
            <i className="ri-time-line"></i> Coming Soon
          </h2>

          <div className="cards-grid">
            {allChapters.filter(c => !c.available).map(ch => (
              <div key={ch.number} className="chapter-card disabled">
                <div className="card-top">
                  <div className="badge gray">{ch.number}</div>
                  <div className="status wait"><i className="ri-time-line"></i></div>
                </div>

                <h3>Chapter {ch.number}</h3>
                <h4>{ch.title}</h4>
                <p className="subtitle">{ch.subtitle}</p>

                <div className="card-bottom">
                  <span className="pill gray">{ch.shlokas} Shlokas</span>
                  <span className="soon">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h3>Begin Your Spiritual Journey</h3>
          <p>
            Start with Chapter 1 and experience timeless wisdom for modern life.
          </p>
          <Link to="/chapter/1" className="cta-btn">
            Start with Chapter 1 <i className="ri-arrow-right-line"></i>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ChaptersPage;

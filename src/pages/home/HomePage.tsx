import { Link } from "react-router-dom";
import homeImg from "../../assets/images/home-bg.png";
import "../../styles/pages-style/homePage.css";

const HomePage = () => {
  const chapters = [
    {
      number: 1,
      title: "Arjuna Vishada Yoga",
      subtitle: "The Distress of Arjuna",
      shlokas: 47,
      description: "Arjuna's moral dilemma on the battlefield of Kurukshetra",
    },
    {
      number: 2,
      title: "Sankhya Yoga",
      subtitle: "Transcendental Knowledge",
      shlokas: 72,
      description: "Krishna's teachings on the eternal nature of the soul",
    },
    {
      number: 3,
      title: "Karma Yoga",
      subtitle: "Path of Action",
      shlokas: 43,
      description: "The philosophy of selfless action and duty",
    },
  ];

  return (
    <div className="home">
      {/* Hero */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${homeImg})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">Sacred Scripture</div>

          <h1>
            Discover the Eternal <br />
            <span>Wisdom of Gita</span>
          </h1>

          <p>
            Begin your spiritual journey through 18 chapters of divine knowledge
            and timeless teachings
          </p>

          <Link to="/chapter/1" className="hero-btn">
            Start Reading <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      {/* Chapters */}
      <section className="chapters-section">
        <div className="container">
          <div className="section-header">
            <i className="ri-book-open-line"></i>
            <h2>Explore Chapters</h2>
            <p>
              Each chapter reveals profound teachings that guide the soul toward
              enlightenment
            </p>
          </div>

          <div className="chapters-grid">
            {chapters.map((ch) => (
              <Link
                key={ch.number}
                to={`/chapter/${ch.number}`}
                className="chapter-card"
              >
                <div className="chapter-top">
                  <span className="chapter-bg">
                    {ch.number.toString().padStart(2, "0")}
                  </span>
                  <div className="chapter-badge">{ch.number}</div>
                </div>

                <h3>Chapter {ch.number}</h3>
                <h4>{ch.title}</h4>
                <p className="subtitle">{ch.subtitle}</p>
                <p className="desc">{ch.description}</p>

                <div className="chapter-footer">
                  <span className="pill">{ch.shlokas} Shlokas</span>
                  <span className="read">
                    Read Chapter <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="view-all">
            <Link to="/chapters" className="outline-btn">
              View All 18 Chapters <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature">
            <i className="ri-book-read-line"></i>
            <h3>Easy Reading</h3>
            <p>Smooth navigation and clean reading experience</p>
          </div>

          <div className="feature">
            <i className="ri-translate-line"></i>
            <h3>Sanskrit & Translation</h3>
            <p>Original text with transliteration & explanation</p>
          </div>

          <div className="feature">
            <i className="ri-smartphone-line"></i>
            <h3>Mobile Friendly</h3>
            <p>Perfect experience on all screen sizes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

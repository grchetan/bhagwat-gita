import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/pages-style/contactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span>Contact</span>
        </nav>

        {/* Header */}
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have questions about the Gita or need guidance on your spiritual
            journey? We’re here to help.
          </p>
        </header>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-card">
            <h2>
              <i className="ri-mail-line"></i>
              Send us a Message
            </h2>

            {submitStatus === "success" && (
              <div className="alert success">
                <i className="ri-check-line"></i>
                Message sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert error">
                <i className="ri-error-warning-line"></i>
                Something went wrong. Try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="two-col">
                <div>
                  <label>Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label>Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="spiritual">Spiritual Guidance</option>
                  <option value="technical">Technical Support</option>
                  <option value="content">Content Suggestion</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label>Message *</label>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts…"
                  required
                />
                <div className="count">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="info-box">
              <h2>
                <i className="ri-information-line"></i>
                Get in Touch
              </h2>
              <p>
                We welcome questions, feedback, and discussions about the
                teachings of the Bhagavad Gita.
              </p>

              <div className="info-item">
                <i className="ri-time-line"></i>
                <div>
                  <strong>Response Time</strong>
                  <p>24–48 hours</p>
                </div>
              </div>

              <div className="info-item">
                <i className="ri-heart-line"></i>
                <div>
                  <strong>Our Mission</strong>
                  <p>Ancient wisdom for modern seekers</p>
                </div>
              </div>

              <div className="info-item">
                <i className="ri-community-line"></i>
                <div>
                  <strong>Community</strong>
                  <p>Join thousands of readers</p>
                </div>
              </div>
            </div>

            <div className="faq">
              <h3>
                <i className="ri-question-line"></i>
                FAQs
              </h3>

              <div>
                <strong>How can I start reading?</strong>
                <p>Begin with Chapter 1 at your own pace.</p>
              </div>
              <div>
                <strong>Do I need prior knowledge?</strong>
                <p>No, it’s universal and beginner friendly.</p>
              </div>
              <div>
                <strong>Are all chapters available?</strong>
                <p>Currently Chapters 1–3.</p>
              </div>
            </div>

            <div className="cta-link">
              <Link to="/chapter/1">
                Start Reading Now <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

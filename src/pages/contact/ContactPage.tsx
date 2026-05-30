import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/pages-style/contactPage.css";

interface FAQItem {
  question: string;
  answer: string;
}

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

  // State to manage the active FAQ index for the interactive accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // Default open the first one

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

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const faqs: FAQItem[] = [
    {
      question: "How can I start reading the Bhagavad Gita?",
      answer: "We recommend starting with Chapter 1, which sets the entire battlefield context. Our website provides clear, step-by-step translations, Sanskrit audio references, word meanings, and scholarly commentary to help you read at your own comfortable pace.",
    },
    {
      question: "Do I need any prior knowledge of Sanskrit or Hindu philosophy?",
      answer: "No, absolutely not. The teachings of the Gita are universal and timeless. Every shlok is translated word-by-word with rich explanations in both Hindi and English, making it incredibly accessible for absolute beginners and spiritual seekers alike.",
    },
    {
      question: "Are all 18 chapters and 700 shlokas available?",
      answer: "Currently, Chapter 1 is fully detailed with deep spiritual commentaries, word breakdowns, and real-life lessons. The subsequent chapters (Chapters 2 and 3) are available in translation, and our team of scholars is actively expanding the remaining chapters.",
    },
    {
      question: "What is the significance of the Saffron and Gold color theme?",
      answer: "Saffron represents renunciation, spiritual fire, and search for truth, while Gold represents pure divine consciousness and eternal wisdom. The Deep Maroon represents the ancient temple walls, reminding us of our deep sacred roots.",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="active-breadcrumb">Contact</span>
        </nav>

        {/* Header */}
        <header className="contact-header">
          <div className="header-decoration">
            <span className="decorative-line"></span>
            <i className="ri-quill-pen-line decoration-icon"></i>
            <span className="decorative-line"></span>
          </div>
          <h1>Get in Touch</h1>
          <p>
            Have questions about the shlokas, need guidance on your spiritual seeking, 
            or want to share your feedback? Connect with us today.
          </p>
        </header>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-card message-form-card">
            <div className="card-header-decor"></div>
            <h2>
              <i className="ri-mail-send-line"></i>
              Send us a Message
            </h2>
            <p className="card-subtitle">Feel free to share your thoughts, inquiries, or realizations with us.</p>

            {submitStatus === "success" && (
              <div className="alert success-alert">
                <i className="ri-checkbox-circle-line alert-icon"></i>
                <div className="alert-text">
                  <strong>Jai Shri Krishna!</strong>
                  <p>Your message has been received with gratitude. We will reach back to you shortly.</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert error-alert">
                <i className="ri-error-warning-line alert-icon"></i>
                <div className="alert-text">
                  <strong>Submission Failed</strong>
                  <p>Something went wrong. Please check your connection and try again.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="spiritual-form">
              <div className="two-col">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required-star">*</span></label>
                  <div className="input-wrapper">
                    <i className="ri-user-line input-icon"></i>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="spiritual-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required-star">*</span></label>
                  <div className="input-wrapper">
                    <i className="ri-mail-line input-icon"></i>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                      className="spiritual-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span className="required-star">*</span></label>
                <div className="input-wrapper">
                  <i className="ri-chat-voice-line input-icon"></i>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="spiritual-select"
                  >
                    <option value="">Choose a topic of discussion</option>
                    <option value="spiritual">Spiritual Seeking & Guidance</option>
                    <option value="shlok">Shlok Explanation Query</option>
                    <option value="content">Content Suggestion / Contribution</option>
                    <option value="technical">Technical Issue on Website</option>
                    <option value="feedback">General Feedback & Appreciation</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message <span className="required-star">*</span></label>
                <div className="textarea-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here with love and mindfulness..."
                    required
                    className="spiritual-textarea"
                  />
                  <div className="character-count-box">
                    <span className="current-count">{formData.message.length}</span> / 500 characters
                  </div>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="spiritual-btn">
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Delivering Message...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-fill"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info & FAQs */}
          <div className="contact-info-section">
            <div className="contact-card info-card">
              <div className="card-header-decor"></div>
              <h2>
                <i className="ri-compass-3-line"></i>
                Get in Touch
              </h2>
              <p className="card-subtitle">We welcome all seekers, scholars, and readers to connect with us.</p>

              <div className="info-list">
                <div className="info-card-item">
                  <div className="info-icon-wrapper">
                    <i className="ri-time-line"></i>
                  </div>
                  <div className="info-item-content">
                    <strong>Response Commitment</strong>
                    <p>Usually within 24 to 48 hours with deep care.</p>
                  </div>
                </div>

                <div className="info-card-item">
                  <div className="info-icon-wrapper">
                    <i className="ri-sparkling-2-line"></i>
                  </div>
                  <div className="info-item-content">
                    <strong>Our Humble Mission</strong>
                    <p>Unfolding ancient Vedic wisdom for modern-day seekers.</p>
                  </div>
                </div>

                <div className="info-card-item">
                  <div className="info-icon-wrapper">
                    <i className="ri-global-line"></i>
                  </div>
                  <div className="info-item-content">
                    <strong>Online Satsang Community</strong>
                    <p>Connect, share, and grow with thousands of readers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="contact-card faq-accordion-card">
              <div className="card-header-decor"></div>
              <h2>
                <i className="ri-questionnaire-line"></i>
                Frequently Asked Questions
              </h2>
              <p className="card-subtitle">Quick guidance to assist you on this auspicious journey.</p>

              <div className="accordion-list">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div 
                      key={index} 
                      className={`accordion-item ${isOpen ? "open" : ""}`}
                    >
                      <button 
                        type="button"
                        onClick={() => toggleFaq(index)} 
                        className="accordion-toggle"
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question">{faq.question}</span>
                        <span className="faq-icon-wrapper">
                          <i className={`ri-${isOpen ? "subtract-line" : "add-line"} faq-icon`}></i>
                        </span>
                      </button>
                      
                      <div className={`accordion-collapse ${isOpen ? "expanded" : ""}`}>
                        <div className="accordion-content">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cta-action-container">
              <Link to="/chapter/1" className="spiritual-cta-btn">
                <span>Start Reading Now</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

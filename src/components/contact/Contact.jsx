import React from "react";
import "./contact.css";

function Contact() {
  const contactInfo = [
    {
      icon: "mail",
      title: "Email",
      value: "Fatimalajaam@gmail.com",
      href: "mailto:Fatimalajaam@gmail.com",
    },
    {
      icon: "phone",
      title: "Phone",
      value: "+966 54 241 9778",
      href: "tel:+966542419778",
    },
    {
      icon: "linkedin",
      title: "LinkedIn",
      value: "Let's connect professionally",
      href: "https://www.linkedin.com/in/fatima-lajam-229352218",
    },
    {
      icon: "github",
      title: "GitHub",
      value: "Explore my projects",
      href: "https://github.com/falb79",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-label">CONTACT</span>
          <h2>Let's <span>Connect</span></h2>
          <p>
            Have a project in mind or an opportunity to discuss?
            I'd be happy to hear from you.
          </p>
        </div>

        <div className="contact-list">
          {contactInfo.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="contact-item"
              target={
                item.title === "LinkedIn" || item.title === "GitHub"
                  ? "_blank"
                  : undefined
              }
              rel={
                item.title === "LinkedIn" || item.title === "GitHub"
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <div className="contact-icon">
                {item.icon === "mail" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                )}

                {item.icon === "phone" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 3h3l2 5-2.5 1.8a14 14 0 0 0 4.7 4.7L16 12l5 2v3a3 3 0 0 1-3 3A17 17 0 0 1 4 6a3 3 0 0 1 3-3Z" />
                  </svg>
                )}

                {item.icon === "linkedin" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 9v10M5 5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
                  </svg>
                )}

                {item.icon === "github" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.8 1.4a13 13 0 0 0-7 0C5.3 1.3 4.2 1.6 4.2 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18.1V22" />
                  </svg>
                )}
              </div>

              <div className="contact-item-text">
                <h3>{item.title}</h3>
                <span>{item.value}</span>
              </div>

              <span className="contact-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

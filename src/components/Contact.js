import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Interested in working together or just want to say hi? Reach out below:</p>
      <div className="contact-links">
        <a href="mailto:youremail@example.com">📧 Email</a>
        <a href="https://github.com/canaljohnromel" target="_blank" rel="noreferrer">💻 GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ibe6iab", // Your EmailJS service ID
        "template_nxuynvt", // Your EmailJS template ID
        e.target,
        "htSH2h_s1O2mMaukN" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );

    e.target.reset(); // Optional: Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="input-field"
      />
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        required
        className="input-field"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        className="textarea-field"
      />
      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  );
};

export default EmailForm;

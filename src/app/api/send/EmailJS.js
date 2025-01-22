import emailjs from "emailjs-com";

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
};

return (
  <form onSubmit={handleSubmit}>
    <input name="email" type="email" placeholder="Your email" required />
    <input name="subject" type="text" placeholder="Subject" required />
    <textarea name="message" placeholder="Message" required />
    <button type="submit">Send Message</button>
  </form>
);

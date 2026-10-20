import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setNotice("Please fill in all fields.");
      return;
    }

    setNotice("Thank you! Your form has been validated.");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="btn">
          Send Message
        </button>

        {notice && <p role="status">{notice}</p>}
      </form>

      <p>
        Email: <a href="mailto:mrunaltandale2815@gmail.com">mrunaltandale2815@gmail.com</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/mrunaltandale2815-ship-it">Visit GitHub</a>
      </p>
    </section>
  );
}

export default Contact;
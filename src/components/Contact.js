import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Feel Free to Contact Us</h2>

      <div className="contact-form">
        <form
          action=""
          method="POST"
          className="form-inputs"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            autoComplete="off"
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

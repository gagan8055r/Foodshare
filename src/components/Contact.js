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
            width="200px"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />

                 <button type="submit" className="submit-button">
            Send
          </button>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.074706171997!2d76.60598065689135!3d12.313271456861496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ae94fffffff%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1685724620613!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </form>
      </div>
    </div>
  );
};

export default Contact;

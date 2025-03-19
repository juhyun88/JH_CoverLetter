import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>연락처</h2>
      <p>If you'd like to get in touch, feel free to send me a message!</p>
      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

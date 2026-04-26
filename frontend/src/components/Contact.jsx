import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper glass">
          <div className="contact-info">
            <h3>Let's talk about your next project</h3>
            <p>
              I'm currently available for freelance work and open to new opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="social-links">
              <a href="https://github.com/surendar200611-spec" target="_blank" rel="noopener noreferrer" className="social-btn">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/surendar-m-6023a1405" target="_blank" rel="noopener noreferrer" className="social-btn">
                LinkedIn
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import '../style/Contact.css';
import gmail from '../assets/gmail.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div id="contact" className="contact">
      <h2 className="contact_heading">Contact Me</h2>
      <div className="contact_email">
        <img src={gmail} alt="Email Icon" />
        <span>sahilgolhar7@gmail.com</span>
      </div>
      <div className="contact_form_container">
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_formcontrol">
            <label htmlFor="name" className="contact_formcontrol_label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="contact_formcontrol_input"
              required
            />
          </div>
          <div className="contact_formcontrol">
            <label htmlFor="email" className="contact_formcontrol_label">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="contact_formcontrol_input"
              required
            />
          </div>
          <div className="contact_formcontrol">
            <label htmlFor="message" className="contact_formcontrol_label">Message:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="contact_formcontrol_input"
              required
            />
          </div>
          <button type="submit" className="contact_formcontrol_submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
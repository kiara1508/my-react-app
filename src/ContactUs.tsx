import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ContactUs = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`
      Të dhënat e dërguara:
      Email: ${formData.email}
      Username: ${formData.username}
      Mesazhi: ${formData.message}
    `);
  };

  return (
    <div>
      <h1>Na kontaktoni</h1>
      <p>Drejtimi i navigimit: {location.state?.from || 'Home'} → Contact Us</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        
        <div>
          <label>Mesazhi:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        
        <button type="submit">Dërgo</button>
      </form>
    </div>
  );
};

export default ContactUs;
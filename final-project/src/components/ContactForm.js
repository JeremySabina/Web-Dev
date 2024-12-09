// src/components/Form.js
import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gamesInterested, setGamesInterested] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, gamesInterested });
    setName('');
    setEmail('');
    setGamesInterested('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input 
          className="form-control" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input 
          className="form-control"
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Games Interested:</label>
        <input 
          className="form-control" 
          value={gamesInterested} 
          onChange={(e) => setGamesInterested(e.target.value)} 
        />
      </div>

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

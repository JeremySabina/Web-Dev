// src/pages/NewsletterPage.js
import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const NewsletterPage = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleFormSubmit = (data) => {
    console.log('Newsletter Form Submitted:', data);
    setSubscribed(true);
  };

  return (
    <div className="my-4">
      <h1 className="mb-3">Newsletter</h1>
      <p className="lead">Subscribe for updates!</p>

      {!subscribed ? (
        <ContactForm onSubmit={handleFormSubmit} />
      ) : (
        <div className="alert alert-success" role="alert">
          Thank You for Subscribing!
        </div>

      )}
    </div>
  );
};

export default NewsletterPage;

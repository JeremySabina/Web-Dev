// src/components/Image.js
import React from 'react';

const Image = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt || 'Arcade Image'}
        className="img-fluid rounded"
        style={{ boxShadow: '0 0 10px #00ffcc, 0 0 20px #ff00ff' }}
      />
    );
  };
  

export default Image;

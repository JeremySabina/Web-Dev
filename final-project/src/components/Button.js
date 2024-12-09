// src/components/Button.js
import React from 'react';

const Button = ({ onClick, children, variant = 'primary' }) => {
  return <button onClick={onClick} className={`btn btn-${variant} my-2`}>{children}</button>;
};

export default Button;

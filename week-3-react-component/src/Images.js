import React from 'react';
import croquemboucheImage from './Croquembouche.jpeg';

export default function Image() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2em' }}>Baked Goods Gallery</h1>
      <img 
        src={croquemboucheImage} 
        alt="Croquembouche" 
        style={{ 
          width: '80%', 
          maxWidth: '400px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
        }} 
      />
      <h1 style={{
            color:'red'
            }}>
        Will update with a carousel of images
        </h1>
    </div>
    
  );
}

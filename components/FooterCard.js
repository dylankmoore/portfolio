// FooterCard.js
import React from 'react';

const Footer = () => (
  <footer
    style={{
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      boxSizing: 'border-box',
    }}
  >
    <p style={{ margin: 0 }}>
      &copy; {new Date().getFullYear()} Dylan Moore. All rights reserved.
    </p>
  </footer>
);

export default Footer;

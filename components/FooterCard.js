import React from 'react';

const Footer = () => (
  <footer
    style={{
      margin: 0,
      padding: '20px 0',
      textAlign: 'center',
      fontSize: '11px',
      color: 'black',
    }}
  >
    <p style={{ margin: 0 }}>
      {new Date().getFullYear()} Dylan Moore. All rights reserved.
    </p>
  </footer>
);

export default Footer;

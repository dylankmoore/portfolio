import React from 'react';
import ContactCard from '../components/ContactCard';
import Footer from '../components/FooterCard';

const Contact = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <main style={{ flex: 1, padding: '70px 0' }}>
      <ContactCard />
    </main>
    <Footer />
  </div>
);

export default Contact;

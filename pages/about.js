import React from 'react';
import AboutCard from '../components/AboutCard';
import Footer from '../components/FooterCard';

const AboutPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <main style={{ flex: 1 }}>
      <AboutCard />
    </main>
    <Footer />
  </div>
);

export default AboutPage;

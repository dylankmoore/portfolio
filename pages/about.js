import React from 'react';
import Head from 'next/head';
import AboutCard from '../components/AboutCard';
import Footer from '../components/FooterCard';

const AboutPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <main style={{ flex: 1 }}>
      <Head>
        <title>Dylan Moore | Full Stack Developer</title>
      </Head>
      <AboutCard />
    </main>
    <Footer />
  </div>
);

export default AboutPage;

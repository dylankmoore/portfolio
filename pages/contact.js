import React from 'react';
import Head from 'next/head';
import ContactCard from '../components/ContactCard';
import Footer from '../components/FooterCard';

const Contact = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <main style={{ flex: 1, padding: '70px 0' }}>
      <Head>
        <title>Dylan Moore | Full Stack Developer</title>
      </Head>
      <ContactCard />
    </main>
    <Footer />
  </div>
);

export default Contact;

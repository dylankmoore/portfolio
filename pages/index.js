import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/FooterCard';

const Home = () => (
  <><br /><br /><br /><br />
    <Head>
      <title>Your Name</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Space+Mono&display=swap" />
    </Head>

    <div className="home-wrapper">
      <h1 className="main-name">DYLAN MOORE</h1>
      <p className="subtitle">Fullstack Software Developer</p>
      <Link href="/projects">
        <a href className="view-work-btn">View Work</a>
      </Link>
    </div>

    <Footer />
  </>
);

export default Home;

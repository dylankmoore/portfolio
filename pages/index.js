import React from 'react';
import Image from 'next/image';
import ProjectsSection from './projects';
import ContactSection from '../components/ContactCard';
import About from './about';
import Footer from '../components/FooterCard';
// eslint-disable-next-line import/order, import/no-extraneous-dependencies
import { motion } from 'framer-motion';

const Home = () => (
  <>
    {/* Hero / Intro */}
    <motion.section
      className="hero-section"
      style={{ padding: '80px 0' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{ maxWidth: '475px', margin: '0 auto' }}
      >
        <br />
        <motion.div
          style={{ transform: 'translateX(15px)' }}
          className="hello-animate"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Image
            src="/hello (1).png"
            alt="Hello"
            width={340}
            height={150}
            priority
          />
        </motion.div>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I’m Dylan Moore — a Full Stack Web Developer based in Nashville, Tennessee.
        </motion.p>
      </div>
    </motion.section>

    {/* Divider */}
    <motion.div
      className="section-divider"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <Image
        src="/line.png"
        alt="Section Break"
        width={600}
        height={40}
        priority
      />
    </motion.div>

    {/* About Section */}
    <About />

    {/* Projects Section */}
    <ProjectsSection />

    {/* Contact Section */}
    <ContactSection />

    {/* Footer */}
    <Footer />
  </>
);

export default Home;

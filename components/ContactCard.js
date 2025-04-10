/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact-section"
      style={{
        padding: '40px 20px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Contact header is always visible */}
      <div
        style={{
          width: 'fit-content',
          margin: '0 auto',
          marginBottom: '30px',
        }}
      >
        <img
          src="/contact.png"
          alt="Contact Header"
          width={200}
          height={55}
        />
      </div><br />

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="contact-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/dylankmoore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/dylankmoore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:dylankmoore@gmail.com">
                <FaEnvelope size={30} />
              </a>
            </div>
            <br />

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/xnnppwnj"
              method="POST"
              className="contact-form"
              style={{ paddingLeft: '40px' }}
            >
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />

              <button id="submit" type="submit">Send Message</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, AnimatePresence } from 'framer-motion';

const AboutCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="about-section"
      style={{
        position: 'relative',
        width: '90%',
        marginTop: '70px',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 20px 0',
        zIndex: inView ? 2 : 1,
      }}
    >
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        <Image
          className="about-header"
          src="/aboutme.png"
          alt="About Me"
          width={250}
          height={80}
          priority
        />
      </div>

      {/* Expandable Content Below Logo */}
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              marginTop: '30px',
              textAlign: 'center',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <p>
              My journey with web design began in the early days of Geocities and Expage, where I taught myself basic HTML and CSS to build fun, personal pages. After many years in the service industry, I craved a new challenge and decided to revisit my early interest in design and development by enrolling at Nashville Software School.
            </p>

            <p>
              I recently graduated with a certificate in Full Stack Web Development, where I gained hands-on experience building responsive, user-friendly applications using technologies like C#, .NET, React, and Next.js. Since then, I've been freelancing and continuing to sharpen my skills through personal projects.
            </p>

            <p>
              I'm actively seeking full time work opportunities where I can contribute, grow, and continue learning as a developer. I'm also open to freelance projects and collaborations. If you have an idea you'd like to bring to life — or you're hiring — I'd love to connect!
            </p>

            <div className="section-divider" style={{ marginTop: '40px' }}>
              <Image
                src="/line.png"
                alt="Section Break"
                width={600}
                height={40}
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutCard;

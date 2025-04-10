/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, AnimatePresence } from 'framer-motion';

const AboutCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <>
      <section
        ref={ref}
        className="about-section"
        style={{
          position: 'relative',
          width: '90%',
          maxWidth: '900px',
          padding: '30px 20px 0',
          margin: '0 auto',
          zIndex: inView ? 2 : 1,
        }}
      >
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
              <br />
              <img
                src="/aboutme.png"
                alt="Contact Header"
                width={220}
                height={70}
              />
              <br /><br /><br />
              <p>
                My name is Dylan Moore & I'm a full stack software developer based in Nashville, Tennessee. My journey with web design began in the early days of Geocities and Expage, where I taught myself basic HTML and CSS to build fun, personal pages. After many years in the service industry, I craved a new challenge and decided to revisit my early interest in design and development by enrolling at Nashville Software School.
              </p>

              <p>
                I recently graduated with a certificate in Full Stack Web Development, where I gained hands on experience building responsive, user-friendly applications using technologies like C#, .NET, SQL, React, and Next.js. Since then, I've been continuing to sharpen my skills through personal projects.
              </p>

              <p>
                I'm actively seeking full time work opportunities where I can contribute, grow, and continue learning as a developer. I'm also open to freelance projects and collaborations. If you have an idea you'd like to bring to life — or you're hiring — I'd love to connect!
              </p>
              <br /><br /><br />
              <h5>Tech Stack</h5><br />
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '10px',
              }}
              >
                {[
                  { src: 'csharp.png', alt: 'C#' },
                  { src: 'dotnet.png', alt: '.NET' },
                  { src: 'html.png', alt: 'HTML' },
                  { src: 'css.png', alt: 'CSS' },
                  { src: 'js.png', alt: 'JavaScript' },
                  { src: 'react.png', alt: 'React' },
                  { src: 'nextjs.png', alt: 'Next.js' },
                  { src: 'postgres.png', alt: 'PostgreSQL' },
                  { src: 'postman.png', alt: 'Postman' },
                  { src: 'dbeaver.png', alt: 'DBeaver' },
                  { src: 'firebase.png', alt: 'Firebase' },
                  { src: 'vs.png', alt: 'Visual Studio' },
                  { src: 'vscode.png', alt: 'VS Code' },
                ].map(({ src, alt }) => (
                  <img
                    key={alt}
                    src={`/${src}`}
                    alt={alt}
                    title={alt}
                    style={{ width: '35px', height: '40px' }}
                  />
                ))}
              </div><br /><br /><br /><br /><br />

            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default AboutCard;

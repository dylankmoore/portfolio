/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/FooterCard';

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setShowProjects(true);
      } else {
        setShowProjects(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={sectionRef}>
        <br /><br /><br /><br /><br />
        <div style={{ width: 'fit-content', margin: '0 auto' }}>
          <img
            src="/projects.png"
            alt="My Projects"
            width={250}
            height={80}
          />
        </div>
        <br />

        <AnimatePresence>
          {showProjects && (
            <>
              {/* Architecture Archive */}
              <motion.div
                style={{ marginBottom: '100px' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <ProjectCard
                  title="Architecture Archive"
                  description={(
                    <>
                      Architecture Archive is a full stack web application that enables history &amp; architecture lovers to view &amp; search through different historical structures, as well as create personalized collections.
                      <br /><br />
                      This was my backend-focused capstone project at Nashville Software School.
                      <br /><br />
                      Some key features include:
                      <ul>
                        <li>CRUD on Buildings &amp; Collections</li>
                        <li>C#/.NET Backend</li>
                        <li>React/Next.js Frontend</li>
                      </ul>
                      <br />
                      <a href="https://github.com/dylankmoore/ArchitectureArchiveFE" target="_blank" rel="noopener noreferrer">
                        View Repository
                      </a>&nbsp;&nbsp;&nbsp;
                      <a href="https://www.loom.com/share/ac4a28c86edb4c40b31b69b577e0426b" target="_blank" rel="noopener noreferrer">
                        View Demo
                      </a><br />&nbsp;&nbsp;&nbsp;
                      <a href="https://documenter.getpostman.com/view/32819688/2sA3QtdWJM" target="_blank" rel="noopener noreferrer">
                        View Documentation
                      </a>
                    </>
                  )}
                  imageSrcs={['/archive1.png', '/archive5.png']}
                />
              </motion.div>

              {/* Y2Play */}
              <motion.div
                style={{ marginBottom: '100px' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              >
                <ProjectCard
                  title="Y2Play"
                  description={(
                    <>
                      Y2Play is a full stack web application made for 2000s music lovers. Users can create playlists &amp; view playlists made by other users.
                      <br /><br />
                      This project was a collaborative effort built by a team of five women: Myself, Courtney Fairall, Keana Cobarde, Yarelis Martin, and Britnay Gore.
                      <br /><br />
                      Some key features include:
                      <ul>
                        <li>CRUD on Playlists</li>
                        <li>Adding &amp; removal of songs</li>
                        <li>Add playlists as favorites</li>
                        <li>C#/.NET Backend</li>
                        <li>React/Next.js Frontend</li>
                      </ul>
                      <br />
                      <a href="https://github.com/dylankmoore/Y2PlayFE" target="_blank" rel="noopener noreferrer">
                        View Repository
                      </a>
                    </>
                  )}
                  imageSrcs={['/y1.png', '/y2.png']}
                />
              </motion.div>

              {/* Migraine Manager */}
              <motion.div
                style={{ marginBottom: '100px' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              >
                <ProjectCard
                  title="Migraine Manager"
                  description={(
                    <>
                      Migraine Manager is an app built for people who suffer from migraines & want to log their symptoms as a way of gaining better understanding of their triggers.
                      <br /><br />
                      This was my first capstone project at Nashville Software School.
                      <br /><br />
                      Some key features include:
                      <ul>
                        <li>Google authorization</li>
                        <li>CRUD on the logs</li>
                        <li>Search on the logs</li>
                        <li>Filtering logs via pain levels</li>
                        <li>Built with React/Next.js & Firebase</li>
                      </ul>
                      <br />
                      <a href="https://github.com/dylankmoore/migraine-manager" target="_blank" rel="noopener noreferrer">
                        View Repository
                      </a>&nbsp;&nbsp;&nbsp;
                      <a href="https://migraine-manager.netlify.app/" target="_blank" rel="noopener noreferrer">
                        Visit deployed site
                      </a>
                    </>
                  )}
                  imageSrcs={['/mm2.png', '/mm4.png']}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
};

export default Projects;

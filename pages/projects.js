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
      <section ref={sectionRef} style={{ padding: '40px 20px' }}>
        <AnimatePresence>
          {showProjects && (
            <motion.div
              key="projects-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Animated Header */}
              <br /><br /><br />
              <div style={{ width: 'fit-content', margin: '0 auto', marginBottom: '40px' }}>
                <img
                  src="/projects.png"
                  alt="My Projects"
                  width={250}
                  height={80}
                />
              </div>

              {/* Each project */}
              <div style={{ marginBottom: '100px' }}>
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
              </div>

              <div style={{ marginBottom: '100px' }}>
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
                      <a href="https://github.com/dylankmoore/BE-MusicStreaming" target="_blank" rel="noopener noreferrer">
                        View Repository
                      </a>&nbsp;&nbsp;&nbsp;
                      <a href="https://www.loom.com/share/64520fe4da35437eb44179c626836b8a?sid=5c9eebe1-ce83-4d8c-94ca-c9283f5d9eb9" target="_blank" rel="noopener noreferrer">
                        View Demo
                      </a>
                    </>
                  )}
                  imageSrcs={['/y1.png', '/y2.png']}
                />
              </div>

              <div style={{ marginBottom: '100px' }}>
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
                      </a><br />
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.loom.com/share/36c257843ea34b49927d0b0a1308c2b1?sid=ff568340-834a-496f-ab11-6f8568298092" target="_blank" rel="noopener noreferrer">
                        View demo
                      </a>
                    </>
                  )}
                  imageSrcs={['/mm2.png', '/mm4.png']}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

export default Projects;

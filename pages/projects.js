import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  const [showProjects, setShowProjects] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // When the top of the section is within 80% of the viewport height, show the projects
      if (rect.top < window.innerHeight * 0.8) {
        setShowProjects(true);
      } else {
        setShowProjects(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case section is already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="projects-section" ref={sectionRef}>
      <br /><br /><br /><br />

      {/* Section Header - Always visible */}
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        <Image
          src="/projects.png"
          alt="My Projects"
          width={250}
          height={80}
          priority
        />
      </div>

      <br /><br />

      {/* Projects Grid - Only rendered once scrolled into view */}
      <AnimatePresence>
        {showProjects && (
          <motion.div
            className="projects-grid"
            key="projects-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
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
                    <br /><br /> This was my backend-focused capstone project at Nashville Software School.
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
                    <a href="https://www.loom.com/share/ac4a28c86edb4c40b31b69b577e0426b?sid=a37492b8-d72d-4081-a60c-2ad7c307634a" target="_blank" rel="noopener noreferrer">
                      View Demo
                    </a>&nbsp;&nbsp;&nbsp;
                    <a href="https://documenter.getpostman.com/view/32819688/2sA3QtdWJM" target="_blank" rel="noopener noreferrer">
                      View Documentation
                    </a>
                  </>
                )}
                imageSrcs={['/archive1.png', '/archive5.png']}
              />
            </motion.div>

            <motion.div
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
                    <br /><br />This project was a collaborative effort built by a team of five women: Myself, Courtney Fairall, Keana Cobarde, Yarelis Martin, and Britnay Gore.
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
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-divider">
        <Image
          src="/line.png"
          alt="Section Break"
          width={600}
          height={40}
          priority
        />
      </div>

      <br /><br />
    </div>
  );
};

export default ProjectsSection;

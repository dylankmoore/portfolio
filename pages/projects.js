import React from 'react';
import Image from 'next/image';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => (
  <div className="projects-section">
    <br /><br /><br /><br />

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

    <div className="projects-grid">
      <ProjectCard
        title="Architecture Archive"
        description={(
          <>
            Architecture Archive is a full stack web application that enables history & architecture lovers to view & search through different historical structures, as well as create personalized collections.
            <br /><br /> This was my backend-focused capstone project at Nashville Software School.
            <br /><br />
            Some key features include:
            <ul>
              <li>CRUD on Buildings & Collections</li>
              <li>C#/.NET Backend</li>
              <li>React/Next.js Frontend</li>
            </ul><br />
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
        imageSrcs={[
          '/archive1.png',
          '/archive5.png',
        ]}
      />

      <ProjectCard
        title="Y2Play"
        description={(
          <>
            Y2Play is a full stack web application made for 2000s music lovers. Users can create playlists & view playlists made by other users.
            <br /><br />This project was a collaborative effort built by a team of five women: Myself, Courtney Fairall, Keana Cobarde, Yarelis Martin, and Britnay Gore.
            <br /><br />
            Some key features include:
            <ul>
              <li>CRUD on Playlists</li>
              <li>Adding & removal of songs</li>
              <li>Add playlists as favorites</li>
              <li>C#/.NET Backend</li>
              <li>React/Next.js Frontend</li>
            </ul><br />
            <a href="https://github.com/dylankmoore/Y2PlayFE" target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </>
        )}
        imageSrcs={[
          '/y1.png',
          '/y2.png',
        ]}
      />
    </div><br /><br />
    <div className="section-divider">
      <Image
        src="/line.png"
        alt="Section Break"
        width={600}
        height={40}
        priority
      />
    </div><br /><br />
  </div>
);

export default ProjectsSection;

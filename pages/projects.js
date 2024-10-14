import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => (
  <div className="projects-section">
    <h2>My Projects</h2><br />
    <div className="projects-grid">
      <ProjectCard title="Project 1" description="This is a description of project 1." />
      <ProjectCard title="Project 2" description="This is a description of project 2." />
    </div>
  </div>
);

export default ProjectsSection;

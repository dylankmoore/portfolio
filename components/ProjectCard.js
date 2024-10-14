import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description }) => (
  <div className="project-card fade-in">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;

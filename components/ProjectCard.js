/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, imageSrcs }) => (
  <div className="project-card fade-in">
    <div className="project-content" style={{ display: 'flex', alignItems: 'center' }}>
      {/* Images on the left */}
      <div className="project-images" style={{ marginRight: '20px' }}>
        {imageSrcs.map((src) => (
          <img
            key={src}
            src={src}
            alt={`${title} architecture`}
            style={{ width: '390px', height: '260px', marginBottom: '10px' }}
          />
        ))}
      </div>
      {/* Text on the right */}
      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;

import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;

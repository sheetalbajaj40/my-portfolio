// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ title, description, link, demoLink, imageUrl }) {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:scale-105 hover:shadow-2xl">
      {imageUrl && (
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={title}
          loading="lazy"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

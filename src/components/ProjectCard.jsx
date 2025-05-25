import React from 'react';

function ProjectCard({ title, description, link, demoLink, imageUrl }) {
  return (
    <div className="max-w-sm rounded-xl shadow-md overflow-hidden bg-gray-800 text-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
      {imageUrl && (
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={title}
          loading="lazy"
        />
      )}
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-yellow-400">{title}</h3>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">{description}</p>
        </div>
        <div className="flex justify-start gap-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-yellow-300 hover:text-yellow-400 font-medium underline underline-offset-2"
          >
            GitHub
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-400 hover:text-green-500 font-medium underline underline-offset-2"
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

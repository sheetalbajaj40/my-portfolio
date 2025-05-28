import React from 'react';

function ProjectCard({ title, description, link, demoLink, imageUrl }) {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 border border-gray-700/50 hover:border-yellow-400/50">
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

      {/* Image */}
      {imageUrl && (
        <div className="relative h-56 overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            src={imageUrl}
            alt={title}
            loading="lazy"
          />
          {/* Top Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        {/* Yellow Accent Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-yellow-400/50 via-yellow-500/50 to-transparent" />

        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/link"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="relative">
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover/link:w-full"></span>
              </span>
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors duration-300 group/link"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="relative">
                  Live Demo
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-400 transition-all duration-300 group-hover/link:w-full"></span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

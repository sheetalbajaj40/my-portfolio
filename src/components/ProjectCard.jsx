import React from 'react';

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 border border-gray-700/50 hover:border-yellow-400/50">
      {/* Image with gradient overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          src={imageUrl}
          alt={title}
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
      </div>

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
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

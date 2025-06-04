import React from 'react';

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="theme-card overflow-hidden group">
      {/* Image with gradient overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          src={imageUrl}
          alt={title}
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* White Accent Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/50 via-white/30 to-transparent" />

        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text theme-gradient">
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

// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">My Projects</h2>
        <p className="text-lg text-gray-700 mb-12">Check out some of the projects I've built, each focused on solving real-world problems with modern web technologies.</p>
        
        {/* Grid layout with responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ProjectCard
            title="KAIZEN"
            description="A project focused on improving personal growth."
            link="https://github.com/your-username/KAIZEN"
            demoLink="https://kaizen-demo.com"
            imageUrl="/images/kaizen.jpg"
          />
          <ProjectCard
            title="TIMESHEET"
            description="A tool for managing time tracking and tasks."
            link="https://github.com/your-username/TIMESHEET"
            demoLink="https://timesheet-demo.com"
            imageUrl="/images/timesheet.jpg"
          />
          {/* Add more ProjectCards */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="KAIZEN"
            description="A project focused on improving personal growth."
            link="https://github.com/your-username/KAIZEN"
          />
          <ProjectCard
            title="TIMESHEET"
            description="A tool for managing time tracking and tasks."
            link="https://github.com/your-username/TIMESHEET"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

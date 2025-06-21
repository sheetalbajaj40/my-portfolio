import React from 'react';
import ProjectCard from '../components/ProjectCard';
import kaizenDiagram from 'src\assets\kaizen.png';
import timesheetImage from 'src\assets\timesheet.jpeg';
import portfolioImage from 'src\assets\portfolio.png';
import todoAppImage from 'src\assets\todo-app.png';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text theme-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing modern web development using React.js and Tailwind CSS.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="KAIZEN"
            description="Process improvement tracking platform. Built responsive UI components using React.js, Tailwind CSS, and Redux Toolkit. Integrated REST APIs and focused on code reusability and performance optimization."
            imageUrl={kaizenDiagram}
          />

          <ProjectCard
            title="TIMESHEET"
            description="A time-tracking application for employees. Developed dynamic forms using React.js and Bootstrap. Integrated RESTful APIs to manage task data and optimized UX for better real-time task logging."
            imageUrl={timesheetImage}
          />

           <ProjectCard
            title="Portfolio Website"
            description="Designed and built a responsive portfolio using React.js and Tailwind CSS to showcase my skills, resume, and projects with smooth scroll and SPA navigation."
            imageUrl={portfolioImage}
          />

          <ProjectCard
            title="To-Do List App"
            description="Developed a minimal productivity tool using React.js. Includes features like task creation, completion toggles, filtering, and persistent state with localStorage."
            imageUrl={todoAppImage}
          />

          {/* Add a placeholder card with a gradient background if no image */}
          <div className="theme-card p-6 flex flex-col h-full justify-between min-h-[400px]">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text theme-gradient">
                  More Coming Soon
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm constantly working on new projects. Check back soon for more exciting developments!
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <span className="inline-flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                In Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

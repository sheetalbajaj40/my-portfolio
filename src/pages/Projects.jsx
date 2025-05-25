import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto max-w-6xl text-center px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-yellow-400 tracking-wide">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Here are a few selected projects where I applied modern technologies like React.js, Redux Toolkit, and Tailwind CSS to solve real-world problems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            title="KAIZEN"
            description="Process improvement tracking platform. Built responsive UI components using React.js, Tailwind CSS, and Redux Toolkit. Integrated REST APIs and focused on code reusability and performance optimization."
            link="https://github.com/bajajsheetal/KAIZEN"
            demoLink={null}
            imageUrl="/images/kaizen.jpg"
          />

          <ProjectCard
            title="TIMESHEET"
            description="A time-tracking application for employees. Developed dynamic forms using React.js and Bootstrap. Integrated RESTful APIs to manage task data and optimized UX for better real-time task logging."
            link="https://github.com/bajajsheetal/TIMESHEET"
            demoLink={null}
            imageUrl="/images/timesheet.jpg"
          />

          {/* Add more real or placeholder projects as you go */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto max-w-4xl px-6">
        <h3 className="text-3xl font-extrabold mb-12 text-yellow-400 tracking-wide text-center">
          Work Experience
        </h3>

        <article className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 text-left hover:shadow-yellow-500/50 transition-shadow duration-300">
          <h4 className="text-2xl font-semibold text-yellow-300 mb-1">
            Frontend Engineer Intern
          </h4>
          <p className="text-yellow-200 mb-4 italic">
            Third Eye AI (A JBM Group Company), Gurugram | Dec 2024 - Present
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              Assisted in modernizing legacy JavaScript codebases by migrating to ReactJS, improving frontend maintainability and reducing UI load times.
            </li>
            <li>
              Developed scalable and responsive UI components using ReactJS and Tailwind CSS, ensuring mobile-first, cross-browser compatibility.
            </li>
            <li>
              Collaborated with backend developers to integrate RESTful APIs, enabling seamless communication between frontend and backend systems.
            </li>
            <li>
              Implemented state management solutions using Redux Toolkit and Context API, improving data flow across the application.
            </li>
            <li>
              Performed debugging, cross-browser testing, and performance optimization to ensure a smooth and consistent user experience.
            </li>
            <li>
              Utilized Git, GitHub, and VS Code for daily development and version control.
            </li>
            <li>
              Actively participated in team stand-ups and collaborated with design and backend teams to deliver clean, production-ready UIs.
            </li>
          </ul>
        </article>

        {/* Add more experience entries here if needed */}
      </div>
    </section>
  );
};

export default Experience;

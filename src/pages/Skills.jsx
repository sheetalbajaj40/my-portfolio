// src/pages/Skills.jsx

import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-900">Skills</h3>

        {/* Languages Section */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800">Languages</h4>
          <ul className="list-none space-y-2 mt-4 text-lg text-gray-700">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>

        {/* Technologies Section */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800">Technologies</h4>
          <ul className="list-none space-y-2 mt-4 text-lg text-gray-700">
            <li>React.js</li>
            <li>Redux Toolkit</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Material-UI</li>
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800">Tools</h4>
          <ul className="list-none space-y-2 mt-4 text-lg text-gray-700">
            <li>Git</li>
            <li>GitHub</li>
            <li>REST APIs</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

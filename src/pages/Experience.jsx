import React from 'react';

const experiences = [
  {
    title: "Frontend Engineer Intern",
    company: "Third Eye AI (A JBM Group Company)",
    period: "Dec 2024 - Present",
    description: [
      "Assisted in modernizing legacy JavaScript codebases by migrating to ReactJS, improving frontend maintainability and reducing UI load times.",
      "Developed scalable and responsive UI components using ReactJS and Tailwind CSS, ensuring mobile-first, cross-browser compatibility.",
      "Collaborated with backend developers to integrate RESTful APIs, enabling seamless communication between frontend and backend systems.",
      "Implemented state management solutions using Redux Toolkit and Context API, improving data flow across the application.",
      "Performed debugging, cross-browser testing, and performance optimization to ensure a smooth and consistent user experience.",
      "Utilized Git, GitHub, and VS Code for daily development and version control.",
      "Actively participated in team stand-ups and collaborated with design and backend teams to deliver clean, production-ready UIs."
    ],
    skills: ['React', 'Tailwind CSS', 'Redux', 'RESTful APIs', 'Git'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    )
  }
  // Add more experiences here
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-40 w-[500px] h-[500px] rounded-full bg-yellow-600/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey in web development and software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line with Gradient */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-yellow-400/40 via-yellow-400/20 to-transparent"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                {/* Timeline Dot with Pulse Effect */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-400 border-4 border-gray-900 z-10"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-yellow-400/30 animate-ping"></div>
                </div>
                
                {/* Card */}
                <article className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/10 transition-all duration-500 border border-gray-700/50 hover:border-yellow-400/50">
                  {/* Top Gradient Line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-t-2xl"></div>

                  {/* Company Logo/Icon */}
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {experience.icon}
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <p className="text-yellow-300/80 font-medium flex flex-wrap items-center gap-2">
                        <span>{experience.company}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{experience.period}</span>
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-4 text-gray-300">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2.5 flex-shrink-0 group-hover/item:bg-yellow-300 transition-colors duration-300"></span>
                          <span className="group-hover/item:text-gray-200 transition-colors duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="pt-6 border-t border-gray-700/50">
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-4 py-1.5 text-sm bg-yellow-400/10 text-yellow-300 rounded-full hover:bg-yellow-400/20 transition-all duration-300 hover:scale-105"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

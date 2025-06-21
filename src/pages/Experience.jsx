import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Engineer Intern",
      company: "Third Eye AI (JBM Group)",
      period: "June 2024 - Present",
      description: "Working on developing and maintaining web applications using React.js and modern frontend technologies.",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "RESTful APIs"],
      achievements: [
        "Assisted in modernizing legacy JavaScript codebases by migrating to ReactJS, improving frontend maintainability and reducing UI load times.",
        "Developed scalable and responsive UI components using ReactJS and Tailwind CSS, ensuring mobile-first, cross-browser compatibility.",
        "Collaborated with backend developers to integrate RESTful APIs, enabling seamless communication between frontend and backend systems.",
        "Managed component-level state effectively using React’s built-in hooks and Context API for improved data flow across the application.",
        "Performed debugging, cross-browser testing, and performance optimization to ensure a smooth and consistent user experience.",
        "Utilized Git, GitHub, and VS Code for daily development and version control.",
        "Actively participated in team stand-ups and collaborated with design and backend teams to deliver clean, production-ready UIs."
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="heading-primary text-4xl md:text-5xl text-transparent bg-clip-text theme-gradient mb-8">
            Work Experience
          </h2>

          {/* Experience Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20" />
                
                {/* Timeline Dot */}
                <div className="absolute left-0 w-4 h-4 -translate-x-1.5 mt-1.5 rounded-full border-2 border-white bg-black" />

                {/* Content */}
                <div className="ml-8 theme-card p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                      <p className="text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-sm text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="theme-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

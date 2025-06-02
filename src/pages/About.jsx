import React from 'react';

const About = () => {
  const personalInfo = {
    name: "Sheetal Bajaj",
    title: "Front End Developer",
    location: "Punjab, India",
    intro: "I'm a passionate Front End Developer with expertise in modern web technologies. I love building responsive and user-friendly applications that solve real-world problems.",
    description: [
      "Specializing in React.js and modern JavaScript, I create efficient and scalable web applications with clean, maintainable code.",
      "Currently focused on full-stack development with experience in both frontend and backend technologies.",
      "Passionate about learning new technologies and implementing best practices in software development."
    ],
    keySkills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "RESTful APIs",
      "Git & GitHub",
      "Responsive Design"
    ],
    interests: [
      "Web Development",
      "UI/UX Design",
      "Software Architecture",
      "Performance Optimization",
      "Open Source"
    ]
  };

  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {personalInfo.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Professional Journey</h3>
              <div className="space-y-4">
                {personalInfo.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 text-sm hover:bg-yellow-500/10 transition-colors duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.keySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-300">{personalInfo.name}</span>
                </div>
                <div className="flex items-center gap-3 hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">{personalInfo.title}</span>
                </div>
                <div className="flex items-center gap-3 hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const skillsData = {
  Languages: [
    { name: 'JavaScript (ES6+)', level: 85, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { name: 'HTML5', level: 90, icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { name: 'CSS3', level: 80, icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  ],
  Technologies: [
    { name: 'React.js', level: 80, icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
    { name: 'Redux Toolkit', level: 70, icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
    { name: 'Bootstrap', level: 65, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
    { name: 'Tailwind CSS', level: 75, icon: 'https://tailwindcss.com/_next/static/media/twitter-square.6e737b53.svg' },
    { name: 'Material-UI', level: 70, icon: 'https://mui.com/static/logo.png' },
  ],
  Tools: [
    { name: 'Git', level: 75, icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
    { name: 'GitHub', level: 80, icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
    { name: 'REST APIs', level: 70, icon: 'https://cdn-icons-png.flaticon.com/512/1027/1027895.png' },
    { name: 'Visual Studio Code', level: 85, icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-extrabold mb-12 text-center">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h3>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="relative">
              {/* Category Title */}
              <div className="flex items-center mb-8">
                <h4 className="text-2xl font-bold text-yellow-400">{category}</h4>
                <div className="flex-grow ml-4 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map(({ name, level, icon }) => (
                  <div
                    key={name}
                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
                  >
                    {/* Skill Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-yellow-400/10 p-2 group-hover:bg-yellow-400/20 transition-colors duration-300">
                        <img
                          src={icon}
                          alt={name}
                          className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-lg text-gray-100 mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                          {name}
                        </h5>
                        <span className="text-yellow-400/80 text-sm font-medium">
                          Proficiency: {level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 ease-out"
                        style={{ width: `${level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;

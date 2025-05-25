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
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-extrabold mb-12 text-gray-900 dark:text-white">My Skills</h3>

        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-12 max-w-3xl mx-auto text-left">
            <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">{category}</h4>
            <div className="space-y-6">
              {skills.map(({ name, level, icon }) => (
                <div key={name} className="flex items-center space-x-4">
                  <img src={icon} alt={name} className="w-10 h-10" loading="lazy" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{level}%</span>
                    </div>
                    <div
                      className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={level}
                      aria-label={`${name} skill level`}
                    >
                      <div
                        className="bg-yellow-500 h-4 rounded-full transition-all"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

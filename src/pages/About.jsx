import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text theme-gradient">
              About Me
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              Passionate about creating sleek, responsive, and intuitive websites with modern web technologies. Currently working as a Frontend Engineer Intern at Third Eye AI (JBM Group).
            </p>
            
            <p className="leading-relaxed">
              I specialize in building efficient and user-friendly web applications using HTML5, CSS3, JavaScript, and React.js. My focus is on creating clean, maintainable code that delivers exceptional user experiences and meets business objectives.
            </p>

            <p className="leading-relaxed">
              With a strong foundation in modern frontend development practices, I enjoy tackling complex challenges and turning them into elegant solutions. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>

            <p className="leading-relaxed">
              I believe in writing clean, efficient code and creating intuitive user interfaces that make a difference. Whether it's optimizing performance or implementing responsive designs, I'm dedicated to delivering high-quality results.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 theme-button rounded-full font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Hire Me
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

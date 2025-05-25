import React from 'react';
import Skills from './Skills';
import Experience from './Experience';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto max-w-5xl text-center px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-yellow-400 tracking-wide">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          I am a passionate frontend developer focused on creating clean, responsive, and user-friendly websites.
        </p>

        {/* Skills Section */}
        <div className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-10 mb-16">
          <Skills />
        </div>

        {/* Experience Section */}
        <div className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-10">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default About;

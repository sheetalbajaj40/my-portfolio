// src/pages/About.jsx

import React from 'react';
import Skills from './Skills';
import Experience from './Experience';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900">About Me</h2>
        <p className="text-lg text-gray-700 mb-12">
          I am a passionate frontend developer focused on creating clean, responsive, and user-friendly websites.
        </p>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />
      </div>
    </section>
  );
};

export default About;

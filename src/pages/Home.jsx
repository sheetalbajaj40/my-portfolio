import React from 'react';
import Skills from './Skills';  // Import Skills
import Experience from './Experience';  // Import Experience

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center px-6 py-8 md:px-12 md:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight animate__animated animate__fadeIn animate__delay-1s text-yellow-400">
          Hi, I'm <span className="text-yellow-300">SHEETAL BAJAJ</span>
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200 animate__animated animate__fadeIn animate__delay-2s">
          Passionate Frontend Developer creating sleek, responsive, and intuitive websites with modern web technologies.
        </p>
        <a
          href="#projects"
          className="bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-xl"
        >
          View My Projects
        </a>
      </div>

      {/* Skills Section */}
      <div className="w-full py-16 bg-gray-800 mt-16 animate__animated animate__fadeIn animate__delay-3s">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-3xl font-extrabold mb-8">Skills</h3>
          <Skills />
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full py-16 bg-gray-200 mt-16 animate__animated animate__fadeIn animate__delay-4s">
        <div className="container mx-auto text-center text-gray-900">
          <h3 className="text-3xl font-extrabold mb-8">Experience</h3>
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Home;

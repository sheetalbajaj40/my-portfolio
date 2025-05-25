import React from 'react';
import { Link } from 'react-router-dom'; 
import Skills from './Skills';
import Experience from './Experience';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 text-center px-6 py-8 md:px-12 md:py-16">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight animate__animated animate__fadeIn animate__delay-1s text-yellow-400">
          Hi, I'm <span className="text-yellow-300">SHEETAL BAJAJ</span>
        </h2>
        <p className="text-lg md:text-xl mb-4 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
          Passionate Frontend Developer creating sleek, responsive, and intuitive websites with modern web technologies.
        </p>
        <p className="text-base md:text-lg mb-6 text-gray-400 animate__animated animate__fadeIn animate__delay-2s">
          Currently working as a Frontend Engineer Intern at Third Eye AI (JBM Group), specializing in ReactJS, Tailwind CSS, and API integration.
        </p>
        <Link
          to="/projects"
          className="inline-block bg-yellow-500 text-gray-900 py-3 px-8 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-xl"
        >
          View My Projects
        </Link>
      </div>

      {/* Skills Section */}
      <div className="w-full py-16 bg-gray-800 mt-20 animate__animated animate__fadeIn animate__delay-3s">
        <div className="container mx-auto text-center max-w-5xl">
          <h3 className="text-3xl font-extrabold mb-8 text-yellow-400">Skills</h3>
          <Skills />
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full py-16 bg-gray-900 mt-20 animate__animated animate__fadeIn animate__delay-4s">
        <div className="container mx-auto text-center max-w-5xl">
          <h3 className="text-3xl font-extrabold mb-8 text-yellow-400">Experience</h3>
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Home;

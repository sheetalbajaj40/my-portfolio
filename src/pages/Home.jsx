import React from 'react';

const Home = () => {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 text-left">
              <div className="space-y-6">
                <h1 className="font-outfit heading-primary text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text theme-gradient pb-2 tracking-tight">
                Hello, I'm<br />SHEETAL<br />BAJAJ
                </h1>
                <div className="flex items-center gap-4 my-6">
                  <div className="h-1 w-20 bg-white/20"></div>
                  <p className="font-space heading-secondary text-2xl md:text-3xl text-gray-300 tracking-wide">
                    Frontend Developer
                  </p>
                </div>
                <p className="font-space body-text text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                  Passionate about creating sleek, responsive, and intuitive websites with modern web technologies. Currently working as a Frontend Engineer Intern at Third Eye AI (JBM Group).
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-6 mt-10">
                  <a
                    href="#projects"
                    className="font-space nav-text inline-flex items-center gap-2 px-8 py-4 theme-button rounded-full font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    View Projects
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="font-space nav-text inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-full font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/20"
                  >
                    Contact Me
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-8 mt-12">
                  <a
                    href="https://github.com/sheetalbajaj40"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sheetalbajaj40"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image Side */}
            <div className="lg:flex-1 relative flex items-center justify-center">
              <div className="relative w-[200px] md:w-[240px] lg:w-[280px] aspect-square">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl"></div>
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-gray-300 to-white animate-spin-slow"></div>
                {/* Image Container */}
                <div className="absolute inset-1 rounded-full overflow-hidden bg-black p-1 shadow-2xl shadow-white/10">
                  <div className="w-full h-full rounded-full overflow-hidden border border-white/20 p-2 bg-gradient-to-br from-white/10 to-transparent backdrop-blur">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-4xl md:text-5xl font-bold text-white relative group">
                      <span className="font-outfit transform transition-transform duration-300 group-hover:scale-110">SB</span>
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  {/* Online Status */}
                  <div className="absolute bottom-4 right-4 bg-green-500 w-4 h-4 rounded-full border-2 border-black shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </main>
  );
};

export default Home;

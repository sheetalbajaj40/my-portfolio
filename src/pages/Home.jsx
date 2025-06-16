import React from 'react';

const Home = () => {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
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
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-8">
                <h1 className="font-outfit heading-primary text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text theme-gradient pb-2">
                  Hi, I'm Sheetal Bajaj
                </h1>
                <p className="font-space text-3xl md:text-4xl text-gray-300 tracking-wide">
                  A Front-End Developer
                </p>
                
                {/* Download Resume Button */}
                <div className="mt-12">
                  <a
                    href="/Sheetal_Bajaj_Frontend "
                    download
                    className="font-space inline-flex items-center gap-2 px-8 py-4 theme-button rounded-full font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg"
                  >
                    Download Resume
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative">
              <div className="relative w-full max-w-[500px] mx-auto">
                {/* Image Container with Gradient Border */}
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-gray-400 p-1">
                    <div className="absolute inset-0 bg-black rounded-2xl"></div>
                  </div>
                  {/* Image */}
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                    alt="Web Development"
                    className="relative w-full h-auto grayscale filter contrast-125 mix-blend-luminosity"
                  />
                  {/* Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
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

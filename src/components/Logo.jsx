import React from 'react';

const Logo = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-12 h-12 cursor-pointer"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-0 group-hover:rotate-180 transition-transform duration-700"></div>
      <div className="absolute inset-0.5 rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-yellow-600/20 via-transparent to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
        </div>

        {/* S Letter */}
        <div className="absolute left-1.5 top-1/2 -translate-y-1/2 transform group-hover:-translate-x-8 transition-transform duration-500">
          <span className="text-xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            S
          </span>
        </div>

        {/* B Letter */}
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 transform group-hover:translate-x-8 transition-transform duration-500">
          <span className="text-xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            B
          </span>
        </div>

        {/* Center Design */}
        <div className="relative z-10 w-0.5 h-6 bg-yellow-400/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

        {/* Decorative Dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-yellow-400/30 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100"></div>
        </div>
        <div className="absolute inset-0 flex items-start justify-center pt-2">
          <div className="w-1 h-1 rounded-full bg-yellow-400/30 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200"></div>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-2">
          <div className="w-1 h-1 rounded-full bg-yellow-400/30 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-300"></div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-yellow-400/20 blur-xl transform scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

export default Logo;
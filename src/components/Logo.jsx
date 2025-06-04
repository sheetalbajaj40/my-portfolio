import React from 'react';

const Logo = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex items-center focus:outline-none logo-container"
    >
      {/* Logo Container */}
      <div className="flex items-center">
        {/* Logo Symbol */}
        <div className="relative logo-float">
          <div className="w-10 h-10 bg-white rounded-lg transform transition-transform group-hover:rotate-0 duration-300"></div>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-poppins font-bold text-black text-xl">
            S
          </span>
        </div>
        
        {/* Logo Text */}
        <div className="ml-3 flex flex-col items-start">
          <span className="font-poppins font-semibold text-lg text-white group-hover:text-gray-300 transition-colors duration-300">
            Sheetal
          </span>
          <span className="text-xs text-gray-400 tracking-wider -mt-1 group-hover:text-white transition-colors duration-300">
            DEVELOPER
          </span>
        </div>
      </div>
    </button>
  );
};

export default Logo;
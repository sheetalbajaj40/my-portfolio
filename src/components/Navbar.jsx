import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-0">
          <div
            onClick={() => {
              window.location.href = '/';
            }}
            className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-xl select-none cursor-pointer"
          >
            SB
          </div>


          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8 text-lg font-semibold">
            {['/', '/about', '/projects', '/contact'].map((path, i) => {
              const cleanPath = path.slice(1);
              const name = path === '/' ? 'Home' : cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);
              return (
                <li key={i}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : 'text-gray-300'}`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div
          className={`md:hidden bg-gray-900 text-white overflow-hidden transition-max-height duration-500 ${isMenuOpen ? 'max-h-60 py-4' : 'max-h-0'
            }`}
        >
          <ul className="space-y-4 text-center text-lg font-semibold">
            {['/', '/about', '/projects', '/contact'].map((path, i) => {
              const cleanPath = path.slice(1);
              const name = path === '/' ? 'Home' : cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);
              return (
                <li key={i}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : 'text-gray-300'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Padding to offset fixed navbar height */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;

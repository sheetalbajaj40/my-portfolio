import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Front End Developer</h1>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4">
          <ul className="space-y-4 text-center">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `block hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}  
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `block hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `block hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `block hover:text-yellow-500 transition-colors duration-300 ${isActive ? 'text-yellow-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

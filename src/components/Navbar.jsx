import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', ref: refs.homeRef, path: '/' },
    { name: 'About', ref: refs.aboutRef, path: '/about' },
    { name: 'Skills', ref: refs.skillsRef, path: '/skills' },
    { name: 'Experience', ref: refs.experienceRef, path: '/experience' },
    { name: 'Projects', ref: refs.projectsRef, path: '/projects' },
    { name: 'Contact', ref: refs.contactRef, path: '/contact' },
  ];

  const handleClick = (ref, path) => {
    if (location.pathname === '/') {
      // If we're on the home page, use smooth scroll
      scrollToSection(ref);
    } else if (path === '/') {
      // If we're navigating to home, first navigate then scroll
      navigate(path);
      setTimeout(() => scrollToSection(ref), 100);
    } else {
      // Otherwise, just navigate to the page
      navigate(path);
    }
    setIsMenuOpen(false); // close menu on mobile
  };

  return (
    <>
      <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-0">
          {/* Advanced Logo */}
          <Logo onClick={() => handleClick(refs.homeRef, '/')} />

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-lg font-semibold">
            {navItems.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => handleClick(item.ref, item.path)}
                  className={`text-gray-300 hover:text-yellow-500 transition-colors duration-300 ${
                    (location.pathname === '/' && item.path === '/') || 
                    (location.pathname === item.path && item.path !== '/') 
                      ? 'text-yellow-400'
                      : ''
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden bg-gray-900 text-white transition-max-height duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <ul className="space-y-4 text-center text-lg font-semibold">
            {navItems.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => handleClick(item.ref, item.path)}
                  className={`text-gray-300 hover:text-yellow-500 transition-colors duration-300 ${
                    (location.pathname === '/' && item.path === '/') || 
                    (location.pathname === item.path && item.path !== '/') 
                      ? 'text-yellow-400'
                      : ''
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      // Add offset for navbar height
      const navbarHeight = 80; // This accounts for the navbar height
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (path === '/') {
      navigate(path);
      setTimeout(() => {
        const navbarHeight = 80;
        const elementPosition = ref.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo onClick={() => handleClick(refs.homeRef, '/')} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleClick(item.ref, item.path)}
                className={`nav-text text-gray-300 hover:text-white transition-colors duration-300 ${
                  (location.pathname === '/' && item.path === '/') || 
                  (location.pathname === item.path && item.path !== '/') 
                    ? 'text-white'
                    : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden theme-button p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-lg rounded-lg theme-border">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(item.ref, item.path)}
                  className={`block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 ${
                    (location.pathname === '/' && item.path === '/') || 
                    (location.pathname === item.path && item.path !== '/') 
                      ? 'text-white'
                      : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
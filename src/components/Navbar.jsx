import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Big Brother</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-500">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

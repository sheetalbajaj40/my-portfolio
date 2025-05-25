// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sheetal Bajaj. All rights reserved.</p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a 
            href="https://github.com/sheetalbajaj40" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.208 11.384c.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.605-2.665-.3-5.466-1.334-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.166 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.646.243 2.863.12 3.166.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.1.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.217.694.825.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/sheetalbajaj40"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452H16.9v-5.568c0-1.328-.024-3.037-1.85-3.037-1.85 0-2.132 1.445-2.132 2.938v5.667h-3.55V9h3.41v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.27 2.37 4.27 5.455v6.286zM5.337 7.433a2.07 2.07 0 01-2.065-2.069 2.07 2.07 0 012.065-2.07 2.07 2.07 0 012.069 2.07 2.07 2.07 0 01-2.069 2.069zm1.774 13.02H3.56V9h3.55v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.224.792 24 1.771 24h20.451c.978 0 1.778-.776 1.778-1.732V1.73C24 .774 23.203 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

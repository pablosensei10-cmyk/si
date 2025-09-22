
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chic Threads. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fab fa-pinterest fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

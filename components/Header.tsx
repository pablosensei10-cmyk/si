
import React from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              <i className="fa-solid fa-vest-patches mr-2 text-accent"></i>
              Chic Threads
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Men</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Women</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="relative text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Open shopping cart"
            >
              <i className="fa-solid fa-shopping-cart text-xl"></i>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

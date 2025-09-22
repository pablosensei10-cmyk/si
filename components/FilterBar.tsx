
import React from 'react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent capitalize ${
            activeCategory === category
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

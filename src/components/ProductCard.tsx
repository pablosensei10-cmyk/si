import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-primary mb-2 truncate">{product.title}</h3>
        <p className="text-sm text-gray-500 capitalize mb-4 flex-grow">{product.category}</p>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-accent text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <i className="fas fa-cart-plus"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

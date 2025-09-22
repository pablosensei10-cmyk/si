import React from 'react';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
              <i className="fas fa-shopping-cart text-5xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 mb-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border rounded">-</button>
                      <span className="px-3">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border rounded">+</button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Subtotal</span>
                <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

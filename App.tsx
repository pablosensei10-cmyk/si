
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { PRODUCTS, CATEGORIES } from './constants';
import type { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [notification, setNotification] = useState<string>('');

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showNotification(`${product.title} added to cart!`);
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item => (item.id === productId ? { ...item, quantity } : item))
      );
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return PRODUCTS;
    }
    return PRODUCTS.filter(product => product.category === activeCategory);
  }, [activeCategory]);
  
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="bg-secondary min-h-screen font-sans text-primary">
      <Header cartItemCount={cartItemCount} onCartClick={toggleCart} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          categories={CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      <Footer />
      {notification && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-bounce">
          {notification}
        </div>
      )}
    </div>
  );
};

export default App;

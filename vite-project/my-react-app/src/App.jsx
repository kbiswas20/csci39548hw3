import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Menu from "./components/Menu";  // Correct path to Menu component
import Cart from "./components/Cart";  // Correct path to Cart component
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('momoCart')) || []);

  useEffect(() => {
    localStorage.setItem('momoCart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    const newCart = [...cart];
    const existingItem = newCart.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Menu onAddToCart={handleAddToCart} />
      <Cart cart={cart} onClearCart={handleClearCart} />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

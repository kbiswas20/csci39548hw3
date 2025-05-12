import { useState, useEffect } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('momoCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('momoCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.name === item.name);
      if (existingItem) {
        return prevCart.map(i => 
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    // Show notification
    setNotification(item.name);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const decrementQuantity = (index) => {
    setCart(prevCart => {
      if (prevCart[index].quantity > 1) {
        return prevCart.map((item, i) => 
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((_, i) => i !== index);
      }
    });
  };

  const incrementQuantity = (index) => {
    setCart(prevCart => 
      prevCart.map((item, i) => 
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return {
    cart,
    notification,
    addToCart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity,
    clearCart,
    getTotal
  };
};

export default useCart;
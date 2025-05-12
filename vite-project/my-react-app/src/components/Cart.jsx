import React from "react";

const Cart = ({ cart, onClearCart }) => {
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <section id="cart" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <ul id="cart-items" className="mb-4 bg-white p-4 rounded shadow">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                {item.name} x {item.quantity} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p id="total" className="font-bold text-xl text-center mb-4">Total: ${calculateTotal()}</p>
          <div className="flex justify-center">
            <button onClick={onClearCart} className="bg-red-500 text-white px-6 py-2 rounded">Clear Cart</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
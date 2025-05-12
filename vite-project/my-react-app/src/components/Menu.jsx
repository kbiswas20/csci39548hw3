import React from "react";

const Menu = ({ onAddToCart }) => {
  const menuItems = [
    { name: "Steamed Veggie Momo", price: 7.00 },
    { name: "Steamed Chicken Momo", price: 8.00 },
    { name: "Steamed Beef Momo", price: 9.00 },
    { name: "Fried Veggie Momo", price: 8.00 },
    { name: "Fried Chicken Momo", price: 9.00 },
    { name: "Fried Beef Momo", price: 10.00 },
    { name: "Chilli Veggie Momo", price: 9.00 },
    { name: "Chilli Chicken Momo", price: 9.00 },
    { name: "Chilli Beef Momo", price: 10.00 },
    { name: "Soup Veggie Momo", price: 8.00 },
    { name: "Soup Chicken Momo", price: 9.00 },
    { name: "Soup Beef Momo", price: 10.00 },
    { name: "Bhatmas Sadheko", price: 6.00 },
    { name: "Sel Roti", price: 1.50 },
    { name: "Hot Coffee", price: 2.00 },
  ];

  return (
    <section id="menu" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md text-center cursor-pointer hover:bg-gray-50 transition-colors">
            <p>{item.name} - ${item.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(item)} className="ml-2 bg-green-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
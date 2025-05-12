import React from "react";

const Header = () => (
  <header className="relative bg-[#8B322C] text-white py-4 shadow-md">
    <div className="absolute inset-0 bg-cover bg-center backdrop-blur-sm z-[-1]" style={{ backgroundImage: 'url(/images/header-bg.jpg)' }}></div>
    <nav className="container mx-auto flex justify-between items-center px-4 relative z-10">
      <h1 className="text-xl font-bold tracking-wide">Nepali Momo Cafe</h1>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-[#FFD95A] transition-colors duration-300">Home</a></li>
        <li><a href="#menu" className="hover:text-[#FFD95A] transition-colors duration-300">Menu</a></li>
        <li><a href="#gallery" className="hover:text-[#FFD95A] transition-colors duration-300">Gallery</a></li>
        <li><a href="#about" className="hover:text-[#FFD95A] transition-colors duration-300">About</a></li>
        <li><a href="#contact" className="hover:text-[#FFD95A] transition-colors duration-300">Contact</a></li>
        <li><a href="#cart" className="hover:text-[#FFD95A] transition-colors duration-300">Cart</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

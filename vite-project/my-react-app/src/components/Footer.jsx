import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-8 border-t border-gray-300 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Nepali Momo Cafe</h3>
          <p>Delicious Nepali Momos served with love!</p>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row gap-4 text-sm">
            <li><a href="#about" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#menu" className="hover:text-gray-900">Menu</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-6 text-gray-500">
        <p>&copy; 2025 Nepali Momo Cafe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
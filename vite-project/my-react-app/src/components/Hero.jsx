import React from "react";

const Hero = () => (
  <section 
    id="hero" 
    className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center" 
    style={{ backgroundImage: "url('/images/banner2.jpg')" }}
  >
    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
      <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-white drop-shadow-md">
        Welcome to Nepali Momo Cafe
      </h1>
      <p className="text-xl mb-6 text-white drop-shadow-sm">
        Delicious Nepalese momos made with love
      </p>
      <a 
        href="#menu" 
        className="bg-white text-[#8B322C] px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition-colors"
      >
        Explore the Menu
      </a>
    </div>
  </section>
);

export default Hero;
import React, { useState } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "item1.jpg",  // Ensure these images exist in your public/images directory
    "item2.jpg",
    "item3.jpg",
    "item4.jpg",
    "item5.jpg",
    "item6.jpg"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="gallery" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Our Gallery</h2>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-2 z-10 bg-black bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-70"
          >
            ❮
          </button>
          <img
            src={`/images/${images[currentIndex]}`}
            alt={`Gallery Image ${currentIndex}`}
            className="w-full max-h-[600px] object-contain transition-opacity duration-500"
          />
          <button
            onClick={handleNext}
            className="absolute right-2 z-10 bg-black bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-70"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
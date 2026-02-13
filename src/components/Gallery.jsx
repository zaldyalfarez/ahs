import { useState } from "react";

const Gallery = () => {
  const images = [
    "/ahs/src/assets/img/2.png",
    "/ahs/src/assets/img/3.png",
    "/ahs/src/assets/img/4.png",
    "/ahs/src/assets/img/5.png",
    "/ahs/src/assets/img/6.png",
    "/ahs/src/assets/img/7.png",
    "/ahs/src/assets/img/8.png",
    "/ahs/src/assets/img/14.png",
    "/ahs/src/assets/img/9.png",
    "/ahs/src/assets/img/10.png",
    "/ahs/src/assets/img/11.png",
    "/ahs/src/assets/img/12.png",
    "/ahs/src/assets/img/13.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full hover:scale-105 transition-transform duration-300">
      <h2
        id="title-card"
        className="text-3xl font-semibold mb-4 text-center text-rose-600"
      >
        Our Roblox Memories
      </h2>

      {/* Card untuk 1 gambar */}
      <div className="w-[280px] h-50 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="w-100 h-100 object-cover"
        />
      </div>

      {/* Tombol navigasi */}
      <div className="flex gap-4">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-lg bg-red-200 text-red-700 hover:bg-red-300 disabled:bg-red-100 disabled:text-red-300 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-300 disabled:bg-red-100 disabled:text-red-300 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;

import { useState } from "react";
import Img2 from "../assets/img/2.png";
import Img3 from "../assets/img/3.png";
import Img4 from "../assets/img/4.png";
import Img5 from "../assets/img/5.png";
import Img6 from "../assets/img/6.png";
import Img7 from "../assets/img/7.png";
import Img8 from "../assets/img/8.png";
import Img9 from "../assets/img/9.png";
import Img10 from "../assets/img/10.png";
import Img11 from "../assets/img/11.png";
import Img13 from "../assets/img/13.png";
import Img14 from "../assets/img/14.png";

const images = [
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img14,
  Img9,
  Img10,
  Img11,
  Img13,
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full hover:scale-105 transition-transform duration-300">
      <h2 className="text-3xl font-semibold mb-4 text-center text-rose-600">
        Our Roblox Memories
      </h2>

      <div className="w-[280px] h-50 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

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

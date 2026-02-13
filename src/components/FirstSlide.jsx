import { useRef } from "react";
import { gsap } from "gsap";

const FirstSlide = ({ onNext }) => {
  const containerRef = useRef(null);

  const handleNext = () => {
    gsap.to(containerRef.current, {
      duration: 0.5,
      opacity: 0,
      onComplete: onNext,
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <img
        src="/src/assets/gif/BubuGIF.gif"
        alt="gif"
        className="w-60 h-60 object-contain"
      />

      <h1
        onClick={handleNext}
        className="cursor-pointer inline-block px-6 py-4 text-2xl font-bold text-rose-600 text-center tracking-wide drop-shadow-lg animate-pulse 
             [text-shadow:0_0_6px_rgba(255,241,242,0.9),0_2px_6px_rgba(0,0,0,0.25)] 
             hover:scale-105 active:scale-95 transition"
      >
        Tap here to continue
      </h1>
    </div>
  );
};

export default FirstSlide;

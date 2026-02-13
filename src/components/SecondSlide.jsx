import { useEffect, useRef } from "react";
import gsap from "gsap";

const SecondSlide = ({ onNext }) => {
  const firstRef = useRef(null);
  const middleRef = useRef(null);
  const lastRef = useRef(null);

  useEffect(() => {
    const words = [firstRef.current, middleRef.current, lastRef.current];

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to({}, { duration: 0.5 });

    tl.fromTo(
      words,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.75,
        stagger: 0.35,
      },
    );

    tl.to({}, { duration: 1.5 });

    tl.to(words, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      duration: 1.2,
      ease: "power2.in",
    });

    const totalDuration = 0.5 + 1.75 + 0.7 + 1.5 + 1.2 + 1.0;
    const timeout = setTimeout(onNext, totalDuration * 1000);

    return () => clearTimeout(timeout);
  }, [onNext]);

  const spanStyle = {
    textShadow: `
      3px 3px 8px rgba(255,255,255,0.9),
      6px 6px 12px rgba(255,255,255,0.6),
      0 4px 6px rgba(0,0,0,0.2)
    `,
    display: "inline-block",
    margin: "0 5px",
    transition: "transform 0.2s, text-shadow 0.2s",
    cursor: "default",
    userSelect: "none",
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1
        id="intro"
        className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-rose-500 text-center"
      >
        <span ref={firstRef} style={spanStyle}>
          Terima kasih
        </span>
        <span ref={middleRef} style={spanStyle}>
          karena selalu
        </span>
        <span ref={lastRef} style={spanStyle}>
          ada untukku
        </span>
      </h1>
    </div>
  );
};

export default SecondSlide;

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import NavBar from "./NavBar";
import Letter from "./Letter";
import Notes from "./Notes";
import Music from "./Music";
import Gallery from "./Gallery";

const ThirdSlide = () => {
  const [activeCard, setActiveCard] = useState("Surat");
  const cardRef = useRef(null);

  const renderCard = () => {
    switch (activeCard) {
      case "Surat":
        return <Letter />;
      case "Pesan":
        return <Notes />;
      case "Musik":
        return <Music />;
      case "Galeri":
        return <Gallery />;
      default:
        return <Letter />;
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
      );
    }
  }, [activeCard]);

  return (
    <div className="relative">
      <div ref={cardRef} className="w-full h-full">
        {renderCard()}
      </div>

      <NavBar active={activeCard} setActive={setActiveCard} />
    </div>
  );
};

export default ThirdSlide;

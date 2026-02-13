import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const NavBar = ({ active, setActive }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
      );
    }
  }, []);

  // Array objek: name = state, label = tampilan
  const items = [
    { name: "Surat", label: "💌 Surat" },
    { name: "Pesan", label: "📝 Pesan" },
    { name: "Musik", label: "🎵 Musik" },
    { name: "Galeri", label: "🖼️ Galeri" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-full px-6 py-3 flex items-center justify-center z-50"
    >
      {items.map((item) => {
        const isActive = active === item.name;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`
              px-4 py-2 rounded-full font-semibold transition-all duration-200
              ${
                isActive
                  ? "bg-rose-500 text-white shadow-lg"
                  : "text-gray-700 hover:text-rose-500"
              }
            `}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;

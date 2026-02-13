import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HeartParticles from "./components/HeartParticles";
import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide";
import ThirdSlide from "./components/ThirdSlide";
import TopLeft from "./components/TopLeft";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <>
      <HeartParticles />
      <MainLayout>
        <TopLeft />
        {currentSlide === 0 && <FirstSlide onNext={handleNext} />}
        {currentSlide === 1 && <SecondSlide onNext={handleNext} />}
        {currentSlide === 2 && <ThirdSlide onNext={handleNext} />}
      </MainLayout>
    </>
  );
}

export default App;

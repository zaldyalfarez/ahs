import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadHeartShape } from "@tsparticles/shape-heart";
import { loadRollUpdater } from "@tsparticles/updater-roll";

const HeartParticles = () => {
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      await loadHeartShape(tsParticles);
      await loadRollUpdater(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          background: {
            color: { value: "#FFC2D1" },
          },
          particles: {
            color: {
              value: ["#FB6F92"],
            },
            move: {
              angle: {
                offset: 0,
                value: 15,
              },
              direction: "bottom",
              enable: true,
              outModes: {
                default: "out",
              },
              speed: 3,
            },
            number: {
              value: 100,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "heart",
            },
            size: {
              value: 16,
            },
            roll: {
              darken: {
                enable: true,
                value: 30,
              },
              enlighten: {
                enable: true,
                value: 30,
              },
              enable: true,
              mode: "horizontal",
              speed: {
                min: 5,
                max: 15,
              },
            },
            zIndex: {
              value: {
                min: 0,
                max: 100,
              },
              opacityRate: 0,
              velocityRate: 2,
            },
          },
        },
      });
    };

    initParticles();
  }, []);

  return (
    <div id="tsparticles" className="fixed top-0 left-0 w-full h-full -z-10" />
  );
};

export default HeartParticles;

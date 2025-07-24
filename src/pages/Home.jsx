import {useEffect, useRef, useState} from "react";
import useGsapContext from "../context/GsapContext";
import gsap from "gsap";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

const Home = () => {
  const comp = useRef(null);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  if (vantaEffect) {
    console.log("vanta is here");
  }

  useGsapContext(() => {
    const tl = gsap.timeline();

    gsap.set("#welcome", {opacity: 0});

    tl.from("#intro-slider", {
      xPercent: "-100",
      duration: 1.3,
      delay: 0.3,
    })
      .from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        stagger: 0.7,
      })
      .to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.7,
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      })
      .to("#welcome", {
        opacity: 1,
        duration: 0.3,
      });
  }, comp);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;

    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: isMobile ? 200.0 : 600.0,
          minWidth: isMobile ? 200.0 : 600.0,
          baseColor: 0x2f0795,
          backgroundColor: 0x000000,
          amplitudeFactor: 2.2,
          xOffset: 0.09,
          yOffset: 0.03,
          size: 1.1,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="absolute flex flex-col gap-10 min-h-screen p-10 bg-gray-50 top-0 left-0 font-space-grotesk z-10 w-full tracking-tight"
      >
        <h1 id="title-1" className="text-6xl md:text-9xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-6xl md:text-9xl">
          Designer
        </h1>
        <h1 id="title-3" className="text-6xl md:text-9xl">
          Freelancer
        </h1>
      </div>
      <div
        ref={vantaRef}
        className="flex min-h-screen justify-center items-center bg-gray-950 "
      >
        <h1
          id="welcome"
          className="text-6xl md:text-9xl text-gray-200 font-space-grotesk font-bold z-10"
        >
          Welcome.
        </h1>
      </div>
    </div>
  );
};

export default Home;

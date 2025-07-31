import {useEffect, useRef, useState} from "react";
import useGsapContext from "../context/GsapContext";
import gsap from "gsap";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import Type from "../components/TypeWriter";

const Home = () => {
  const comp = useRef(null);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  
  useGsapContext(() => {
    gsap.fromTo(
      "#welcome",
      {opacity: 0, y: 30},
      {opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.5}
    );
  }, comp);

  // Vanta Halo background
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
        ref={vantaRef}
        className="relative flex h-screen w-full items-center bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 z-10 backdrop-blur" />
        <div
          id="welcome"
          className="p-6 sm:px-36 text-start absolute text-gray-200 font-space-grotesk font-bold z-20"
        >
          <h1 className=" text-3xl ">Hi There!</h1>
          <h1 className=" text-4xl md:text-5xl  mt-6">
            I'M{" "} 
            <span className=" bg-clip-text mb-6 ">
              MOHAMMED ASHFAK
            </span>
          </h1>
          <div className="mt-4 text-2xl sm:text-3xl text-indigo-600">
            <Type />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

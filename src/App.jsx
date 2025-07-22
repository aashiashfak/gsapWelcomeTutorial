import {useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";

function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      gsap.set("#welcome", {opacity: 0});
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .to("#welcome", {
          opacity: 1,
          duration: 0.5,
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className=" relative" ref={comp}>
        <div
          id="intro-slider"
          className="absolute flex flex-col gap-10 h-screen p-10 bg-gray-50 top-0 left-0 font-space-grotesk z-10 w-full tracking-tight"
        >
          <h1 id="title-1" className="text-8xl">
            software Engineer
          </h1>
          <h1 id="title-2" className="text-8xl">
            Designer
          </h1>
          <h1 id="title-3" className="text-8xl">
            Freelancer
          </h1>
        </div>
        <div className="flex min-h-screen justify-center bg-gray-950 items-center  ">
          <h1
            id="welcome"
            className="text-9xl text-gray-200 font-space-grotesk font-bold "
          >
            Welcome.
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;

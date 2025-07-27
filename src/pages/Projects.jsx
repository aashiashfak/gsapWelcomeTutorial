import {useRef} from "react";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import useGsapContext from "../context/GsapContext";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const containerRef = useRef(null);

  useTitleSplitAnimation(containerRef);
  useGsapContext(() => {
    gsap.fromTo(
      ".card:not(:first-child)",
      {
        x: 2100,
        rotate: -90,
      },
      {
        x: 0,
        rotate: 0,
        stagger: 0.4,
        scrollTrigger: {
          pin: containerRef.current,
          scrub: 0.5,
        },
      }
    );
  });

  const projects = [
    {title: "Project One", gradient: "from-orange-600 via-red-700 to-pink-800"},
    {
      title: "Project Two",
      gradient: "from-emerald-600 via-teal-700 to-green-800",
    },
    {
      title: "Project Three",
      gradient: "from-blue-600 via-blue-700 to-cyan-800",
    },
    {
      title: "Project Four",
      gradient: "from-purple-600 via-purple-700 to-indigo-800",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="px-6 py-12 md:px-28 bg-black  font-space-grotesk"
    >
      <h1
        id="section-title"
        className="text-4xl md:text-5xl font-bold text-gray-200 mb-12 text-center"
      >
        Projects
      </h1>

      <div className="p-6 lg:p-24 card relative h-[400vh] w-full">
        {projects.map((project, index) => {
          return (
            <div
              className={`card absolute bg-gradient-to-br ${project.gradient} p-4 rounded-xl w-[90%]  h-[40vh]`}
              key={project.title}
            >
              <h1>{project.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

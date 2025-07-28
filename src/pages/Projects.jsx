import {useRef} from "react";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import useGsapContext from "../context/GsapContext";
import inventorySystemImg from "../assets/projectImages/InventorySytem.png";

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
        y: 0,
      },
      {
        x: 0,
        transform: "translateX(-50%)",
        y: 0,
        rotate: 0,
        stagger: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.5,
          pin: true,
          start: "top top",
          end: "+=2000",
        },
      }
    );
  });

  const projects = [
    {
      title: "Evento",
      description:
        "Evento is an event booking platform designed to cater to three distinct user roles:Admin, Vendor, and User. The platform provides a comprehensive solution forevent management and ticket booking",
      gradient: "from-orange-600 via-red-700 to-pink-800",
      image: inventorySystemImg,
    },
    {
      title: "Date Tally",
      description:
        " DateTally is a date-based count tracker that allows users to add counts to past and current dates only, with a monthly view that displays daily entries and calculates total counts for each month.",
      gradient: "from-emerald-600 via-teal-700 to-green-800",
      image: inventorySystemImg,
    },
    {
      title: "Inventory System",
      description:
        "A web-based inventory management system built with Django and REST Framework, designed to handle products with multiple variants and provide insightful stock analysis — including purchase and sale tracking per variant.",
      gradient: "from-blue-600 via-blue-700 to-cyan-800",
      image: inventorySystemImg,
    },
    {
      title: "Seminar Hall",
      description:
        "Created a platform for booking seminar halls with user signup/login. ",
      gradient: "from-purple-600 via-purple-700 to-indigo-800",
      image: inventorySystemImg,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="px-6 py-12 min-h-screen md:px-28 bg-black font-space-grotesk overflow-hidden"
    >
      <h1
        id="section-title"
        className="text-4xl md:text-5xl font-bold text-gray-200 mb-12 text-center"
      >
        Projects
      </h1>

      <div className="relative p-2 w-full">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`card flex flex-col md:flex-row items-center absolute bg-gradient-to-br ${project.gradient} p-4 rounded-xl w-full h-[70vh]`}
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
            }}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {project.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Image Section with dark overlay */}
            <div className="w-full md:w-1/2 relative h-64 md:h-full">
              <img
                src={project.image}
                alt={project.title}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

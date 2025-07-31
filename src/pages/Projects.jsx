import {useRef} from "react";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import useGsapContext from "../context/GsapContext";
import inventorySystemImg from "../assets/projectImages/InventorySytem.png";
import evnto from "../assets/projectImages/Evento.png";
import evntoMac from "../assets/projectImages/EventoMac.jpg";
import dateTally from "../assets/projectImages/DateTally.png";
import seminarHall from "../assets/projectImages/SeminarHall.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useTitleSplitAnimation(containerRef);

  useGsapContext(() => {
    gsap.fromTo(
      ".card:not(:first-child)",
      {
        y: 2100,
        rotate: -90,
        x: 0,
        scale:-2
      },
      {
        y: 0,
        transform: "translateX(-50%)",
        x: 0,
        scale:0,
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
      image: evntoMac,
    },
    {
      title: "Date Tally",
      description:
        " DateTally is a date-based count tracker that allows users to add counts to past and current dates only, with a monthly view that displays daily entries and calculates total counts for each month.",
      gradient: "from-emerald-600 via-teal-700 to-green-800",
      image: dateTally,
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
      image: seminarHall,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="px-6 py-16 min-h-screen md:px-28 font-space-grotesk overflow-hidden"
    >
      <h1
        id="section-title"
        className="text-4xl md:text-5xl font-bold text-gray-200 mb-16 text-center"
      >
        My Recent <span className="text-indigo-600">Works</span>
      </h1>

      <div className="relative p-2 w-full">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`card absolute left-1/2 backdrop-blur-lg  -translate-x-1/2 flex flex-col md:flex-row items-center bg-gray-900/60    p-4 rounded-xl w-full h-[60vh]`}
            style={{
              top: `${index * 20}px`,
              zIndex: index + 1,
            }}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {project.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-500">
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

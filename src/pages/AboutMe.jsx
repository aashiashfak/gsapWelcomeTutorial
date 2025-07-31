import {useRef} from "react";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";
import gsap from "gsap";
import useGsapContext from "../context/GsapContext";
import ProfileImg2 from "../assets/profile/profile-3.jpg";

const AboutMe = () => {
  const containerRef = useRef(null);

  useGsapContext(() => {
    if (!containerRef.current) return;
    gsap.utils.toArray(".reveal", containerRef.current).forEach((elem) => {
      gsap.from(elem, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, containerRef);

  useTitleSplitAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      id="aboutMe"
      className="px-6 py-16 md:px-36 min-h-screen font-space-grotesk"
    >
      <h1
        id="section-title"
        className="text-4xl md:text-5xl font-bold text-gray-200 mb-16 text-center"
      >
        Know Who <span className="text-indigo-600">I'm</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        {/* img-section */}
        <div className="flex justify-center items-center w-full md:w-1/2 md:pr-4 shadow-lg order-1 md:order-2 hover:scale-3d hover:rotate-2 transition-transform duration-300 ease-in-out ">
          <img
            src={ProfileImg2}
            alt="About Me Image"
            className="opacity-50 z-10 w-full h-full object-cover object-center rounded-lg shadow-md brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-lg"></div>
        </div>

        {/* text-section */}
        <div className="reveal backdrop-blur-sm border p-6 rounded-2xl  w-full md:w-1/2 order-2 md:order-1">
          <p className="text-gray-500 text-lg ">
            I'm a BA English Language and Literature graduate who made an
            exciting shift into the tech world — all sparked by a growing
            interest in problem-solving and web technologies. I began my journey
            with HTML, CSS, and Bootstrap, which helped me build a solid
            foundation in web design. As my curiosity grew, I explored
            full-stack development, choosing Python as my main language and
            diving into backend development with Django, along with frontend
            development using React. I've gained experience working both
            independently and collaboratively on web applications. I'm
            comfortable working with technologies like Python, Django, React,
            PostgreSQL, and Tailwind CSS, and I'm also familiar with REST APIs,
            JWT authentication, Redux, Formik, and Axios. I'm passionate about
            learning, adapting to new tools, and building meaningful software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import { useRef } from "react";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";
import gsap from "gsap";
import useGsapContext from "../context/GsapContext";


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
      className="px-6 py-12 md:px-28 bg-gray-950 min-h-screen font-space-grotesk "
    >
      <h1
        id="section-title"
        className="text-4xl md:text-5xl font-bold text-gray-200 mb-12 text-center"
      >
        About Me
      </h1>
      <div className="flex flex-col gap-7">
        <section className="reveal bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl shadow-md shadow-indigo-500 ">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            👋 Who am I?
          </h2>
          <p className="text-gray-300 text-lg">
            I'm Mohammed Ashfak T, a passionate full-stack developer from
            Malappuram, Kerala. I specialize in building modern, scalable web
            applications using Django and React.
          </p>
        </section>

        <section className="reveal bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl shadow-md shadow-indigo-500 ">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3 ">
            🛠 Skills
          </h2>
          <p className="text-gray-500 text-lg">
            I work primarily with Python, Django, React, PostgreSQL, and
            Tailwind CSS. I'm also familiar with JWT auth, REST APIs, and Redux
            for state management.
          </p>
        </section>

        <section className="reveal bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl shadow-md shadow-indigo-500 ">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            ✨ What Drives Me
          </h2>
          <p className="text-gray-500 text-lg ">
            I love building things that make a real difference. I believe in the
            power of thoughtful design, clean code, and continuous learning. My
            motto is:{" "}
            <span className="italic font-medium">
              "Strive to build things that make a difference."
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
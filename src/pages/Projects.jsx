import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {title: "Project One", bg: "#EF476F"},
  {title: "Project Two", bg: "#FFD166"},
  {title: "Project Three", bg: "#06D6A0"},
  {title: "Project Four", bg: "#118AB2"},
];

const Projects = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current;

    // Hide all but the first card
    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, {yPercent: 100});
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: {ease: "none"},
    });

    items.forEach((item, index) => {
      if (index < items.length - 1) {
        timeline.to(item, {scale: 0.95, borderRadius: "1rem"});
        timeline.to(
          items[index + 1],
          {yPercent: 0},
          "<" // At same time as previous ends
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-section vertical-section h-screen w-full bg-black text-white font-space-grotesk overflow-hidden"
    >
      <div className="relative h-full w-full flex items-center justify-center px-4 md:px-24 py-12">
        {/* Stack of Cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="item absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300"
          >
            <div
              className="w-full max-w-4xl h-[70vh] rounded-3xl shadow-2xl flex items-center justify-center text-4xl font-bold text-white"
              style={{
                backgroundColor: project.bg,
              }}
            >
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

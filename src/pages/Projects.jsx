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

    // Set initial positions
    items.forEach((item, index) => {
      gsap.set(item, {
        yPercent: index === 0 ? 0 : 100,
        zIndex: items.length - index,
        opacity: index === 0 ? 1 : 0,
      });
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${(items.length - 1) * window.innerHeight}`,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    items.forEach((item, index) => {
      if (index < items.length - 1) {
        timeline
          .to(item, {
            yPercent: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .to(
            items[index + 1],
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<"
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
      className="relative h-screen w-full overflow-hidden bg-black text-white font-space-grotesk p-24"
    >
      {/* Inner container that respects padding */}
      <div className="relative w-full h-full">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center text-4xl font-bold rounded-3xl shadow-lg"
            style={{
              backgroundColor: project.bg,
              zIndex: projects.length - index,
              padding: "1.5rem", // optional inner padding
              margin: "1.5rem", // helps shrink the size
              height: "100%", // let it size naturally
              width: "100%",
              boxSizing: "border-box", // to apply padding correctly
            }}
          >
            {project.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

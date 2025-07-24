import {useRef} from "react";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";

const Projects = () => {
  const containerRef = useRef(null);

  useTitleSplitAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      className="px-6 py-12 md:px-28 bg-black min-h-screen font-space-grotesk"
    >
      <h1
        id="section-title"
        className="text-4xl md:text-5xl font-bold text-gray-200 mb-12 text-center"
      >
        Projects
      </h1>
    </div>
  );
};

export default Projects;

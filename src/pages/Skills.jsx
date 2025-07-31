import {SkillCard} from "../components/SkillCard";
import {
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaCode, // Added FaCode as an alternative for VS Code
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  SiRedis,
  SiRedux,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiReactquery,
  SiMui,
  SiShadcnui,
} from "react-icons/si";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";
import {useRef} from "react";

const Skills = () => {
  const containerRef = useRef(null);
  useTitleSplitAnimation(containerRef);

  const mySkills = [
    {name: "Python", icon: FaPython, color: "#3776ab"},
    {name: "Django", icon: SiDjango, color: "#0C4B33"},
    {name: "PostgreSQL", icon: SiPostgresql, color: "#336791"},
    {name: "JavaScript", icon: FaJs, color: "#f0db4f"},
    {name: "React", icon: FaReact, color: "#61dbfb"},
    {name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8"},
    {name: "React Query", icon: SiReactquery, color: "#40c057"},
    {name: "Git", icon: FaGitAlt, color: "#f34f29"},
    {name: "HTML5", icon: FaHtml5, color: "#e34c26"},
    {name: "CSS3", icon: FaCss3Alt, color: "#264de4"},
    {name: "Redis", icon: SiRedis, color: "#D82C20"},
    {name: "Figma", icon: FaFigma, color: "#F24E1E"},
    {name: "Redux", icon: SiRedux, color: "#764ABC"},
    {name: "Bootstrap", icon: SiBootstrap, color: "#563D7C"},
    {name: "Postman", icon: SiPostman, color: "#FF6C37"},
    {name: "GitHub", icon: FaGithub, color: "#EEEE"},
    {name: "VS Code", icon: FaCode, color: "#007ACC"},
    {name: "Vercel", icon: SiVercel, color: "#EEEE"},
    {name: "Material UI", icon: SiMui, color: "#007FFF"},
    {name: "Shadcn UI", icon: SiShadcnui, color: "#EEEE"},
    
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center px-6 pt-12 pb-28 md:px-24 min-h-screen items-center font-space-grotesk  "
    >
      <div className="inset-0 bg-black opacity-50">

      </div>
      <h1
        id="section-title"
        className="text-4xl md:text-5xl font-bold text-indigo-600 mb-12 text-center"
      >
        Skills <span className="text-gray-200">And</span> Tools
      </h1>

      <SkillCard skills={mySkills} />
    </div>
  );
};

export default Skills;

import {useState, useEffect} from "react";
import {HiHome, HiUser,   } from "react-icons/hi"; 
import {GoProjectRoadmap} from "react-icons/go";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    {id: "home", label: "Home", icon: <HiHome size={24} />},
    {id: "aboutMe", label: "About Me", icon: <HiUser size={24} />},
    {
      id: "projects",
      label: "Projects",
      icon: <GoProjectRoadmap size={24} />,
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      sections.forEach(({id}) => {
        const el = document.getElementById(id);
        if (el) {
          const {offsetTop, offsetHeight} = el;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2  lg:left-4 lg:top-1/2 lg:-translate-y-1/2 z-50">
      <div className="bg-transparent backdrop-blur-sm rounded-full border-indigo-500 border p-3 shadow-md shadow-indigo-500">
        <div className="flex lg:flex-col gap-4">
          {sections.map(({id, label, icon}) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              title={label}
              className={`group relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {icon}
              <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

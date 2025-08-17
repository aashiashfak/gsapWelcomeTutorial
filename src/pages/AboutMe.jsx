import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import ProfileImg2 from "../assets/profile/profile-3.jpg";
import ProfileImg3 from "../assets/profile/ProfileImgNB.png";
import useTitleSplitAnimation from "../hooks/useTitleSplitAnimation";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 100,
            rotateY: -35,
            transformPerspective: 1200,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              delay: 1.3,
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    },
    {scope: containerRef}
  );

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
        <div className="reveal flex justify-center items-center w-full md:w-1/2 shadow-lg order-1 md:order-2">
          <img
            src={ProfileImg3}
            alt="About Me Image"
            className="w-full h-full object-center  rounded-lg shadow-md brightness-50 "
          />
        </div>

        {/* text-section */}
        <div className="reveal backdrop-blur-sm border p-6 rounded-2xl w-full md:w-1/2 order-2 md:order-1 bg-gray-900/50">
          <p className="text-gray-500 text-lg">
            I'm a BA English Language and Literature graduate who made an
            exciting shift into the tech world — all sparked by a growing
            interest in problem-solving and web technologies...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

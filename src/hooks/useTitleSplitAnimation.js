import {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const useTitleSplitAnimation = (
  containerRef,
  titleSelector = "#section-title"
) => {
  useEffect(() => {
    if (!containerRef?.current) return;

    const titleElement = containerRef.current.querySelector(titleSelector);

    if (titleElement) {
      const split = new SplitText(titleElement, {
        type: "words,chars",
        linesClass: "split-line",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: titleElement,
          toggleActions: "play none none none",
          start: "top 80%",
        },
        duration: 0.8,
        ease: "circ.out",
        y: 80,
        stagger: 0.03,
        opacity: 0,
      });

      return () => {
        split.revert();
      };
    }
  }, [containerRef, titleSelector]);
};

export default useTitleSplitAnimation;

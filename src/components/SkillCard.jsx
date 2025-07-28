import {useRef, useEffect} from "react";
import {gsap} from "gsap";

export function SkillCard({skills}) {
  const cardRef = useRef(null);
  const skillContentRefs = useRef([]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;

      const touch = e.touches[0];
      handleMouseMove({clientX: touch.clientX, clientY: touch.clientY});
    };

    const handleTouchEnd = () => {
      handleMouseLeave();
    };

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const strength = 0.08;

      skillContentRefs.current.forEach((skillContentEl) => {
        if (skillContentEl) {
          const skillItemEl = skillContentEl.parentElement;
          if (!skillItemEl) return;

          const skillRect = skillItemEl.getBoundingClientRect();
          const skillCenterX = skillRect.left + skillRect.width / 2;
          const skillCenterY = skillRect.top + skillRect.height / 2;

          const relativeX = mouseX - (skillCenterX - centerX);
          const relativeY = mouseY - (skillCenterY - centerY);

          gsap.to(skillContentEl, {
            x: relativeX * strength,
            y: relativeY * strength,
            duration: 0.7,
            ease: "power2.out",
          });
        }
      });
    };

    const handleMouseLeave = () => {
      skillContentRefs.current.forEach((skillContentEl) => {
        if (skillContentEl) {
          gsap.to(skillContentEl, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          });
        }
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("touchmove", handleTouchMove);
    card.addEventListener("touchend", handleTouchEnd);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.addEventListener("touchmove", handleTouchMove);
      card.addEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="border border-indigo-500 shadow-lg shadow-indigo-500 rounded-2xl w-full max-w-4xl p-6 relative overflow-hidden"
    >
      <section className="grid grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="relative flex items-center justify-center p-3"
          >
            <div
              ref={(el) => (skillContentRefs.current[index] = el)}
              className="flex flex-col items-center justify-center gap-1 will-change-transform"
              style={{transform: "translateZ(0)"}}
            >
              <skill.icon size={32} color={skill.color} />
              <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-tight truncate">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

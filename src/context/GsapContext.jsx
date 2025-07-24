import {useLayoutEffect} from "react";
import gsap from "gsap";

const useGsapContext = (animationFn, scopeRef) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(animationFn, scopeRef);
    return () => ctx.revert();
  }, []);
};

export default useGsapContext;

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import About from "../About/About";

const Scrolly = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 300) {
      setIsVisible(true);
    }
  }, [scrollY]);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(100px)",
  });

  return (
    <animated.div style={animationProps}>
      <>
        <About />
      </>
    </animated.div>
  );
};

export default Scrolly;

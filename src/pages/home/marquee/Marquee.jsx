import React from "react";
import { useRef } from "react";
import './Style.css'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100, fontSize = "5rem", marginRight = "30px" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x, fontSize, "--margin-right": marginRight }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

function Marquee() {
  return (
    <section>
      <ParallaxText baseVelocity={-5} fontSize="clamp(2rem, 5vw, 5rem)" marginRight="clamp(15px, 3vw, 30px)">
        Framer Motion
      </ParallaxText>
      <ParallaxText baseVelocity={5} fontSize="clamp(2rem, 5vw, 5rem)" marginRight="clamp(15px, 3vw, 30px)">
        Scroll velocity
      </ParallaxText>
    </section>
  );
}

export default Marquee;
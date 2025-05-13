"use client";

import React, { useEffect, useState } from "react";
import { myNumbers } from "../data/index.tsx";
import { LazyAnimated } from "./LazyLoad.tsx";
import SkillsSection from "./SkillsSection.tsx";
import { motion, useScroll, useTransform } from "motion/react";

const NumbersAndSkills = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100% 100%", "end start"],
    // offset: ["start start", "end start"],
    // offset: ["50% 100%", "100% 50%"],
  });

  // const animateTransform = useTransform(scrollYProgress, [1, 0.4], [0.1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 200]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        y,
        transformOrigin: "center",
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.4,
      }}
    >
      <LazyAnimated rootMargin="0px 0px -20px 0px" className="min-h-96 pb-96">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center px-8 pb-24 pt-2">
          {myNumbers.map((item) => (
            <NumbersItem key={item.title} item={item} />
          ))}
        </div>

        {isMobile && <SkillsSection />}
      </LazyAnimated>
    </motion.div>
  );
};

const NumbersItem = ({ item }: { item: { title: string; number: string } }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-3xl md:text-5xl font-bold">{item.number}</div>

      <div className="text-xs md:text-sm">
        {item.title.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NumbersAndSkills;

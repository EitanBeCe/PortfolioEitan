"use client";

import React from "react";
import { BackgroundGradientAnimation } from "./ui/GradientBackground.tsx";
import { useEffect, useState } from "react";

export enum CircleSize {
  S = "S",
  M = "M",
  L = "L",
}

const sizes = {
  S: {
    sm: 12,
    md: 20,
    lg: 40,
    n1: 150,
    n2: 130,
  },
  M: {
    sm: 20,
    md: 30,
    lg: 40,
    n1: 150,
    n2: 130,
  },
  L: {
    sm: 30,
    md: 40,
    lg: 40,
    n1: 150,
    n2: 130,
  },
};

const StackItem = ({
  title,
  img,
  circleSize,
}: {
  title: string;
  img: string;
  circleSize: CircleSize;
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let size = sizes.L;
  if (circleSize === CircleSize.S) {
    size = sizes.S;
  } else if (circleSize === CircleSize.M) {
    size = sizes.M;
  } else if (circleSize === CircleSize.L) {
    size = sizes.L;
  }

  return (
    // <div
    //   className={`relative
    //   w-[${size.lg}vw] h-[${size.lg}vw]
    //   sm:w-[${size.sm}vw] sm:h-[${size.sm}vw]
    //   md:w-[${size.md}vw] md:h-[${size.md}vw]
    //   lg:w-[${size.lg}vh] lg:h-[${size.lg}vh]
    //   xl:w-[${size.lg}vh] xl:h-[${size.lg}vh]
    //   mt-12 lg:mt-24
    //   rounded-full mx-auto overflow-hidden flex items-center justify-center`}
    // >
    <div
      className={`relative 
      w-[${size.lg}vw] h-[${size.lg}vw]
      mt-12 lg:mt-24 
      rounded-full mx-auto overflow-hidden flex items-center justify-center`}
    >
      <BackgroundGradientAnimation />

      <svg
        className="absolute w-[100%] h-[100%] pointer-events-none"
        viewBox="0 0 300 300"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "50% 50%",
        }}
      >
        <defs>
          <path
            id="circlePath"
            d={`M ${size.n1}, ${size.n1}
              m -${size.n2}, 0
              a ${size.n2},${size.n2} 0 1,1 ${size.n2 * 2},0
              a ${size.n2},${size.n2} 0 1,1 -${size.n2 * 2},0`}
          />
        </defs>
        <text fill="white" fontSize="8" fontWeight="bold">
          <textPath href="#circlePath" startOffset="50%">
            {title}
          </textPath>
        </text>
      </svg>

      <div className="">
        <img src={img} alt="Eitan-bg" className="-rotate-1" />
      </div>
    </div>
  );
};

export default StackItem;

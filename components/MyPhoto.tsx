"use client";

import React from "react";
import { BackgroundGradientAnimation } from "./ui/GradientBackground.tsx";
import { useEffect, useState } from "react";

const MyPhoto = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative 
      w-[90vw] h-[90vw]
      sm:w-[80vw] sm:h-[80vw] 
      md:w-[70vw] md:h-[70vw] 
      lg:w-[90vh] lg:h-[90vh]
      xl:w-[90vh] xl:h-[90vh]
      mt-12 lg:mt-24 
      rounded-full mx-auto overflow-hidden flex items-center justify-center"
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
            d="M 150, 150
              m -130, 0
              a 130,130 0 1,1 260,0
              a 130,130 0 1,1 -260,0"
          />
        </defs>
        <text fill="white" fontSize="16" fontWeight="bold">
          <textPath href="#circlePath" startOffset="50%">
            Enjoying so far? Keep going!
          </textPath>
        </text>
      </svg>

      <div className="absolute w-[50%] bottom-0 right-20">
        <img
          src="/assets/eitan/Eitan-bg.png"
          alt="Eitan-bg"
          className="object-cover object-center -rotate-3"
        />
      </div>
    </div>
  );
};

export default MyPhoto;

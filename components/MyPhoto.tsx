"use client";

import React from "react";
import { BackgroundGradientAnimation } from "./ui/GradientBackground.tsx";
import { useEffect, useState } from "react";

const MyPhoto = () => {
  const [rotation, setRotation] = useState(0);
  const [vwOrVh, setVwOrVh] = useState<"vw" | "vh">("vh");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < window.innerHeight) {
        setVwOrVh("vw");
      } else {
        setVwOrVh("vh");
      }
    };

    handleResize(); // вызов сразу при монтировании
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative h-[90${vwOrVh}] w-[90${vwOrVh}] sm:h-[98${vwOrVh}] sm:w-[98${vwOrVh}] sm:mt-24 rounded-full mx-auto overflow-hidden flex items-center justify-center`}
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

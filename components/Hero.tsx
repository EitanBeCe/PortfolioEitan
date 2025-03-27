import React from "react";
import { Spotlight } from "./ui/Spotlight.tsx";
import { GridBackgroundHero } from "./ui/GridBackgroundHero.tsx";
import { Lamp } from "./ui/Lamp.tsx";
import { HeroTexts } from "./HeroTexts.tsx";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 z-20">
      <div>
        <Spotlight
          // className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          className="-left-32 -top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-3/4 h-[80vh] w-[60vw]" fill="red" />
      </div>

      <GridBackgroundHero />

      <Lamp />

      <HeroTexts />
    </div>
  );
};

export default Hero;

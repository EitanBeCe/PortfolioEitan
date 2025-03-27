import React from "react";
import { Spotlight } from "./ui/Spotlight.tsx";
import { GridBackgroundHero } from "./ui/GridBackgroundHero.tsx";
import { TextGenerateEffect } from "./ui/TextGenerateEffect.tsx";
import MagicButton from "./ui/MagicButton.tsx";
import { FaLocationArrow } from "react-icons/fa6";
import { Lamp } from "./ui/Lamp.tsx";

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

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Eitan, a React developer based in Israel
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              iconPosition="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

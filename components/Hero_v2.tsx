import React from "react";
import { HeroParallax } from "./ui/HeroParallax.tsx";
import { LampHero } from "./ui/Lamp.tsx";
import { myProjects } from "../data/index.tsx";
import SocialMedia from "./SocialMedia.tsx";

const Hero_v2 = () => {
  return (
    <div>
      <LampHero />
      <HeroParallax myProjects={myProjects} />
    </div>
  );
};

export default Hero_v2;

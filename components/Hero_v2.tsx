import React from "react";
import { HeroParallax } from "./ui/HeroParallax.tsx";
import { Lamp } from "./ui/Lamp.tsx";
import { myProjects } from "../data/index.tsx";

const Hero_v2 = () => {
  return (
    // <div className="sm:-mx-10 -mx-5">
    <div>
      <Lamp />
      <HeroParallax myProjects={myProjects} />
    </div>
  );
};

export default Hero_v2;

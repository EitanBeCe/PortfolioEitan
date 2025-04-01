import React from "react";
import { HeroParallax } from "./ui/HeroParallax.tsx";
import { myProjects } from "../constants/myProjects.tsx";
import { Lamp } from "./ui/Lamp.tsx";

const Hero_v2 = () => {
  // FIXME: тут только с прошлого портфолио, надо добавить новые проекты. И добавить ссыль на гитхаб.
  return (
    // <div className="sm:-mx-10 -mx-5">
    <div>
      <Lamp />
      <HeroParallax myProjects={myProjects} />
    </div>
  );
};

export default Hero_v2;

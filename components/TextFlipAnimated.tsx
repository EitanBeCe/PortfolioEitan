import React from "react";
import { LazyAnimated } from "./LazyLoad.tsx";
import TextFlip from "./ui/ContainerTextFlip.tsx";

const TextFlipAnimated = () => {
  return (
    <LazyAnimated rootMargin="0px 0px -40% 0px" className="min-h-[320px]">
      <TextFlip />
    </LazyAnimated>
  );
};

export default TextFlipAnimated;

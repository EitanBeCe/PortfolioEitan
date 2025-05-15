import React from "react";
import { ContainerTextFlip } from "./ui/ContainerTextFlip.tsx";

const TextFlip = () => {
  return (
    <div className="flex flex-col justify-center items-center my-44 max-h-[124px]">
      <h1 className="heading pr-6 pb-6">
        <span className="text-purple">Warning:</span> I am not a
      </h1>
      <ContainerTextFlip
        words={[
          "passionate",
          "driven",
          "creative",
          "proactive",
          // "visionary",
          // "professional",
          "coffee-dependent",
          "fluff generating",
          "Chief AI prompt recycler",
        ]}
        interval={1200}
        className="max-h-[92px]"
      />
    </div>
  );
};

export default TextFlip;

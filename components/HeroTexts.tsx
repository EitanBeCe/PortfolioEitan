import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton.tsx";
import { TextGenerateEffect } from "./ui/TextGenerateEffect.tsx";

export const HeroTexts = () => {
  return (
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
  );
};

"use client";

import { cn } from "@/lib/utils";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton.tsx";
import { useEffect, useState } from "react";
import animationData from "@/data/confetti.json";
import dynamic from "next/dynamic";
import { LazyAmimated } from "../LazyLoad.tsx";
import { AnimatedGlobe } from "../AnimatedGlobe.tsx";

const BackgroundGradientAnimation = dynamic(
  () =>
    import("./GradientBackground").then(
      (mod) => mod.BackgroundGradientAnimation
    ),
  { ssr: false }
);

// const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftList = ["React.js", "Next.js", "TypeScript"];
  const rightList = ["SwiftUI", "Redux", "Three.js"];

  const [copied, setCopied] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  // const defaultOptions = {
  //   loop: copied,
  //   autoplay: copied,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const handleCopy = () => {
    const text = "eitanleviberger@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setAnimationFinished(false);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        // https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* {header} */}

      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            `${
              id !== 6 &&
              "group-hover/bento:translate-x-2 transition duration-200"
            } relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-50">
            {title}
          </div>

          {/* {id === 2 && <LazyGlobeWrapper />} */}
          {id === 2 && (
            // <LazyLoad>
            //   <GlobeDemo />
            // </LazyLoad>

            <div className="flex items-center justify-center absolute -left-5 top-10 md:top-36 w-full h-full">
              <div className="max-w-7xl mx-auto w-full relative overflow-hidden px-4 h-96">
                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
                <div className="absolute w-full h-72 md:h-full z-10">
                  <AnimatedGlobe />
                  {/* <Image
                    src="/globe.png"
                    alt="Globe visualization"
                    fill
                    className="object-contain pointer-events-none select-none"
                    priority
                  /> */}
                </div>
              </div>
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-0">
              <div className="flex flex-col gap-3 lg:gap-4">
                {leftList.map((item) => (
                  <span
                    key={item}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}

                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-4">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

                {rightList.map((item) => (
                  <span
                    key={item}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {copied && !animationFinished && (
                <div className="absolute -bottom-5 right-0">
                  <LazyAmimated rootMargin="200px">
                    <Lottie
                      animationData={animationData}
                      loop={false}
                      autoplay
                      onComplete={() => setAnimationFinished(true)}
                      style={{ height: 200, width: 400 }}
                    />
                  </LazyAmimated>
                </div>
              )}

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                iconPosition="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

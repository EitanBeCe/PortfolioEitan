"use client";

import React, { useState, useEffect, useId } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils.tsx";

const TextFlip = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const words = !isSafari
    ? [
        "passionate 🤢",
        "driven 😵‍💫",
        "creative 🫥",
        "coffee-dependent ☕️",
        "fluff-generating 🤦",
        "AI prompt recycler ♻️",
        // "Chief AI prompt recycler",
      ]
    : [
        "passionate",
        "driven",
        "creative",
        "coffee-dependent",
        "fluff-generating",
        "AI prompt recycler",
      ];

  const interval = 1200;
  const totalDuration = words.length * interval - 200;
  const fadeOutDuration = 600;

  const [showFinal, setShowFinal] = useState(false);
  const [showInitial, setShowInitial] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setShowInitial(false), totalDuration);
    const finalTimer = setTimeout(
      () => setShowFinal(true),
      totalDuration + fadeOutDuration
    );

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finalTimer);
    };
  }, [totalDuration]);

  return (
    <div className="flex flex-col justify-center items-center my-44 max-sm:scale-75 max-sm:mx-auto">
      <AnimatePresence>
        {showInitial && (
          <motion.div
            key="initial"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: fadeOutDuration / 1000 }}
            className="flex flex-col items-center"
          >
            <h1 className="heading pr-6 pb-6 text-nowrap">
              <span className="text-purple">Warning:</span> I am not a
            </h1>
            <ContainerTextFlip
              words={words}
              interval={interval}
              className="max-h-[92px] overflow-hidden"
            />
          </motion.div>
        )}

        {showFinal && (
          <motion.h1
            key="final"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="heading pr-6 pb-6 leading-loose text-center"
          >
            I am just
            <div className="text-purple pt-4 text-7xl">Eitan</div>
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const [isExploding, setIsExploding] = useState(false);
  const textRef = React.useRef(null);

  const isShakingPhase = currentWordIndex >= words.length - 3;
  const isLastWord = currentWordIndex === words.length - 1;

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
      // const textWidth = (textRef.current as HTMLElement).scrollWidth + 30;
      // setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    if (isLastWord) {
      setTimeout(() => setIsExploding(true), interval * 0.8);
    }

    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) =>
        prev + 1 < words.length ? prev + 1 : prev
      );
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval, isLastWord]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      // style={{ minWidth: width }}
      animate={{
        width,
        scale: isExploding ? 2 : isShakingPhase ? [1, 1.05, 0.98, 1.07, 1] : 1,
        rotate: isShakingPhase && !isExploding ? [0, -2, 2, -1, 1, 0] : 0,
        // rotate: isShakingPhase && !isExploding ? [0, -4, 4, -5, 5, 0] : 0,
        opacity: isExploding ? 0 : 1,
      }}
      transition={{
        duration: isExploding ? 0.5 : 0.6,
        // duration: animationDuration / 2000,
        // ease: "easeInOut",
        repeat: isShakingPhase && !isExploding ? Infinity : 0,
        repeatType: "loop",
      }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-black md:text-7xl dark:text-white",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block whitespace-nowrap", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: index * 0.02 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TextFlip;

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContainerTextFlip } from "./ui/ContainerTextFlip.tsx";

const TextFlip = () => {
  const interval = 1200;
  const words = [
    "passionate 🤢",
    "driven 😵‍💫",
    "creative 🫥",
    "coffee-dependent ☕️",
    "fluff-generating 🤦",
    "AI prompt recycler ♻️",
    // "Chief AI prompt recycler",
  ];
  const totalDuration = words.length * interval;
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
    <div className="flex flex-col justify-center items-center my-44">
      <AnimatePresence>
        {showInitial && (
          <motion.div
            key="initial"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: fadeOutDuration / 1000 }}
            className="flex flex-col items-center"
          >
            <h1 className="heading pr-6 pb-6">
              <span className="text-purple">Warning:</span> I am not a
            </h1>
            <ContainerTextFlip
              words={words}
              interval={interval}
              className="max-h-[92px]"
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

export default TextFlip;

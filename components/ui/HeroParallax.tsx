"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HeroTexts } from "../HeroTexts.tsx";

export const HeroParallax = ({
  myProjects,
}: {
  myProjects: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = myProjects.slice(0, 5);
  const secondRow = myProjects.slice(5, 10);
  const thirdRow = myProjects.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Edited
  const laptopRange = [-700, 400],
    mobileRange = [-700, 0];

  // Edited
  const [range, setRange] = useState(laptopRange);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateRange = () => {
        setRange(window.innerWidth > 768 ? laptopRange : mobileRange);
      };

      updateRange();
      window.addEventListener("resize", updateRange);
      return () => window.removeEventListener("resize", updateRange);
    }
  }, []);

  // const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const springConfig = { stiffness: 200, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  // Edited
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], range));
  // const translateY = useSpring(
  //   useTransform(
  //     scrollYProgress,
  //     [0, 0.2],
  //     window.innerWidth > 768 ? [-700, 500] : [-100, 100]
  //   ),
  //   springConfig
  // );

  return (
    <div
      ref={ref}
      className="h-[200vh] md:h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:400px] md:[perspective:800px] [transform-style:preserve-3d]"
    >
      <HeroTexts />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="max-md:mt-32"
        // Edited motion.divs space and mb
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-[5vw] mb-[5vw]">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-[5vw] mb-[5vw]">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-[5vw]">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      // Edited
      className="group/product h-[40vw] w-[40vw] sm:h-96 sm:w-[30rem] relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

import React from "react";
import { HeroParallax } from "./ui/HeroParallax.tsx";
import { products } from "../constants/myProjects.tsx";
import { LampDemo } from "./ui/Lamp.tsx";

const Hero_v2 = () => {
  // FIXME: тут только с прошлого портфолио, надо добавить новые проекты. И добавить ссыль на гитхаб.
  return (
    <div className="pb-20">
      <LampDemo />

      <HeroParallax products={products} />
    </div>
  );
};

// function LampDemo() {
//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//       >
//         Build lamps <br /> the right way
//       </motion.h1>
//     </LampContainer>
//   );
// }

export default Hero_v2;

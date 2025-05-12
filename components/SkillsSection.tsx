// "use client";

import { ButtonPurple } from "./ui/ButtonPurple.tsx";
import { mySkills } from "../data/index.tsx";
// import { useEffect, useState } from "react";

const SkillsSection = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center px-8">
      {mySkills.map((skill, i) => (
        <ButtonPurple key={i} icon={skill.icon} text={skill.title} />
      ))}
    </div>
  );
};

// const SkillsSection = () => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setRotation(window.scrollY * 0.2); // rotation speed
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // const radius = 280; // radius in pixels
//   // const centerX = 200;
//   // const centerY = 320;

//   // return (
//   //   <div className="relative w-[400px] h-[400px] mx-auto">
//   //     {mySkills.map((skill, i) => {
//   //       const angle = (360 / mySkills.length) * i + rotation;
//   //       const radian = (angle * Math.PI) / 180;
//   //       const x = centerX + radius * Math.cos(radian) - 40;
//   //       const y = centerY + radius * Math.sin(radian) - 40;

//   //       return (
//   //         <div
//   //           key={i}
//   //           className="absolute"
//   //           style={{
//   //             top: y,
//   //             left: x,
//   //             transition: "top 0.1s, left 0.1s",
//   //           }}
//   //         >
//   //           <ButtonPurple icon={skill.icon} text={skill.title} />
//   //         </div>
//   //       );
//   //     })}
//   //   </div>
//   // );

//   const radius = 260;
//   const center = 200;

//   return (
//     <div className="relative w-[400px] h-[400px] mx-auto">
//       {mySkills.map((skill, i) => {
//         const angle =
//           ((360 / mySkills.length) * i + rotation) * (Math.PI / 180);
//         const x = center + radius * Math.cos(angle) - 40;
//         const y = center + radius * Math.sin(angle) - 40;

//         return (
//           <div
//             key={i}
//             className="absolute"
//             style={{
//               left: `${x}px`,
//               top: `${y}px`,
//               transition: "top 0.3s, left 0.3s",
//             }}
//           >
//             <ButtonPurple icon={skill.icon} text={skill.title} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default SkillsSection;

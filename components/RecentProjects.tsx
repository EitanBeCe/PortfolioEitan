"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { myProjects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { LazyAmimated } from "./LazyLoad.tsx";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <LazyAmimated rootMargin="0px 0px -10px 0px">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {myProjects
            .filter((p) => p.isTop)
            .map(({ title, des, iconLists, img, link }, index) => (
              <div
                className="flex items-center justify-center sm:h-[36rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] w-[80vw]"
                key={index}
              >
                <PinContainer title="Visit" href={link}>
                  <div className="relative flex items-center justify-center overflow-hidden sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>

                    <img
                      src={img}
                      alt="cover"
                      // className="z-10 absolute bottom-0 h-450 w-302"
                      className={`z-10 absolute ${
                        title.includes("iPhone")
                          ? "bottom-0"
                          : "-bottom-[34%] h-[120%] max-sm:h-[110%] rounded-t-xl rotate-3"
                      }`}
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
        </div>
      </LazyAmimated>
    </section>
  );
};

export default RecentProjects;

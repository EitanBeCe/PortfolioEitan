import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid.tsx";
import { gridItems, myProjects } from "../constants/index.tsx";

const Grid = () => {
  return (
    <section id="about" className="mx-6 pt-8">
      <BentoGrid>
        {/* {myProjects.map((item) => ( */}
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

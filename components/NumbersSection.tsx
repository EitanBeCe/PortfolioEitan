import React from "react";
import { myNumbers } from "../data/index.tsx";
import { LazyAmimated } from "./LazyLoad.tsx";

const NumbersSection = () => {
  return (
    <LazyAmimated rootMargin="0px 0px -20px 0px" className="min-h-96">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-16 justify-items-center px-8 pb-96">
        {myNumbers.map((item) => (
          <NumbersItem key={item.title} item={item} />
        ))}
      </div>
    </LazyAmimated>
  );
};

const NumbersItem = ({ item }: { item: { title: string; number: string } }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-3xl md:text-5xl font-bold">{item.number}</div>

      <div className="text-xs md:text-sm">
        {item.title.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NumbersSection;

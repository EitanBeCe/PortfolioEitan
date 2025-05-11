import React from "react";
import StackItem from "./StackItem.tsx";

export enum CircleSize {
  S = "S",
  M = "M",
  L = "L",
}

const items = [
  {
    title: "Next.js",
    img: "/next.svg",
    circleSize: CircleSize.L,
  },
];

const MyStack = () => {
  return (
    <>
      <StackItem
        key={items[0].title}
        title={items[0].title}
        img={items[0].img}
        circleSize={items[0].circleSize}
      />
    </>
  );
};

export default MyStack;

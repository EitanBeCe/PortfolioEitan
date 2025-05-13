import React from "react";
import { MacbookScroll } from "./ui/MacbookScroll.tsx";

export function MacbookScreen() {
  return (
    <div className="overflow-hidden w-full">
      {/* <LazyAnimated> */}
      <MacbookScroll
        src={`/assets/eitan/Languages.webp`}
        showGradient={false}
      />
      {/* </LazyAnimated> */}
    </div>
  );
}

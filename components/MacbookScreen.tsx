import React from "react";
import { MacbookScroll } from "./ui/MacbookScroll.tsx";

export function MacbookScreen() {
  return (
    <div className="overflow-hidden w-full">
      {/* <LazyAmimated> */}
      <MacbookScroll
        src={`/assets/eitan/Languages.webp`}
        showGradient={false}
      />
      {/* </LazyAmimated> */}
    </div>
  );
}

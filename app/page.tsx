import React from "react";
import Hero_v2 from "../components/Hero_v2.tsx";
import { AnimatedLines } from "../components/ui/GoogleGeminyEffect.tsx";
import { FloatingNav } from "../components/ui/FloatingNavbar.tsx";
import Grid from "../components/Grid.tsx";
import { navItems } from "../data/index.tsx";
import RecentProjects from "../components/RecentProjects.tsx";
import Experience from "../components/Experience.tsx";
import Approach from "../components/Approach.tsx";
import Footer from "../components/Footer.tsx";
import { MacbookScreen } from "../components/MacbookScreen.tsx";
import MyPhoto from "../components/MyPhoto.tsx";
import { LampFooter } from "../components/ui/Lamp.tsx";
import TextFlipAnimated from "../components/TextFlipAnimated.tsx";
import MyNumbers from "../components/NumbersAndSkills.tsx";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto">
      <div className="max-w-7xl w-full">
        {/* // FIXME: ссыль на резюме */}

        <FloatingNav navItems={navItems} />
        {/* <Hero /> */}
        <Hero_v2 />
        <MyNumbers />
        <AnimatedLines />
        <MyPhoto />
        <TextFlipAnimated />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <MacbookScreen />
        <LampFooter />
        <Footer />
      </div>
    </main>
  );
}

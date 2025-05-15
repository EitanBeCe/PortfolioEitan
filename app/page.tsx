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
import NumbersAndSkills from "../components/NumbersAndSkills.tsx";
import TextFlip from "../components/TextFlip.tsx";
import { LazyAnimated } from "../components/LazyLoad.tsx";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {/* <Hero /> */}

        {/* // FIXME: ридми пример тут https://github.com/sugith10 - добавить консюмрз туда. Портфолио. Циферки опыта. Ссыль резюме */}
        {/* // FIXME: ссыль на резюме */}

        {/* // FIXME:  перечекать верхнее меню */}

        {/* // FIXME:  мб поменять хиро текст на GPT */}
        {/* I enjoy Building pixel-perfect Interactive apps */}
        {/* Meet your next creative developer */}
        {/* I am not passionate 🤢/ ... /ordinar 🤐/linkedin /copypaster 📋 - смена слова */}
        {/* // FIXME:  мб кнопку автоскролла вниз */}
        <Hero_v2 />
        <NumbersAndSkills />
        <AnimatedLines />
        <MyPhoto />
        <LazyAnimated rootMargin="0px 0px -40% 0px" className="min-h-[320px]">
          <TextFlip />
        </LazyAnimated>
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

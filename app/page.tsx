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

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {/* <Hero /> */}

        {/* // FIXME: ридми пример тут https://github.com/sugith10 - добавить консюмрз туда. Портфолио. Циферки опыта. Ссыль резюме */}
        {/* // FIXME: ссыль на резюме */}

        {/* // FIXME: См подробность опыта работы тут https://www.oskarfranttiglen.com/ */}
        {/* // FIXME: чек простоту текстов. swift везде в конец */}
        {/* // FIXME:  мб поменять хиро текст на GPT */}
        {/* I enjoy Building pixel-perfect Interactive apps */}
        {/* I am not passionate 🤢/ ... /ordinar 🤐/linkedin /copypaster 📋 - смена слова */}
        <Hero_v2 />
        {/* // FIXME:  анимировать */}
        <NumbersAndSkills />
        {/* // FIXME:  разлет скиллов внизу скролла или хотябы исчезновение */}
        <AnimatedLines />
        <MyPhoto />
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

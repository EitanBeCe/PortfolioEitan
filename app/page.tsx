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

        {/* // FIXME: См подробность опыта работы тут https://www.oskarfranttiglen.com/ */}
        {/* // FIXME: ссыль на резюме */}
        {/* // FIXME: секция список курсов */}
        {/* // FIXME: см ссылки на скиллы тут https://sugith.in/ (мб увеличивать круги при хавере и давать ссылку) */}
        {/* // FIXME: https://sugith.in/ ссылки на гит каждого проекта. Лого можно тут взять мб */}
        {/* // FIXME: ридми пример тут https://github.com/sugith10 - добавить консюмрз туда. Портфолио. Циферки опыта. Ссыль резюме */}

        {/* // FIXME: чек простоту текстов. swift везде в конец */}
        {/* // FIXME:  мб поменять хиро текст на GPT */}
        {/* I enjoy Building pixel-perfect Interactive apps */}
        <Hero_v2 />
        <NumbersAndSkills />
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

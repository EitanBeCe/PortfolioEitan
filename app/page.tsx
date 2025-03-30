import React from "react";
import Hero from "../components/Hero.tsx";
import Hero_v2 from "../components/Hero_v2.tsx";
import { GoogleGeminiEffectDemo } from "../components/ui/GoogleGeminyEffect.tsx";

export default function Home() {
  // FIXME use it
  // https://ui.aceternity.com/components/google-gemini-effect эффект между блоками
  // https://ui.aceternity.com/components/background-gradient-animation градиент под фотку как на прошлом портфолио токо круче

  // https://ui.aceternity.com/components/timeline Можно для отображения моего опыта
  // https://ui.aceternity.com/components/compare приколюха для отображения кода
  // https://ui.aceternity.com/components/macbook-scroll для кода (макбук анимация)
  // https://ui.aceternity.com/components/container-text-flip смена слова
  // https://ui.aceternity.com/components/text-reveal-card приколюха с текстом
  // https://ui.aceternity.com/components/focus-cards фокус карточки

  // Hero Variants
  // https://ui.aceternity.com/components/wavy-background Вариант для хиро
  // https://ui.aceternity.com/components/spotlight-new Спотлайт 2

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <Hero /> */}
        <Hero_v2 />
        {/* <AnimatedLines /> */}
        <GoogleGeminiEffectDemo />
      </div>
    </main>
  );
}

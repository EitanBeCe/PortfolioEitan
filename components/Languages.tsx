import React, { useState } from "react";

enum YourLanguage {
  ENGLISH = "ENGLISH",
  HEBREW = "HEBREW",
  FRENCH = "FRENCH",
  RUSSIAN = "RUSSIAN",
  ARABIC = "ARABIC",
}

enum MyLanguageLevel {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
  PROFICIENT,
}

// DEMO file not in use. For image in MacbookScreen section

const Languages = () => {
  // Just set your language, and we will chat.
  const [yourLanguage, setYourLanguage] = useState(YourLanguage.ENGLISH);
  const [languageLevel, setLanguageLevel] = useState(
    MyLanguageLevel.PROFICIENT
  );

  switch (yourLanguage) {
    case YourLanguage.ENGLISH:
      setLanguageLevel(MyLanguageLevel.PROFICIENT);
      break;
    case YourLanguage.HEBREW:
      setLanguageLevel(MyLanguageLevel.ADVANCED);
      break;
    case YourLanguage.FRENCH:
      setLanguageLevel(MyLanguageLevel.INTERMEDIATE);
      break;
    case YourLanguage.RUSSIAN:
      setLanguageLevel(MyLanguageLevel.PROFICIENT);
      break;
    case YourLanguage.ARABIC:
      setLanguageLevel(MyLanguageLevel.BEGINNER);
      break;

    default:
      break;
  }

  return <div>Just set your language, and we will chat.</div>;
};

export default Languages;

import React from "react";
import { socialMedia } from "../data/index.tsx";
import SocialMediaButton from "./SocialMediaButton.tsx";

const SocialMedia = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((item) => SocialMediaButton(item))}
    </div>
  );
};

export default SocialMedia;

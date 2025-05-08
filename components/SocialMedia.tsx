import React from "react";
import { socialMedia } from "../data/index.tsx";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((info) => (
        <a
          key={info.id}
          href={info.link || "/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <Image
            src={info.img}
            alt="social icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;

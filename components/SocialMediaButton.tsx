import Image from "next/image";
import React from "react";

const SocialMediaButton = (item: { id: number; img: string; link: string }) => {
  return (
    <a
      key={item.id}
      href={item.link || "/"}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
    >
      <Image
        src={item.img}
        alt="social icon"
        width={20}
        height={20}
        className="object-contain"
      />
    </a>
  );
};

export default SocialMediaButton;

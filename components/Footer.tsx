import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton.tsx";
import Image from "next/image";
import SocialMedia from "./SocialMedia.tsx";

const Footer = () => {
  return (
    <footer
      className="relative w-full pb-10 px-8 mt-28 mb-[100px] md:mb-5"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:eitanleviberger@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            iconPosition="right"
          />
        </a>
      </div>

      <div className="flex mt-20 md:mt-40 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-6">
          Copyright © 2025 Eitan Elberg
        </p>

        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;

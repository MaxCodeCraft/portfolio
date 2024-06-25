import HeroVector from "../vectors/HeroVector";
import YellowButton from "../buttons/YellowButton";
import TransparentButton from "../buttons/TransparentButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-tardisBlue from-80% to-spatialGrey pb-24 pt-56">
      <div className="left-section">
        <div className="flex flex-col gap-4">
          <div>
            <span className="align-bottom text-3xl text-white">Hi, I am </span>
            <span className="font-goodtimes text-4xl text-gallifreyanGold">
              MAX
            </span>
          </div>
          <p className="align-bottom font-goodtimes text-2xl text-tardisOrange">
            FULL STACK <span className="text-white">DEVELOPPER</span>
          </p>
          <HeroVector />
          <p className="-mt-16 max-w-[450px] text-white">
            Hello and welcome to my site! I&apos;m a passionate full stack web
            developer with a unique background in sales. I use the MERN stack
            and love React libraries like Tailwind CSS and Framer Motion.
            Through an intensive bootcamp, I&apos;ve mastered the frameworks
            needed to bring your projects to life!
          </p>
          <div className="flex gap-4">
            <YellowButton url="#contact" title="CONTACT ME" />
            <TransparentButton url="#projects" title="DISCOVER MY WORK" />
          </div>
        </div>
      </div>
      <div className="right-section pl-6">
        <Image
          src={"/images/me.png"}
          width={164}
          height={581}
          className="h-auto w-40"
          alt="Me standing photo"
        />
      </div>
    </div>
  );
}

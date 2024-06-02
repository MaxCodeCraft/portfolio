import HeroVector from "../vectors/HeroVector";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="from-tardisBlue flex w-screen justify-center bg-gradient-to-b from-60% to-spatialGrey pt-56">
      <div className="left-section">
        <div className="flex flex-col gap-4">
          <div>
            <span className="align-bottom text-3xl text-white">Hi, I am </span>
            <span className="text-gallifreyanGold font-digitalix text-4xl shadow-lg">
              MAX
            </span>
          </div>
          <p className="text-tardisOrange align-bottom font-digitalix">
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

import HeroVector from "../vectors/HeroVector";
import YellowButton from "../buttons/YellowButton";
import TransparentButton from "../buttons/TransparentButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-tardisBlue from-80% to-spatialGrey pb-12 pt-16 md:pb-24 md:pt-56">
      <div className="left-section">
        <div className="flex flex-col gap-6 px-4">
          <div className="flex flex-col gap-2">
            <div>
              <span className="align-bottom text-3xl text-white">
                Salut, je suis{" "}
              </span>
              <span className="font-goodtimes text-4xl text-gallifreyanGold">
                MAX
              </span>
            </div>
            <p className="align-bottom font-goodtimes text-2xl text-tardisOrange">
              FULL STACK <span className="text-white">DEVELOPER</span>
            </p>
          </div>
          <div className="hidden md:block">
            <HeroVector />
          </div>
          <div className="flex max-w-[465px] flex-col gap-2 text-justify text-white md:-mt-16">
            <p>
              Bonjour et bienvenue ! Je suis{" "}
              <span className="font-black text-gallifreyanGold">
                Maxime Bocquet
              </span>
              , un développeur web full stack{" "}
              <span className="font-black text-gallifreyanGold">passionné</span>{" "}
              avec une expérience unique dans la vente.
            </p>
            <p>
              J&apos;utilise la{" "}
              <span className="font-black text-gallifreyanGold">
                stack MERN
              </span>{" "}
              et j&apos;apprécie les bibliothèques React telles que Tailwind CSS
              et Framer Motion.
            </p>
          </div>
          <div className="flex gap-4">
            <YellowButton url="#contact" title="CONTACT" />
            <div className="hidden md:block">
              <TransparentButton url="#projects" title="MES PROJETS" />
            </div>
            <div className="md:hidden">
              <TransparentButton url="#projects" title="PROJETS" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-section -mt-40 hidden pl-6 md:block">
        <Image
          src={"/images/me.png"}
          width={208}
          height={700}
          className="h-auto w-52"
          alt="Me standing photo"
        />
      </div>
    </div>
  );
}

import HeroVector from "../vectors/HeroVector";
import YellowButton from "../buttons/YellowButton";
import TransparentButton from "../buttons/TransparentButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-tardisBlue from-80% to-spatialGrey pb-24 pt-16 md:pt-56">
      <div className="left-section">
        <div className="flex flex-col gap-4 px-4">
          <div>
            <span className="align-bottom text-3xl text-white">
              Salut, je suis{" "}
            </span>
            <span className="font-goodtimes text-4xl text-gallifreyanGold">
              MAX
            </span>
          </div>
          <p className="align-bottom font-goodtimes text-2xl text-tardisOrange">
            FULL STACK <span className="text-white">DEVELOPPER</span>
          </p>
          <HeroVector />
          <p className="max-w-[450px] text-white md:-mt-16">
            Bonjour et bienvenue ! Je suis Maxime Bocquet, un développeur web
            full stack passionné avec une expérience unique dans la vente.
            J&apos;utilise la stack MERN et j&apos;apprécie les bibliothèques
            React telles que Tailwind CSS et Framer Motion. Grâce à un bootcamp
            intensif, j&apos;ai maîtrisé les frameworks nécessaires pour donner
            vie à vos projets !
          </p>
          <div className="flex gap-4">
            <YellowButton url="#contact" title="CONTACT" />
            <TransparentButton url="#projects" title="MES PROJETS" />
          </div>
        </div>
      </div>
      <div className="right-section hidden pl-6 md:block">
        <Image
          src={"/images/me.png"}
          width={208}
          height={700}
          className="h-auto w-44"
          alt="Me standing photo"
        />
      </div>
    </div>
  );
}

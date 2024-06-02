import Image from "next/image";
import dynamic from "next/dynamic";
import technos from "@/data/technos";

const SkillsTitle = dynamic(() => import("@/components/titles/SkillsTitle"), {
  ssr: false,
});
const SkillCard = dynamic(() => import("@/components/cards/SkillCard"), {
  ssr: false,
});

const skills = technos.map((skill, idx) => {
  return (
    <SkillCard
      key={idx}
      title={skill.title}
      img={skill.img}
      url={skill.url}
      alt={skill.alt}
      desc={skill.desc}
    />
  );
});

export default function Home() {
  return (
    <main className="custom-gradient min-h-screen w-screen flex flex-col items-center">
      <div className="w-screen flex flex-col gap-8">
        <Image
          src={"/mcc-logo.png"}
          width={102}
          height={184}
          className="w-24 object-contain"
        />
        <p className="text-3xl">
          Hi ! I am{" "}
          <span className="font-digitalix text-gallifreyan text-4xl">MAX</span>
        </p>
        <p className="font-digitalix text-tardis">
          FULL STACK <span className="text-white">DEVELOPPER</span>
        </p>
        <SkillsTitle />
      </div>
      <div className="pt-20 px-20 w-10/12 flex justify-center flex-wrap gap-8 items-center">
        {skills}
      </div>
    </main>
  );
}

import dynamic from "next/dynamic";
import SkillCard from "../cards/SkillCard";
import technos from "@/data/technos";

const SkillsTitle = dynamic(() => import("@/components/titles/SkillsTitle"), {
  ssr: false,
});

export default function Skills() {
  const skills = technos.map((techno) => {
    return (
      <SkillCard
        key={techno.title}
        title={techno.title}
        img={techno.img}
        alt={techno.alt}
        url={techno.url}
        coords={techno.coords}
      />
    );
  });
  return (
    <div
      id="skills"
      className="flex w-full flex-col bg-gradient-to-b from-spatialGrey from-80% to-tardisBlue pt-10"
    >
      <SkillsTitle />
      <div className="relative mx-auto mt-16 h-[522px] w-[600px] lg:h-[740px] lg:w-[850px]">
        {skills}
        <img src="/images/console.svg" alt="Tardis skills console" />
      </div>
    </div>
  );
}

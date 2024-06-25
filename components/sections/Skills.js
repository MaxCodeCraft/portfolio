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
      className="flex w-full justify-center bg-gradient-to-b from-spatialGrey from-80% to-tardisBlue"
    >
      <div className="flex w-11/12 flex-wrap pb-24 md:w-10/12">
        <SkillsTitle />
        <div className="relative mx-auto mt-16 h-[278px] w-[320px] md:mt-24 md:h-[566px] md:w-[650px]">
          {skills}
          <img src="/images/console.svg" alt="Tardis skills console" />
        </div>
      </div>
    </div>
  );
}

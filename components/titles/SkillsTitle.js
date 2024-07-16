import TitleVectorTop from "./TitleVectorTop";
import TitleVectorBottom from "./TitleVectorBottom";

export default function SkillsTitle() {
  return (
    <div className="cutted relative mx-auto flex w-10/12 flex-col justify-between bg-white/10 p-8 md:m-0 md:h-[280px] md:w-[600px]">
      <TitleVectorTop />
      <h2 className="pb-4 font-goodtimes text-2xl text-gallifreyanGold md:pb-0">
        compétences
      </h2>
      <p className="text-white">
        Passionné par le développement, j&apos;allie compétences techniques
        avancées et créativité. Expert en développement web et mobile,
        intégration d&apos;API, et gestion de bases de données.
      </p>
      <p className="text-white">
        Je suis toujours prêt à relever de nouveaux défis et à apprendre de
        nouvelles technologies !
      </p>
      <TitleVectorBottom />
    </div>
  );
}

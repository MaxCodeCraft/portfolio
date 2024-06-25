import TitleVectorTop from "./TitleVectorTop";
import TitleVectorBottom from "./TitleVectorBottom";

export default function SkillsTitle() {
  return (
    <div className="cutted relative flex h-[233px] w-[480px] flex-col justify-between bg-white/10 p-5">
      <TitleVectorTop />
      <h2 className="neon font-goodtimes text-2xl text-gallifreyanGold">
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

import TitleVectorTop from "./TitleVectorTop";
import TitleVectorBottom from "./TitleVectorBottom";

export default function ProjectsTitle() {
  return (
    <div className="cutted relative flex h-[189px] w-[720px] flex-col justify-between bg-white/10 p-8">
      <TitleVectorTop />
      <h2 className="neon font-goodtimes text-2xl text-gallifreyanGold">
        Mes projets
      </h2>
      <p className="text-white">
        Découvrez une sélection de mes derniers projets, chacun illustrant des
        compétences uniques et une créativité variée. Des applications web aux
        designs innovants, explorez comment je donne vie à mes idées.
      </p>
      <TitleVectorBottom />
    </div>
  );
}

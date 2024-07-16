import TitleVectorTop from "./TitleVectorTop";
import TitleVectorBottom from "./TitleVectorBottom";

export default function ProjectsTitle() {
  return (
    <div className="cutted relative mx-auto flex w-full flex-col justify-between bg-white/10 p-8 md:mx-0 lg:h-[189px] lg:w-[720px]">
      <TitleVectorTop />
      <h2 className="pb-4 font-goodtimes text-2xl text-gallifreyanGold md:pb-0">
        projets
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

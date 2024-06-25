import TitleVectorTop from "./TitleVectorTop";
import TitleVectorBottom from "./TitleVectorBottom";

export default function ProjectsTitleBis() {
  return (
    <div className="relative flex h-[189px] w-[720px] flex-col justify-between bg-white/10 p-8">
      <TitleVectorTop />
      <h2 className="neon font-goodtimes text-2xl text-gallifreyanGold">
        My Projects
      </h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <TitleVectorBottom />
    </div>
  );
}

import TitleVectorTop from "./TitleVectorTop";
import TitleVectorBottom from "./TitleVectorBottom";

export default function SkillsTitle() {
  return (
    <div className="relative flex h-[233px] w-[480px] flex-col justify-between bg-white/10 p-5">
      <TitleVectorTop />
      <h2 className="neon font-goodtimes text-2xl text-gallifreyanGold">
        My Skills
      </h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <TitleVectorBottom />
    </div>
  );
}

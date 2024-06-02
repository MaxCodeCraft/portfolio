import Image from "next/image";
import dynamic from "next/dynamic";

const SkillsTitle = dynamic(() => import("@/components/titles/SkillsTitle"), {
  ssr: false,
});
const ProjectsTitle = dynamic(
  () => import("@/components/titles/ProjectsTitle"),
  {
    ssr: false,
  }
);
const SkillCardsContainer = dynamic(
  () => import("@/components/cards/SkillCardsContainer"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="custom-gradient min-h-screen w-screen flex flex-col gap-10">
      <Image
        src={"/mcc-logo.png"}
        width={102}
        height={184}
        className="w-24 object-contain"
      />
      <p className="text-3xl text-white">
        Hi ! I am{" "}
        <span className="font-digitalix text-gallifreyan text-4xl">MAX</span>
      </p>
      <p className="font-digitalix text-tardis">
        FULL STACK <span className="text-white">DEVELOPPER</span>
      </p>
      <SkillsTitle />
      <SkillCardsContainer />
      <ProjectsTitle />
    </main>
  );
}

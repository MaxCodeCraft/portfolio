import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const SkillsTitle = dynamic(() => import("@/components/titles/SkillsTitle"), {
  ssr: false,
});
const ProjectsTitle = dynamic(
  () => import("@/components/titles/ProjectsTitle"),
  {
    ssr: false,
  },
);
const SkillCardsContainer = dynamic(
  () => import("@/components/cards/SkillCardsContainer"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main className="custom-gradient flex min-h-screen w-screen flex-col gap-10">
      <Hero />
      <SkillsTitle />
      <SkillCardsContainer />
      <ProjectsTitle />
    </main>
  );
}

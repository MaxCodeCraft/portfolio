import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

const ProjectsTitle = dynamic(
  () => import("@/components/titles/ProjectsTitle"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main className="custom-gradient flex min-h-screen w-screen flex-col">
      <Hero />
      <Skills />
      <div className="mt-28">
        <ProjectsTitle />
      </div>
    </main>
  );
}

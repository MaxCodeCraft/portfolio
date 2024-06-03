import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Starfield from "react-starfield";

export default function Home() {
  return (
    <main className="max-w-screen flex flex-col overflow-y-hidden">
      <Starfield
        starCount={1200}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}

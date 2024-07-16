import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Starfield from "react-starfield";

export default function Home() {
  return (
    <main className="flex w-screen flex-col overflow-x-hidden">
      <Starfield
        starCount={1300}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

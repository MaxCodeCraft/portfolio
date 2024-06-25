import dynamic from "next/dynamic";
import ProjectCard from "../cards/ProjectCard";
import projects from "@/data/projects";

const ProjectsTitle = dynamic(
  () => import("@/components/titles/ProjectsTitle"),
  {
    ssr: false,
  },
);

export default function Projects() {
  const project = projects.map((data, index) => {
    return <ProjectCard image={data.image} alt={data.alt} key={index} />;
  });

  return (
    <div
      id="projects"
      className="flex w-full justify-center bg-gradient-to-b from-tardisBlue from-80% to-spatialGrey"
    >
      <div className="flex w-10/12 flex-col">
        <ProjectsTitle />
        <div className="flex w-full flex-wrap justify-center gap-16 pb-16 pt-32">
          {project}
        </div>
      </div>
    </div>
  );
}

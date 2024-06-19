"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
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
      className="flex w-full flex-col bg-gradient-to-b from-tardisBlue from-80% to-spatialGrey"
    >
      <ProjectsTitle />
      <div className="my-16 flex w-full flex-wrap justify-center gap-16">
        {project}
      </div>
    </div>
  );
}

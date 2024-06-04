"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import projects from "@/data/projects";

const ProjectsTitle = dynamic(
  () => import("@/components/titles/ProjectsTitle"),
  {
    ssr: false,
  },
);

const ProjectTopVector = dynamic(
  () => import("@/components/vectors/ProjectTopVector"),
  {
    ssr: false,
  },
);

const ProjectTopRightVector = dynamic(
  () => import("@/components/vectors/ProjectTopRightVector"),
  {
    ssr: false,
  },
);

const ProjectBottomRightVector = dynamic(
  () => import("@/components/vectors/ProjectBottomRightVector"),
  {
    ssr: false,
  },
);

export default function Projects() {
  const [isSelected, setIsSelected] = useState("");

  return (
    <div
      id="projects"
      className="flex w-full flex-col bg-gradient-to-b from-spatialGrey from-10% to-tardisBlue pt-28"
    >
      <ProjectsTitle />
      <div className="relative flex w-full justify-center py-36">
        <svg width="0" height="0">
          <defs>
            <clipPath id="myClip">
              <path
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="1.5794"
                strokeMiterlimit="10"
                d="M262 0H0L81.5 145.5H178.5L262 0Z"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="tardis relative">
          <svg
            width="576"
            height="516"
            viewBox="0 0 576 516"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M334.075 156.169H236.775L150.147 3L133.198 12.4161L221.082 164.957L172.118 249.075H2V267.279H172.118L219.826 353.28L134.453 503.31L148.891 513.354L236.147 361.44H334.075L422.587 513.354L438.908 503.31L351.024 353.28L399.988 267.279H574.5V248.447H399.988L351.024 164.957L438.28 13.0439L422.587 3.62774L334.075 156.169Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M434.514 23.0877L564.456 247.191M564.456 269.162L434.514 493.894M417.565 505.193H154.541M138.22 495.149L7.02197 267.279M7.02197 248.447L138.22 21.8322M155.169 11.1606H418.192"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          {/* Top Project */}
          <a href={projects[0].url} target="blank">
            <motion.div
              className="clip-path absolute left-[155px] top-[11px] rotate-[0.2deg] grayscale hover:cursor-pointer hover:grayscale-0"
              onHoverStart={(e) => {
                setIsSelected("top");
              }}
              onHoverEnd={(e) => {
                setIsSelected("");
              }}
            >
              <img
                src={projects[0].image}
                alt={projects[0].alt}
                className="h-[146px] w-[262px]"
              />
            </motion.div>
          </a>
          {/* Top Right Project */}
          <a href={projects[1].url} target="blank">
            <motion.div
              className="clip-path absolute right-[7px] top-[98px] rotate-[59.7deg] grayscale hover:cursor-pointer hover:grayscale-0"
              onHoverStart={(e) => {
                setIsSelected("top-right");
              }}
              onHoverEnd={(e) => {
                setIsSelected("");
              }}
            >
              <img
                src={projects[1].image}
                alt={projects[1].alt}
                className="h-[146px] w-[262px]"
              />
            </motion.div>
          </a>
        </div>
        <ProjectTopVector
          isSelected={isSelected}
          title={projects[0].title}
          desc={projects[0].desc}
          technos={projects[0].technos}
        />
        <ProjectTopRightVector
          isSelected={isSelected}
          title={projects[1].title}
          desc={projects[1].desc}
          technos={projects[1].technos}
        />
      </div>
    </div>
  );
}

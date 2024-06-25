"use client";
import Image from "next/image";
import { useState } from "react";
import SkillCard from "./SkillCard";
import technos from "@/data/technos";

export default function ProjectCard(props) {
  const [projectTechnos, setProjectTechnos] = useState(props.technos);

  console.log(projectTechnos);

  return (
    <>
      <div
        className="relative h-[173px] w-[329px] overflow-hidden rounded-sm hover:cursor-pointer"
        onClick={() => document.getElementById("project_modal").showModal()}
      >
        <Image
          src={props.image}
          alt={props.alt}
          width={329}
          height={173}
          className="w-full rounded-sm"
        />
        <div className="left-0 top-0 hidden h-full w-full hover:absolute">
          <div className="flex h-full w-full items-center justify-center">
            <p className="font-goodtimes text-xl">+ de détails</p>
          </div>
        </div>
        <div className="tv absolute left-0 top-0 h-full w-full opacity-40 shadow-inner hover:opacity-0" />
      </div>
      <dialog id="project_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}

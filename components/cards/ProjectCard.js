"use client";
import Image from "next/image";
import SkillCard from "./SkillCard";
import technos from "@/data/technos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard(props) {
  const technosToDisplay = technos
    .filter((e) => props.technos?.includes(e.title))
    .map((data, index) => {
      return (
        <SkillCard
          key={index}
          title={data.title}
          url={data.url}
          img={data.img}
          alt={data.alt}
        />
      );
    });

  return (
    <>
      <div
        className="relative h-[200px] w-[380px] overflow-hidden rounded-sm hover:cursor-pointer"
        onClick={() => document.getElementById(props.title).showModal()}
      >
        <Image
          src={props.image}
          alt={props.alt}
          width={380}
          height={200}
          className="w-full rounded-sm"
        />
        <div className="left-0 top-0 hidden h-full w-full hover:absolute">
          <div className="flex h-full w-full items-center justify-center">
            <p className="font-goodtimes text-xl">+ de détails</p>
          </div>
        </div>
        <div className="tv absolute left-0 top-0 h-full w-full opacity-40 shadow-inner hover:opacity-0" />
      </div>
      <dialog id={`${props.title}`} className="modal">
        <div className="modal-box flex flex-col gap-4 rounded-xl border bg-spatialGrey text-white">
          <form method="dialog">
            <button className="absolute right-2 top-2 h-6 w-6 rounded border">
              ✕
            </button>
          </form>
          <h3 className="font-goodtimes text-lg text-gallifreyanGold">
            {props.title}
          </h3>
          <Image
            src={props.image}
            alt={props.alt}
            width={350}
            height={184}
            className="w-full rounded-sm"
          />
          <p className="">{props.desc}</p>
          <img
            src="/images/vector-line.svg"
            alt="separation line"
            className="w-1/2"
          />
          <div className="flex h-12 w-full gap-12">{technosToDisplay}</div>
          <div className="flex justify-end">
            <a href={props.url} target="_blank">
              <button className="flex items-center justify-center gap-2 rounded bg-gradient-to-tr from-gallifreyanGold to-tardisOrange px-6 py-[14px] font-goodtimes text-xs text-white">
                Je découvre <FontAwesomeIcon icon={faPaperPlane} size="xl" />
              </button>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

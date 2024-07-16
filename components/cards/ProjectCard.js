"use client";
import Image from "next/image";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
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
        className="relative h-auto w-[450px] overflow-hidden rounded-sm hover:cursor-pointer md:w-[400px]"
        onClick={() => document.getElementById(props.title).showModal()}
      >
        <Image
          src={props.image}
          alt={props.alt}
          width={380}
          height={200}
          className="w-full rounded-sm"
        />
        <div className="tv absolute left-0 top-0 h-full w-full opacity-40 shadow-inner hover:opacity-0" />
      </div>
      <dialog id={`${props.title}`} className="modal">
        <div className="modal-box flex flex-col gap-4 rounded-xl border bg-spatialGrey text-white">
          <form method="dialog">
            <button className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded border text-white hover:border-gallifreyanGold hover:text-gallifreyanGold">
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
          <div className="flex h-12 w-full flex-wrap gap-12 px-4">
            {technosToDisplay}
          </div>
          <div className="flex justify-end">
            <a href={props.url} target="_blank">
              <motion.button
                initial={{
                  background: "linear-gradient(to right, #ffd700, #ff8c00)",
                }}
                whileHover={{
                  background: "linear-gradient(to left, #ffd700, #ff8c00)",
                }}
                className="items-center justify-center rounded"
              >
                <p className="px-6 py-[14px] font-goodtimes text-xs text-white">
                  Je découvre <FontAwesomeIcon icon={faPaperPlane} size="xl" />
                </p>
              </motion.button>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

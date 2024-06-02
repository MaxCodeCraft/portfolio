"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import technos from "@/data/technos";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const skills = technos.map((skill, idx) => {
  return (
    <SkillCard
      key={idx}
      title={skill.title}
      img={skill.img}
      url={skill.url}
      alt={skill.alt}
      desc={skill.desc}
    />
  );
});

export default function SkillCardsContainer() {
  return (
    <motion.div
      className="flex w-10/12 flex-wrap gap-6"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {skills}
    </motion.div>
  );
}

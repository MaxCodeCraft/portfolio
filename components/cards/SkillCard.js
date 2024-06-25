"use client";
import { motion } from "framer-motion";

export default function SkillCard(props) {
  return (
    <a href={props.url} target="_blank">
      <motion.div
        className={`tooltip absolute flex h-[6.3%] w-[5.48%] items-center justify-center rounded-full border bg-gradient-to-b from-[#242627] to-[#4f4f4f] p-1 md:p-2`}
        data-tip={props.title}
        style={props.coords}
        animate={{ scale: [1, 1.35, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img src={props.img} alt={props.alt} className="object-fit w-full" />
      </motion.div>
    </a>
  );
}

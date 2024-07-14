"use client";
import { motion } from "framer-motion";

const play = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

export default function HeroVector() {
  return (
    <svg
      className="h-auto w-[320px] md:w-[550px]"
      viewBox="0 0 512 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M-5.96028e-08 1H438.846L511 61"
        variants={play}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}

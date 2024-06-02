"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const skillCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={props.url} target="blank">
      <motion.div
        className={`flex flex-col justify-around items-center w-48 h-48 border-2 ${
          isHovered ? "border-gallifreyan" : "border-white"
        }  rounded-md`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={skillCardVariants}
      >
        <img
          src={props.img}
          alt={props.alt}
          className={`${isHovered ? "w-16" : "w-24"}`}
        />
        {isHovered ? (
          <div>
            <p className="text-center font-digitalix text-gallifreyan text-sm">
              {props.title}
            </p>
            <p className="text-center text-white">{props.desc}</p>
          </div>
        ) : (
          <></>
        )}
      </motion.div>
    </a>
  );
}

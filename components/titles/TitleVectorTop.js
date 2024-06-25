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

export default function TitleVectorTop() {
  return (
    <div className="absolute left-0 top-0 -m-4">
      <svg
        width="135"
        height="154"
        viewBox="0 0 135 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M135 1.5H33L1.5 52V153.5"
          variants={play}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          stroke="url(#paint0_linear_255_5089)"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_255_5089"
            x1="62.2521"
            y1="4.39404"
            x2="62.2521"
            y2="149"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD700" />
            <stop offset="1" stopColor="#FF8C00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

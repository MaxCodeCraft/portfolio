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

export default function TitleVectorBottom() {
  return (
    <div className="absolute bottom-0 right-0 -mb-10 -mr-5">
      <svg
        width="477"
        height="177"
        viewBox="0 0 477 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M475.648 120L448.648 163.488H0"
          variants={play}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          stroke="#9B9B9B"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M0.835938 175.341H365.63"
          stroke="#9B9B9B"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <motion.rect
          x="93.1484"
          y="159.5"
          width="9"
          height="9"
          rx="4.5"
          fill="white"
          variants={play}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M338.648 152H440.648L472.148 101.5V0"
          variants={play}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          stroke="url(#paint0_linear_285_377)"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <line x1="178.113" y1="150" x2="328.81" y2="150" stroke="white" />
        <line
          x1="174.148"
          y1="151.911"
          x2="332.777"
          y2="151.911"
          stroke="white"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeDasharray="1 2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_285_377"
            x1="411.396"
            y1="149.106"
            x2="411.396"
            y2="4.50004"
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

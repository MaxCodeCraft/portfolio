"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function YellowButton(props) {
  return (
    <Link href={props.url}>
      <motion.div
        initial={{ background: "linear-gradient(to right, #ffd700, #ff8c00)" }}
        whileHover={{
          background: "linear-gradient(to left, #ffd700, #ff8c00)",
        }}
        transition={{ duration: 1 }}
        className="items-center justify-center rounded"
      >
        <p className="flex items-center gap-2 px-6 py-[14px] font-goodtimes text-sm text-white">
          {props.title}
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faRocket} size="lg" />
          </motion.span>
        </p>
      </motion.div>
    </Link>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function YellowButton(props) {
  return (
    <Link href={props.url}>
      <motion.div
        initial={{ background: "linear-gradient(to right, #ffd700, #ff8c00)" }}
        whileHover={{
          background: "linear-gradient(to left, #ffd700, #ff8c00)",
        }}
        className="items-center justify-center rounded"
      >
        <p className="px-6 py-[14px] font-goodtimes text-xs text-white">
          {props.title}
        </p>
      </motion.div>
    </Link>
  );
}

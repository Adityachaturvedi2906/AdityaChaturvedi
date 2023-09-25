"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDividerHome() {
  return (
    <motion.div
      className="bg-gray-200 my-20 w-16 h-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
/** @format */
"use client";
import { motion } from "framer-motion";
function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

export default Template;

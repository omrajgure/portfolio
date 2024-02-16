import React from "react";
import styles from "../button/Buttoncus.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export const Buttoncus = ({ text, shouldvisible, navbar }) => {
  const handledownload = () => {
    if (navbar) {
      const resumeurl = process.env.PUBLIC_URL + "/Om rajgure resume.pdf";
      window.open(resumeurl, "_blank");
    }
  };
  const [cusdiplay, set_cusdisplay] = useState("block");
  useEffect(() => {
    const handleresize = () => {
      set_cusdisplay(window.innerWidth < 668 ? "none" : "block");
    };
    window.addEventListener("resize", handleresize);
    handleresize();
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  return (
    <motion.div
      whileHover={{ scale: 1.1, backgroundColor: "#dbb22a" }}
      whileTap={{ scale: 0.9 }}
      onClick={handledownload}
      style={{
        display: shouldvisible ? "block" : cusdiplay,
      }}
      className={styles.button}
    >
      {text}
    </motion.div>
  );
};

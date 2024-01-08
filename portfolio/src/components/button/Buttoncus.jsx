import React from "react";
import styles from "../button/Buttoncus.module.css";
import { useState, useEffect } from "react";
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
    <div
      onClick={handledownload}
      style={{
        display: shouldvisible ? "block" : cusdiplay,
      }}
      className={styles.button}
    >
      {text}
    </div>
  );
};

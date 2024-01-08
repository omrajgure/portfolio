import React from "react";
import { SkillSlider } from "./skill_slider";
import styles from "./skills.module.css";
import spiral from "../../assets/spiral.png";
import stars from "../../assets/star.png";
import paws from "../../assets/paws.png";
import { useRef, useEffect, useState } from "react";

export const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.spiral} src={spiral} alt="spiral" />
      <img className={styles.paws} src={paws} alt="paws" />
      <img className={styles.stars} src={stars} alt="star" />

      <SkillSlider />
    </div>
  );
};

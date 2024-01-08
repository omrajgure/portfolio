import React from "react";
import styles from "./eachProject.module.css";

export const EachProject = ({ title, logo, decr, card_blu }) => {
  return (
    <div>
      <div
        className={
          card_blu ? `${styles.card_blu} ${styles.card}` : `${styles.card}`
        }
      >
        <div className={styles.img_container}>
          <img height={"100%"} width={"100%"} src={logo} alt="circle" />
        </div>
        <h4>{title}</h4>
        <p className={styles.project_descr}>{decr}</p>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./skill_slider.module.css";
import { ReactComponent as Mui } from "../../assets/mui.svg";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Sreact } from "../../assets/react.svg";
import { ReactComponent as API } from "../../assets/api.svg";
import { ReactComponent as Bootstrap } from "../../assets/bootstrap.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Java } from "../../assets/java.svg";
export const SkillSlider = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>Skills</h4>
      <div className={styles.scroller} id="scroller">
        <ul className={`${styles.tagList} ${styles.scroller_inner}`}>
          <li>
            <div className={styles.skillsContainer}>
              HTML
              <Html height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              CSS <Css height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Javascript <Js height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Bootstrap <Bootstrap height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              GIT <Github height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              REST API <API height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              React <Sreact height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Material UI
              <Mui height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Java
              <Java height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              HTML
              <Html height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              CSS <Css height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Javascript <Js height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Bootstrap <Bootstrap height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              GIT <Github height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              REST API <API height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              React <Sreact height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Material UI
              <Mui height={"100%"} width={"100%"} />
            </div>
          </li>
          <li>
            <div className={styles.skillsContainer}>
              Java
              <Java height={"100%"} width={"100%"} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

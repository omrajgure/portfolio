import React from "react";
import styles from "./footer.module.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footerflex}>
          <a target="_blank" href="https://www.linkedin.com/in/omrajgure/">
            <div className={styles.socialwrapper}>
              <div className={styles.socialimg}>
                <img
                  height={"100%"}
                  width={"100%"}
                  src={linkedin}
                  alt="linkedin"
                />
              </div>
              <span>Om Rajgure</span>
            </div>
          </a>
          <a target="_blank" href="https://github.com/omrajgure">
            <div className={styles.socialwrapper}>
              <div className={styles.socialimg}>
                <img height={"100%"} width={"100%"} src={github} alt="github" />
              </div>
              <span>Om Rajgure</span>
            </div>
          </a>
        </div>
        <div style={{ fontSize: "12px", color: "gray" }}>
          om22rajgure@gmail.com
        </div>
        <div style={{ fontSize: "12px", color: "gray" }}>
          &#169; 2024 Om Rajgure
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./about.module.css";
import about_img from "../../assets/about_me_img.png";
export const About = () => {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.inner_wrapper}>
        <div className={styles.img_div}>
          <img height={"100%"} width={"100%"} src={about_img} alt="aboutme" />
        </div>
        <div className={styles.abouttext}>
          <h4 style={{ color: "#706ee5", fontWeight: "bold" }}>About Me</h4>
          <p>
            Hello, I'm Om Rajgure, a recent graduate from St. Vincent Pallotti
            College of Engineering and Technology, Nagpur, specializing in
            Computer Engineering. My journey in the world of technology has been
            both challenging and exhilarating, shaping my skills and passion for
            building innovative solutions.
            <br />
            <br />
            Educational Background:
            <br />
            &bull; Bachelor of Technology (B.Tech) <br />
            <sub>
              &nbsp;&nbsp;&nbsp;&nbsp; St. Vincent Pallotti College of
              Engineering and Technology, Nagpur
            </sub>
            <br />
            &bull; Secondary Education <br />
            <sub>
              &nbsp;&nbsp;&nbsp;&nbsp; Amolakchand Mahavidyalaya, Yavatmal
            </sub>
            <br />
            &bull; Schooling <br />
            <sub>&nbsp;&nbsp;&nbsp;&nbsp; School of Scholars, Yavatmal</sub>
            <br />
          </p>
          <div className={styles.passion_div}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Passion for Problem-Solving:
            </span>
            <br /> I am deeply passionate about solving real-world problems
            through technology. My academic journey has provided me with a
            strong foundation, and my hands-on experience in various
            technologies has equipped me to take on diverse challenges.
          </div>
          <br />
          <div className={styles.future_div}>
            <span style={{ fontWeight: "bold" }}>
              Let's Build the Future Together:
            </span>
            <br />I am excited about the endless possibilities that technology
            brings. Whether it's creating an engaging user interface or
            Optimizing API calls, I am ready to contribute to projects that make
            a meaningful impact. Feel free to explore my portfolio and get in
            touch. Let's create something amazing together!
          </div>
        </div>
      </div>
    </div>
  );
};

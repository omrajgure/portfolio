import React from "react";
import { useState, useEffect } from "react";
import styles from "../hero/hero.module.css";
import { Box, Typography } from "@mui/material";
import new_myimg from "../../assets/port_new.svg";
import new_myimg_mobile from "../../assets/port_new_mobile.svg";
import ReactTyped from "react-typed";
import { Link } from "react-scroll";
// import lines_upper from "../../assets/lines_curly_upper.png";
// import lines_lower from "../../assets/lines_curly_lower.png";
// import dots from "../../assets/dots_bg_single.png";
// import arrow from "../../assets/only_arrrow.png";
import { Buttoncus } from "../button/Buttoncus";

export const Hero = () => {
  const [imageSource, setImageSource] = useState(new_myimg);

  useEffect(() => {
    const handleResize = () => {
      setImageSource(window.innerWidth > 1100 ? new_myimg : new_myimg_mobile);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial image source based on window width
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.hero} id="home">
      <Box className={styles.wrapper}>
        <Box className={styles.intro}>
          <h1>
            Hello, I'm <br /> Om Rajgure, a <br />
            {""}
            <ReactTyped
              strings={["React Developer.", "Frontend Developer."]}
              typeSpeed={100}
            />
          </h1>
          <Typography className={styles.intro_summary}>
            A passionate fresher with a strong foundation in HTML, CSS, and
            <span className={styles.highlighted_text}> JavaScript</span>. With a
            keen interest in front-end development, I have acquired proficiency
            in
            <span className={styles.highlighted_text}> React</span>, enabling me
            to create engaging and{" "}
            <span className={styles.highlighted_text}>responsive</span> user
            interfaces. I am adept at version control with{" "}
            <span className={styles.highlighted_text}> Git</span> and have a
            fundamental understanding of{" "}
            <span className={styles.highlighted_text}> RESTful APIs</span>.
            Eager to contribute my skills and learnings to a collaborative team
            environment„ I am committed to continuous growth and staying abreast
            of emerging technologies in the ever-evolving field of web
            development.
          </Typography>
          <Link to="projects" smooth={true} duration={500}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={styles.buttondiv}
            >
              <Buttoncus text={"Projects"} shouldvisible={true} />
            </div>
          </Link>
        </Box>
        <Box className={styles.img_div}>
          <img height={"100%"} width={"100%"} src={imageSource} alt="imghero" />
        </Box>
      </Box>
    </div>
  );
};

import React, { useEffect, useState, useRef } from "react";
import styles from "../navbar/navbar.module.css";
import Button from "@mui/material/Button";
import { Buttoncus } from "../button/Buttoncus";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = ({ hero }) => {
  const [clicked, setClicked] = useState(true);
  const [selectedposition, set_selectedposition] = useState(0);
  const [ele_hovered, set_ele_hovered] = useState();
  const [ele_pos, set_ele_pos] = useState();
  const myref = useRef();
  const handlehover = (e) => {
    const pos = e.target.offsetLeft;
    set_ele_hovered(e.target);
    set_ele_pos(pos);
  };
  useEffect(() => {
    set_selectedposition(0);
    handlehoverout();
  }, [hero]);

  const handlehoverout = () => {
    if (selectedposition === 239) {
      myref.current.style.left = `${selectedposition - 5}px`;
    } else {
      myref.current.style.left = `${selectedposition - 20}px`;
    }
  };

  useEffect(() => {
    if (ele_hovered) {
      if (ele_pos === 0) {
        myref.current.style.left = `${ele_pos - 20}px`;
        myref.current.style.width = "90px";
      } else if (ele_pos === 239) {
        myref.current.style.left = `${ele_pos - 5}px`;
      } else {
        myref.current.style.left = `${ele_pos - 20}px`;
        myref.current.style.width = "90px";
      }
    }
    set_ele_pos();
  }, [ele_pos]);

  const handlenavclick = (e) => {
    set_selectedposition(e.target.offsetLeft);

    // set_ele_clicked(e.target);
  };

  const handleclick = () => {
    setClicked((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <div>
      <div className={`${styles.wrapper} `}>
        <div className={styles.brandname}>
          <h1>OMFOLIO</h1>
        </div>
        <div className={styles.navbar_ele}>
          <Link to="home" smooth={true} duration={500}>
            <li
              onMouseEnter={handlehover}
              onMouseLeave={handlehoverout}
              onClick={handlenavclick}
            >
              Home
            </li>
          </Link>
          <Link to="about" smooth={true} offset={50} duration={500}>
            <li
              onMouseEnter={handlehover}
              onMouseLeave={handlehoverout}
              onClick={handlenavclick}
            >
              About
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li
              onMouseEnter={handlehover}
              onMouseLeave={handlehoverout}
              onClick={handlenavclick}
            >
              Projects
            </li>
          </Link>
          <Link to="contactme" smooth={true} offset={-50} duration={500}>
            <li
              onMouseEnter={handlehover}
              onMouseLeave={handlehoverout}
              onClick={handlenavclick}
            >
              Contact me
            </li>
          </Link>
          <span id="spans" ref={myref}></span>
        </div>
        <Buttoncus text={"Resume/CV"} navbar={true} />
        <div className={styles.hamburger}>
          <button onClick={handleclick}>
            <MenuIcon sx={{ color: "var(--color-primary)" }} />
          </button>
        </div>
      </div>
      <div
        style={{ display: clicked ? "none" : "flex" }}
        className={styles.hiddenDiv}
      >
        <Link to="home" smooth={true} duration={500}>
          <Button
            sx={{ width: "8rem", backgroundColor: "var(--color-primary)" }}
            variant="outlined"
          >
            Home
          </Button>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <Button
            sx={{ width: "8rem", backgroundColor: "var(--color-primary)" }}
            variant="outlined"
          >
            About
          </Button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <Button
            sx={{ width: "8rem", backgroundColor: "var(--color-primary)" }}
            variant="outlined"
          >
            Projects
          </Button>
        </Link>
        <Link to="contactme" smooth={true} offset={-50} duration={500}>
          <Button
            sx={{ width: "8rem", backgroundColor: "var(--color-primary)" }}
            variant="outlined"
          >
            Contact me
          </Button>
        </Link>
      </div>
    </div>
  );
};

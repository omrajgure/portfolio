import React from "react";
import styles from "./projects.module.css";
import { EachProject } from "./eachProject";
import Kart from "../../assets/qkart.png";
import film from "../../assets/filmfrontier.png";
import trip_static from "../../assets/qtrip_static.png";
import trip_dynamic from "../../assets/qtrip_dynamic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import proj_star from "../../assets/project_star.png";
import proj_arrow from "../../assets/proj_arrow.png";

import { Navbar } from "../navbar/navbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { RightBut } from "./right_but";
import { LeftBut } from "./left_but";
export const Projects = () => {
  let qkart_descr = (
    <p>
      QKart is an e-commerce application offering a variety of products for
      customers to choose from.
      <br />
      During the course of this project,
      <br />
      <br />
      &bull;Implemented the core logic for authentication, shopping cart and
      checkout.
      <br />
      <br />
      &bull;Improved UI by adding responsive design elements for uniform
      experience across different devices.
      <br /> <br />
      &bull;Utilized REST APIs to dynamically load and render data served by the
      backend server
    </p>
  );
  let film_fron_descr = (
    <p>
      Built FilmFrontier100, a React-based web application showcasing the top
      100 movies or series.
      <br />
      During the course of this project,
      <br />
      <br />
      &bull; Implemented advanced features such as filter functionality and
      search, enhancing user experience.
      <br />
      <br />
      &bull; Utilized REST API integration for real-time data updates.
      <br />
      <br />
      &bull; Demonstrated proficiency in React and front-end devel- opment to
      deliver an interactive and visually appealing platform for movie
      enthusiasts
    </p>
  );
  let qtrip_dynamic_descr = (
    <p>
      QTrip is a travel website aimed at travellers looking for a multitude of
      adventures in different cities.
      <br /> During the course of this project,
      <br />
      <br />
      &bull; Created web pages using HTML and CSS and made them dynamic using
      JavaScript
      <br />
      <br />
      &bull; Improved UX with multi-select filters, image carousels Utilised
      localStorage to persist user preferences at client-side
    </p>
  );
  let qtrip_static_descr = (
    <p>
      QTrip is a travel website aimed at travellers looking for a multitude of
      adventures in different cities.
      <br /> During the course of this project,
      <br />
      <br />
      &bull; Created 3 different web pages from Wireframe layout using HTML and
      CSS.
      <br />
      <br />
      &bull; Utilized Bootstrap extensively for responsive design.
      <br />
      <br />
      &bull; Deployed the website to Netlify.
    </p>
  );
  return (
    <div className={styles.wrapper} id="projects">
      <img className={styles.proj_star} src={proj_star} alt="proj_star" />
      <img className={styles.proj_arrow} src={proj_arrow} alt="proj_arrow" />
      <div className={styles.header}>
        <h4 style={{ color: "#706ee5", fontWeight: "bold" }}>Projects</h4>
        <h2>My Working Projects</h2>
      </div>
      <div className={styles.projectWrapper}>
        <Swiper
          style={{ padding: "0px 20px" }}
          initialSlide={0}
          modules={[Navigation]}
          spaceBetween={40}
          allowTouchMove
          slidesPerView={"auto"}
          breakpoints={{
            840: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1210: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <LeftBut />
          <RightBut />

          <SwiperSlide>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href="https://calm-cuchufli-8208cc.netlify.app/"
            >
              <EachProject title={"Qkart"} logo={Kart} decr={qkart_descr} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href="https://filmfrontier100.netlify.app/"
            >
              <EachProject
                title={"Film-Frontier 100"}
                logo={film}
                decr={film_fron_descr}
                card_blu={true}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href="https://qtrip-dynamic-om.netlify.app/"
            >
              <EachProject
                title={"Qtrip dynamic"}
                logo={trip_dynamic}
                decr={qtrip_dynamic_descr}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href="https://64fb08e3a1f72c7032d37f3a--om-qtrip.netlify.app/"
            >
              <EachProject
                title={"Qtrip static"}
                logo={trip_static}
                decr={qtrip_static_descr}
                card_blu={true}
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

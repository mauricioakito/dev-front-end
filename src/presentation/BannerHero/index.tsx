import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import Slider from "react-slick";
import styles from "./BannerHero.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactTyped } from "react-typed";

export const BannerHero = () => {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
  };

  return (
    <div className={styles.bannerContainer}>
      <Slider {...settings} className={styles.slider}>
        <img
          className={styles.bannerImage}
          src="Bannerhero/bannerhero.jpg"
          alt="Banner"
        />
        <img
          className={styles.bannerImage}
          src="Bannerhero/bannerhero2.jpg"
          alt="Banner"
        />
        <img
          className={styles.bannerImage}
          src="Bannerhero/bannerhero3.jpg"
          alt="Banner"
        />
      </Slider>

      <div className={styles.overlay}></div>

      <div className={styles.bannerText}>
        <img className={styles.profileImage} src="Bannerhero/mauricio.png" alt="" />
        <h1 className={styles.bannerTitle}>Olá, eu sou o Maurício</h1>
        <ReactTyped
          strings={[
            "Sou desenvolvedor Front End",
            "com 7 anos de experiencia",
            'acesse o meu LinkedIn para saber mais'
          ]}
          typeSpeed={20}
          backSpeed={40}
          backDelay={2000}
        />
        <a
          href="https://www.linkedin.com/in/mauricio-kitazawa/"
          target="_blank"
          className={styles.anchor}
        >
          <FaLinkedinIn color="white" size={'2rem'}/>
        </a>
      </div>
    </div>
  );
};

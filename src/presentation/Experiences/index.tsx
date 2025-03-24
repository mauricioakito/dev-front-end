import React from "react";
import { experiences, IExperiencesProps } from "./mock";
import styles from "./Experiences.module.scss";
import classNames from "classnames";
import useWindowDimensions from "../../utils/useWindowDimensions";

export const Experiences = () => {

  const { width } = useWindowDimensions()

  const isMobile = width && width > 1024;

  return (
    <section id="experiences" className={styles.experiences}>
      <div className={classNames("innerContainer", styles.innerContainer)}>
        <h2 className={styles.title} data-aos="fade-down" data-aos-offset={isMobile ? "0" : "900"}>Experiências</h2>
        <span className={styles.subtitle} data-aos="fade-down" data-aos-offset={isMobile ? "0" : "800"}>
          Ao longo da minha carreira, tive a oportunidade de trabalhar em
          diversos projetos e empresas, adquirindo experiências valiosas que me
          permitiram aprimorar minhas habilidades e conhecimentos em
          desenvolvimento web e aplicações web.
        </span>
      </div>
      {experiences.map((item: IExperiencesProps, index: number) => {
        return (
          <div className={styles.itemContainer} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-offset="850">
            <div
              className={classNames("innerContainer", styles.innerContainer)}
            >
              <div className={styles.itemTextInfo}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.companyName}>{item.companyName}</span>
              </div>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

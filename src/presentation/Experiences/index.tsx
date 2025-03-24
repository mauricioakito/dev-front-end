import React from "react";
import { experiences, IExperiencesProps } from "./mock";
import styles from "./Experiences.module.scss";
import classNames from "classnames";

export const Experiences = () => {
  return (
    <section id="experiences" className={styles.experiences}>
      <div className={classNames("innerContainer", styles.innerContainer)}>
        <h2 className={styles.title}>Experiências</h2>
        <span className={styles.subtitle}>
          Ao longo da minha carreira, tive a oportunidade de trabalhar em
          diversos projetos e empresas, adquirindo experiências valiosas que me
          permitiram aprimorar minhas habilidades e conhecimentos em
          desenvolvimento web e aplicações web.
        </span>
      </div>
      {experiences.map((item: IExperiencesProps) => {
        return (
          <div className={styles.itemContainer}>
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

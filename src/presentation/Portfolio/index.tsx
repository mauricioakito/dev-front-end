import React from "react";
import styles from "./Portfolio.module.scss";
import { portfolio, IPortfolioProps } from "./mock";
import classNames from "classnames";

export const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={classNames("innerContainer", styles.innerContainer)}>
        <h2 className={styles.title}>PORTFOLIO</h2>
        <p className={styles.subtitle}>Aqui você encontrará uma seleção dos meus projetos mais recentes e relevantes. Cada projeto representa um desafio único e uma oportunidade de aplicar minhas habilidades e conhecimentos para criar soluções digitais eficazes.</p>
        <div className={styles.portfolioContainer}>
          {portfolio.map((item: IPortfolioProps) => {
            return (
              <div className={styles.portfolioItem}>
                <img
                  className={styles.portfolioImage}
                  src={item.image}
                  alt={item.title}
                />
                <div className={styles.itemContainer}>
                  <span className={styles.bar}></span>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemTech}>{item.subtitle}</span>
                  <a className={styles.link} href={item.link} target='_blank'><img className={styles.imageLink} src="/Portfolio/link.svg" alt="" /></a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

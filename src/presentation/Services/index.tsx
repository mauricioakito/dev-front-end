import React from "react";
import styles from "./Services.module.scss";
import classNames from "classnames";

export const Services = () => {
  return (
    
    <section id="services" className={styles.services}>

      <div className={classNames("innerContainer", styles.innerContainer)}>
        <div className={styles.textContainer}>
          <h2 className={styles.title} data-aos="flip-up">SERVIÇOS</h2>
          <span className={styles.subtitle} data-aos="flip-up">
            Trabalho com segmentos de desenvolvimento de websites, aplicações
            web e ofereço serviços adicionais como otimizações de sites e
            manutenção.
          </span>
        </div>
        <div>
          <div className={styles.firstLine}>
            <div className={styles.biggerCard}  data-aos="fade-right">
              <div className={styles.iconTitleContainer}>
                <img
                  className={styles.cardIcon}
                  src="Services/landing-page-icon.svg"
                  alt="Criação de Landing Pages"
                />
                <div className={styles.titleSubtitleContainer}>
                  <span className={styles.cardTitle}>
                    01. CRIAÇÃO DE LANDING PAGES
                  </span>
                  <span className={styles.cartSubtitle}>Site com uma página</span>
                </div>
              </div>
              <p className={styles.cardText}>
              Uma landing page, também conhecida como página de destino, é uma página da web que visa converter visitantes em leads ou potenciais clientes, com velocidade e baixo custo.
              </p>
              <a
                className={styles.cardLink}
                href="https://wa.me/5515988136907?text=Olá%20gostaria%20de%20um%20orçamento%20para%20o%20serviço%20de%20criação%20de%20landing%20page"
              >
                Solicite um orçamento
              </a>
            </div>
            <div className={styles.biggerCard}  data-aos="fade-left">
              <div className={styles.iconTitleContainer}>
                <img
                  className={styles.cardIcon}
                  src="Services/website-icon.svg"
                  alt="Desenvolvimento de sites"
                />
                <div className={styles.titleSubtitleContainer}>
                  <span className={styles.cardTitle}>
                    02. DESENVOLVIMENTO DE SITES
                  </span>
                  <span className={styles.cartSubtitle}>Sites com múltiplas páginas</span>
                </div>
              </div>
              <p className={styles.cardText}>
                Um site institucional é a página virtual de uma empresa na
                internet. É um canal de comunicação com o público, onde a
                empresa pode divulgar seus produtos e serviços.
              </p>
              <a
                className={styles.cardLink}
                href="https://wa.me/5515988136907?text=Olá%20gostaria%20de%20um%20orçamento%20para%20o%20serviço%20de%20otimização%20de%20SEO"
              >
                Solicite um orçamento
              </a>
            </div>
          </div>
          <div className={styles.secondLine} data-aos="fade-up">
            <div className={styles.smallerCard}>
              <div className={styles.iconTitleContainer}>
                <img
                  className={styles.cardIcon}
                  src="Services/seo-icon.svg"
                  alt="Otimização para SEO"
                />
                <div className={styles.titleSubtitleContainer}>
                  <span className={styles.cardTitle}>
                    03. OTIMIZAÇÃO PARA SEO
                  </span>
                  <span className={styles.cartSubtitle}>Search Engine Optimization</span>
                </div>
              </div>
              <p className={styles.cardText}>
                É um conjunto de estratégias que visam melhorar o posicionamento
                de um site nos resultados de busca.
              </p>
              <a
                className={styles.cardLink}
                href="https://wa.me/5515988136907?text=Olá%20gostaria%20de%20um%20orçamento%20para%20o%20serviço%20de%20otimização%20de%20SEO"
              >
                Solicite um orçamento
              </a>
            </div>
            <div className={styles.smallerCard}>
              <div className={styles.iconTitleContainer}>
                <img
                  className={styles.cardIcon}
                  src="Services/maintenance-icon.svg"
                  alt="Manutenção de sites"
                />
                <div className={styles.titleSubtitleContainer}>
                  <span className={styles.cardTitle}>
                    04. MANUTENÇÃO DE SITES
                  </span>
                  <span className={styles.cartSubtitle}>Manutenção e suporte</span>
                </div>
              </div>
              <p className={styles.cardText}>
                A manutenção de um site é importante para segurança, disponibilidade e 
                experiência dos usuários
              </p>
              <a
                className={styles.cardLink}
                href="https://wa.me/5515988136907?text=Olá%20gostaria%20de%20um%20orçamento%20para%20o%20serviço%20de%20manutenção%20e%20suporte%20de%20sites"
              >
                Solicite um orçamento
              </a>
            </div>
            <div className={styles.smallerCard}>
              <div className={styles.iconTitleContainer}>
                <img
                  className={styles.cardIcon}
                  src="Services/training-icon.svg"
                  alt="Treinamento"
                />
                <div className={styles.titleSubtitleContainer}>
                  <span className={styles.cardTitle}>
                    05. TREINAMENTO
                  </span>
                  <span className={styles.cartSubtitle}>Conhecimento</span>
                </div>
              </div>
              <p className={styles.cardText}>
                O treinamento dos administradores
                de um requisito para administração de uma aplicação.
              </p>
              <a
                className={styles.cardLink}
                href="https://wa.me/5515988136907?text=Olá%20gostaria%20de%20um%20orçamento%20para%20o%20serviço%20de%20treinamento%20técnico"
              >
                Solicite um orçamento
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

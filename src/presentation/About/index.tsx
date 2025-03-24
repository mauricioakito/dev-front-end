import React from 'react'
import styles from './About.module.scss'
import classNames from 'classnames'

export const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={classNames('innerContainer', styles.innerContainer)}>
        <img className={styles.portrait} src="/About/man.png" alt="Man" />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>SOBRE MIM</h2>

          <p className={styles.paragraph}>Olá, meu nome é Mauricio Kitazawa e sou um desenvolvedor front-end com 7 anos de experiência construindo aplicações web escaláveis, performáticas e centradas na experiência do usuário. Minha especialidade é trabalhar com React.js, Next.js, TypeScript e WordPress, desenvolvendo interfaces responsivas e intuitivas que melhoram a usabilidade e a conversão de produtos digitais.</p>

          <p className={styles.paragraph}>Tenho um forte conhecimento em design system, performance web, acessibilidade e SEO, além de experiência na integração de APIs REST e GraphQL. Trabalho em colaboração com equipes back-end para garantir eficiência e qualidade no desenvolvimento de sistemas completos.</p>

          <p className={styles.paragraph}>Atualmente, estou em busca de oportunidades internacionais para expandir meu impacto e contribuir com empresas inovadoras. Sou apaixonado por tecnologia e estou sempre me atualizando sobre novas ferramentas e melhores práticas para entregar código limpo, eficiente e sustentável.</p>

          <div className={styles.personalInfoContainer}>
            <div className={styles.column}>
              <p className={styles.personalInfoParagraph}><strong>Nome:</strong> Maurício Akito Kitazawa</p>
              <p className={styles.personalInfoParagraph}><strong>Idade:</strong> 30 Anos</p>
              <p className={styles.personalInfoParagraph}><strong>E-mail:</strong> mauricio94jap@gmail.com</p>
            </div>
            <div className={styles.column}>
              <p className={styles.personalInfoParagraph}><strong>Telefone:</strong>+55 15 98813-6907</p>
              <p className={styles.personalInfoParagraph}><strong>Cidade:</strong>Itapetininga - São Paulo</p>
              <p className={styles.personalInfoParagraph}><strong>Hobby:</strong>Musculação, Desenvolvimento</p>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <a className={styles.experienceButton} href="#experiences">Experiências</a>
            <a className={styles.downloadButton} href="/About/curriculo.pdf" target="_blank" download>Baixar Currículo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

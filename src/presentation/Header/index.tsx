import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames';

export const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames({
      [styles.hasScrolled]: scrolled
    })}>
      <div className={styles.internalContainer}>
        <img className={styles.imageHeader} src="/favicon.svg" alt="" />
        <div className={styles.headerLinks}>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#experiences">Experiencias</a>
          <a href="#recommendation">Recomendações</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </header>
  )
}

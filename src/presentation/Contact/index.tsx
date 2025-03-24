import React from 'react'
import styles from './Contact.module.scss'
import { FaLinkedinIn } from 'react-icons/fa6'
import { RiWhatsappLine } from 'react-icons/ri'
import { BiLogoGmail } from 'react-icons/bi'

export const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className="innerContainer">
        <h2 className={styles.title}>CONTATO</h2>
        <span className={styles.subtitle}>Gostaria de contratar-me para um projeto? <br/> Basta entrar em contato pelos meios de contato abaixo</span>
        <div className={styles.infoContainer}>
          <a className={styles.infoItem} href='https://wa.me/5515988136907' target="_blank">
            <RiWhatsappLine color="white" size={'3rem'}/>
            <span className={styles.link}>+55 15 98813-6907</span>
          </a>
          <a className={styles.infoItem} href='mailto:mauricio94jap@gmail.com?subject=Orçamento&body=Olá, gostaria de fazer um orçamento' target="_blank">
          <BiLogoGmail color="white" size={'3rem'}/>
            <span className={styles.link}>mauricio94jap@gmail.com</span>
          </a>
          <a className={styles.infoItem} href='https://www.linkedin.com/in/mauricio-kitazawa/' target="_blank">
            <FaLinkedinIn color="white" size={'3rem'}/>
            <span  className={styles.link}>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}

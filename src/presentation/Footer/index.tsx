import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
  <div className={styles.footer}>
    <div className="innerContainer">
      <span className={styles.footerText}>@2025 - Todos os direitos reservados. Design e Desenvolvimento - Maurício Kitazawa</span>
    </div>
  </div>
  )
}

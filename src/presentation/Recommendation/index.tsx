import React, { useEffect, useRef, useState } from 'react';
import styles from './Recommendation.module.scss'

const testimonials = [
  {
    quote: 'Maurício é um excelente profissional, muito culto e cordial. Excelente pessoa para trabalhar junto e muito capaz de absorver novos conhecimentos e resolver problemas complexos.',
    author: 'Giovane Luiz Starch Perlin',
    title: 'Desenvolvedor Front End',
    imageUrl: '/Recommendation/bolinha-de-golfe.jpg',
  },
  {
    quote: 'Altamente competente no que faz, muito prático e consegue passar seu conhecimento de maneira muito fácil com suas abstrações. Busca sempre aprender novas ferramentas e tecnologias de desenvolvimento para sua contínua melhoria de habilidades!',
    author: 'Gustavo Manca',
    title: 'Desenvolvedor Front End',
    imageUrl: '/Recommendation/guga.jpg',
  },
  {
    quote: 'Motivado, trabalhador, de bem com a vida, excelente profissional, e sempre procura desenvolver um código limpo, aprender novas tecnologias e ajudar o próximo. Seu domínio no Front End é admirável.',
    author: 'Vitor Momberg',
    title: "Engenheiro de Software",
    imageUrl: '/Recommendation/cearense.jpg',
  },
  {
    quote: 'Mauricio é uma pessoa muito dedicada, tive o prazer de estudar com ele na FATEC Itapetininga. La tivemos muito desafios juntos, e nos momentos mais desafiadores foi onde ele demonstrou sua qualidades, motivando a todos na equipe.',
    author: 'Marco Antonio',
    title: "Engenheiro de Segurança da Informação",
    imageUrl: '/Recommendation/higienico.jpg',
  },
  {
    quote: 'Maurício tem uma sólida experiência e compreensão em UX, UI e desenvolvimento Front-end. Ele fez um ótimo trabalho em todos os projetos em que trabalhamos juntos.',
    author: 'Cristiano Ventura',
    title: "Engenheiro de Software",
    imageUrl: '/Recommendation/statham.jpg',
  },
];

export const Recommendation = () => {

  const [height, setHeight] = useState<number>(0)
  const elementRefs = useRef<HTMLQuoteElement[] | null>([]);

  useEffect(() => {
    if (elementRefs && elementRefs.current && elementRefs.current.length > 0) {
      const heights = elementRefs.current
        .filter((ref) => ref)
        .map((ref) => ref.clientHeight);

      if (heights.length > 0) {
        const calculatedMaxHeight = Math.max(...heights);
        setHeight(calculatedMaxHeight);
      }
    }
  }, [testimonials]);

  return (
    <section id='recommendation' className={styles.recommendation}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Recomendações</h2>
        <span className={styles.subtitle}>Alguns colegas destacam minha dedicação e resultados. Recomendações refletem a confiança em minhas habilidades e o impacto positivo do meu trabalho. Testemunhos de uma jornada profissional de sucesso.</span>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              {testimonial.imageUrl && (
                <div className={styles.imageContainer}>
                  <img
                    src={testimonial.imageUrl}
                    alt={`${testimonial.author} profile`}
                    className={styles.image}
                  />
                </div>
              )}
              <blockquote
                ref={(el) => {
                  if (elementRefs  && elementRefs.current && el) {
                    elementRefs.current[index] = el;
                  }
                }}
                className={styles.quote}
                style={{ height: height > 0 ? `${height}px` : 'auto' }}
              >
                "{testimonial.quote}"
              </blockquote>
              <div className={styles.author}>{testimonial.author}</div>
              {testimonial.title && <div className={styles.title}>{testimonial.title}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
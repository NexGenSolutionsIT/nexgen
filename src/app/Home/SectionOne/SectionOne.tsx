import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import styles from "src/app/Home/SectionOne/SectionOne.module.scss";

function SectionOne() {
  return (
    <div className={styles.container}>
      <BiCodeAlt className={styles.icon} />
      <h2 className={styles.text}>
        <span className={styles.span_primary}>{"{"}</span> Nossa{" "}
        <span className={styles.gradient}>missão</span> é oferecer soluções
        tecnológicas inovadoras e personalizadas para ajudar nossos clientes a
        atingir seus objetivos com eficiência e segurança. Nossa{" "}
        <span className={styles.gradient}>visão</span> é ser a principal
        referência em desenvolvimento de software personalizado no Brasil,
        reconhecida pela qualidade e inovação. Nossos{" "}
        <span className={styles.gradient}>valores</span> são inovação,
        qualidade, transparência e compromisso com o cliente, sempre focando em
        soluções que agreguem valor e promovam o sucesso dos nossos parceiros.{" "}
        <span className={styles.span_secundary}>{"}"}</span>
      </h2>
    </div>
  );
}

export default SectionOne;

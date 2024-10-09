import React from "react";
import Image from "next/image";
import Group from "../../../../public/images/Group.svg";
import styles from "./SectionOne.module.scss";

function SectionOne() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Transforme suas ideias em {""}
          <span className={styles.markTitle}>sucesso</span>.
        </h2>
        <p className={styles.text}>
          Transformar uma ideia em realidade exige mais do que inspiração. Nós
          convertemos suas ideias em sistemas eficazes e funcionais, superando
          expectativas.
        </p>
        <p className={styles.text}>
          Desde o conceito até o lançamento, trabalhamos com você, utilizando as
          melhores práticas e tecnologias modernas. Seja para startups ou
          empresas estabelecidas, estamos prontos para transformar sua visão em
          sucesso.
        </p>
        <p className={styles.text}>Aqui, suas ideias ganham vida.</p>
      </div>
      <div className={styles.groupImages}>
        <Image src={Group} alt="Grupo de imagens" className={styles.image} />
      </div>
    </div>
  );
}

export default SectionOne;

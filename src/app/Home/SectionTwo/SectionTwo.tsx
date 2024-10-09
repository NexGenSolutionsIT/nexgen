import React from "react";
import styles from "./SectionTwo.module.scss";
import Image from "next/image";
import boxTwo from "../../../../public/images/box-two.svg";
import boxOne from "../../../../public/images/box-one.svg";
import chart from "../../../../public/images/chart.svg";
import menu from "../../../../public/images/menu.svg";
import tech from "../../../../public/images/tech.svg";
import prototype from "../../../../public/images/prototype.svg";

function SectionTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.box_one}>
        <Image
          src={boxOne}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
        />
        <Image
          src={prototype}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
          className={styles.prototyp}
        />
        <Image
          src={tech}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
          className={styles.tech}
        />
        <div className={styles.text_one}>
          <h1 className={styles.title}>Designs Criativos</h1>
          <p className={styles.text}>
            No desenvolvimento de software, designs criativos são fundamentais
            para criar interfaces atraentes e funcionais. Eles melhoram a
            experiência do usuário, tornam o software único e ajudam a destacar
            soluções tecnológicas em um mercado competitivo, aliando estética e
            usabilidade de forma eficiente.
          </p>
        </div>
      </div>

      <div className={styles.box_two}>
        <Image
          src={boxTwo}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
        />
        <Image
          src={chart}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
          className={styles.chart}
        />
        <Image
          src={menu}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
          className={styles.menu}
        />
        <div className={styles.text_two}>
          <h1 className={styles.title}>Tecnologias Inovadoras</h1>
          <p className={styles.text}>
            No desenvolvimento de software, tecnologias inovadoras são
            essenciais para otimizar processos e melhorar a performance. Elas
            impulsionam soluções criativas, tornando os sistemas mais eficientes
            e competitivos, garantindo que os projetos estejam sempre
            atualizados e prontos para atender às demandas do mercado.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;

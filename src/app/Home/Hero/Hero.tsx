import React from "react";
import styles from "./Hero.module.scss";
import Button from "@/components/Button/Button";
import service from "../../../../public/images/services.svg";
import Image from "next/image";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.circle_primary}></div>
      <div className={styles.circle_secundary}></div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Tecnologia e Criatividade Unificadas para o{" "}
            <span className={styles.gradient}>Seu Negócio</span>
          </h1>
          <h2 className={styles.subtitle}>
            Unindo tecnologia e criatividade, desenvolvemos soluções
            estratégicas e personalizadas para levar sua empresa ao próximo
            nível de inovação e resultadosa.
          </h2>
        </div>
        <Button
          label="Solicitar orçamento"
          type="button"
          variant="normal"
          disabled={false}
        />
      </div>
      <div className={styles.image}>
        <Image
          src={service}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
        />
      </div>
    </div>
  );
}

export default Hero;

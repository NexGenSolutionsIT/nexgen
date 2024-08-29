import React from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Group from "../../../../public/images/Group.svg";

function SectionOne() {
  const { theme } = useTheme();
  const getStyles = () => {
    switch (theme) {
      case "light":
        return light;
      default:
        return dark;
    }
  };
  const variantStyles = getStyles();
  return (
    <div className={variantStyles.container}>
      <div className={variantStyles.textContainer}>
        <h2 className={variantStyles.title}>
          Transforme suas ideias em {""}
          <span className={variantStyles.markTitle}>sucesso</span>.
        </h2>
        <p className={variantStyles.text}>
          Transformar uma ideia em realidade exige mais do que inspiração. Nós
          convertemos suas ideias em sistemas eficazes e funcionais, superando
          expectativas.
        </p>
        <p className={variantStyles.text}>
          Desde o conceito até o lançamento, trabalhamos com você, utilizando as
          melhores práticas e tecnologias modernas. Seja para startups ou
          empresas estabelecidas, estamos prontos para transformar sua visão em
          sucesso.
        </p>
        <p className={variantStyles.text}>Aqui, suas ideias ganham vida.</p>
      </div>
      <div className={variantStyles.groupImages}>
        <Image
          src={Group}
          alt="Grupo de imagens"
          className={variantStyles.image}
        />
      </div>
    </div>
  );
}

export default SectionOne;

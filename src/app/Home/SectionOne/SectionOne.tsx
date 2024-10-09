"use client";
import React from "react";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import { useTheme } from "@/Context/ThemeContext";
import { BiCodeAlt } from "react-icons/bi";

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
      <BiCodeAlt className={variantStyles.icon} />
      <h2 className={variantStyles.text}>
        <span className={variantStyles.span_primary}>{"{"}</span> Nossa{" "}
        <span className={variantStyles.gradient}>missão</span> é oferecer
        soluções tecnológicas inovadoras e personalizadas para ajudar nossos
        clientes a atingir seus objetivos com eficiência e segurança. Nossa{" "}
        <span className={variantStyles.gradient}>visão</span> é ser a principal
        referência em desenvolvimento de software personalizado no Brasil,
        reconhecida pela qualidade e inovação. Nossos{" "}
        <span className={variantStyles.gradient}>valores</span> são inovação,
        qualidade, transparência e compromisso com o cliente, sempre focando em
        soluções que agreguem valor e promovam o sucesso dos nossos parceiros.{" "}
        <span className={variantStyles.span_secundary}>{"}"}</span>
      </h2>
    </div>
  );
}

export default SectionOne;

import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import light from "./style/light.module.scss";
import dark from "./style/dark.module.scss";
import Button from "@/components/Button/Button";
import service from "../../../../public/images/services.svg";
import serviceLight from "../../../../public/images/servicesLight.svg";
import Image from "next/image";

function Hero() {
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
      <div className={variantStyles.content}>
        <div>
          <h1 className={variantStyles.title}>
            Tecnologia e Criatividade Unificadas para o{" "}
            <span className={variantStyles.gradient}>Seu Negócio</span>
          </h1>
          <h2 className={variantStyles.subtext}>
            Tecnologia e criatividade em perfeita sintonia, desenvolvendo
            soluções estratégicas e personalizadas para levar sua empresa ao
            próximo nível de inovação e resultados.
          </h2>
        </div>
        <Button label="Solicitar orçamento" type="button" variant="normal" />
      </div>
      <div className={variantStyles.image}>
        <Image
          src={theme === "light" ? serviceLight : service}
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

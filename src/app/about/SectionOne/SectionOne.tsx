"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import Button from "@/components/Button/Button";
import Links from "@/components/Links/Links";
import Image from "next/image";
import about from "../../../../public/images/about.svg";
import aboutLight from "../../../../public/images/about-light.svg";

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
    <section className={variantStyles.sectionOne}>
      <div className={variantStyles.content}>
        <div className={variantStyles.text_box}>
          <h1 className={variantStyles.title}>
            Sua ponte para a inovação{" "}
            <span className={variantStyles.gradient}>tecnológica</span>
          </h1>
          <h2 className={variantStyles.subtitle}>
            Na Nexgen, usamos a tecnologia para destacar seu negócio. Com
            soluções digitais, elevamos sua competitividade e transformamos
            desafios em oportunidades.
          </h2>
        </div>
        <div className={variantStyles.buttons_box}>
          <Button label="Entrar em contato" type="button" variant="normal" />
          <Button label="Consultar serviços" type="button" variant="reverse" />
        </div>
      </div>
      <div>
        <Image
          src={theme === "light" ? aboutLight : about}
          alt="Slide"
          objectFit="cover"
          quality={100}
          priority
          unoptimized
          draggable={false}
        />
      </div>
    </section>
  );
}

export default SectionOne;

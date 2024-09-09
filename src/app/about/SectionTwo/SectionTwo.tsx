"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import Image from "next/image";
import Background from "../../../../public/images/cellphone-background.svg";

function SectionTwo() {
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
    <section className={variantStyles.sectionTwo}>
      <div>
        <Image
          alt="background"
          src={Background}
          layout="fill"
          objectFit="cover"
          className={variantStyles.image}
        />
      </div>
      <div className={variantStyles.div}>
        <h2 className={variantStyles.title}>
          Inovação com Propósito no Desenvolvimento de{" "}
          <span className={variantStyles.markTitle}>Sistemas</span>
        </h2>
        <p className={variantStyles.p}>
          Na NexGen, somos especialistas em desenvolvimento de sistemas com foco
          em inovação tecnológica. Nosso propósito é criar soluções que
          transformam ideias em realidades, atendendo às necessidades do
          presente e antecipando as demandas do futuro.
        </p>
        <p className={variantStyles.p}>
          Com uma abordagem personalizada, a NexGen oferece soluções
          tecnológicas que simplificam processos e impulsionam o crescimento do
          seu negócio. Seja através de sistemas personalizados ou transformação
          digital, estamos prontos para levar sua empresa ao próximo nível.
        </p>
        <p className={variantStyles.p}>
          Junte-se à NexGen e descubra como a inovação em desenvolvimento de
          sistemas pode ser a chave para o sucesso do seu negócio.
        </p>
        <p className={variantStyles.p}>
          Entre em contato e saiba como podemos colaborar para transformar suas
          ideias em soluções inovadoras.
        </p>
      </div>
    </section>
  );
}

export default SectionTwo;

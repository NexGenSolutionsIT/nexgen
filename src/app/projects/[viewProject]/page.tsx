"use client";
import React from "react";
import dark from "./styles/dark.module.scss";
import Contact from "@/components/Contact/Contact";
import light from "./styles/light.module.scss";
import { useTheme } from "@/Context/ThemeContext";
import Slide from "@/components/Slide/Slide";
import data from "../../../../projects.json";

interface ProjectProps {
  params: { project: string };
}

function Project({ params }: ProjectProps) {
  const { project } = params;

  console.log("Parâmetro da rota:", project);

  const projectData = data.find((item) => item.path === project);

  console.log("Projeto encontrado:", projectData);

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

  // Caso o projeto não seja encontrado
  if (!projectData) {
    return <div className={variantStyles.container}>Project not found</div>;
  }

  return (
    <div className={variantStyles.container}>
      <h1 className={variantStyles.title}>{projectData.project}</h1>
      <div className={variantStyles.slide}>
        <Slide />
      </div>
      <div className={variantStyles.text}>
        {/* Conteúdo do projeto */}
        <div className={variantStyles.subtext}>
          YouTube é uma plataforma digital inovadora e líder global no
          compartilhamento de vídeos, que se consolidou como o ponto de encontro
          para criadores de conteúdo e espectadores de todo o mundo. Lançada com
          o objetivo de democratizar a produção e o consumo de vídeos, YouTube
          oferece a qualquer pessoa com uma câmera e uma conexão à internet a
          chance de alcançar uma audiência global, independentemente de sua
          localização ou recursos financeiros.
        </div>
      </div>
      <div className={variantStyles.contact}>
        <Contact />
      </div>
    </div>
  );
}

export default Project;

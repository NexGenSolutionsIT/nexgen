"use client";
import React from "react";
import dark from "./styles/dark.module.scss";
import Contact from "@/components/Contact/Contact";
import light from "./styles/light.module.scss";
import { useTheme } from "@/Context/ThemeContext";
import Slide from "@/components/Slide/Slide";
import data from "../../../../projects.json";

interface ProjectProps {
  params: { path: string };
}

function Project({ params }: ProjectProps) {
  const { path } = params;

  const projectData = data.find((item) => item.path === path);

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

  if (!projectData) {
    return <div className={variantStyles.container}>Project not found</div>;
  }

  const images = projectData.images.map(
    (image) => `/images/Projects/${image}.png`
  );

  return (
    <div className={variantStyles.container}>
      <h1 className={variantStyles.title}>{projectData.project}</h1>
      <div className={variantStyles.slide}>
        <Slide images={images} variant="medium" />
      </div>
      <div className={variantStyles.text}>
        {projectData.text.map((paragraph, index) => (
          <div key={index} className={variantStyles.subtext}>
            {paragraph}
          </div>
        ))}
      </div>
      <div className={variantStyles.contact}>
        <Contact />
      </div>
    </div>
  );
}

export default Project;

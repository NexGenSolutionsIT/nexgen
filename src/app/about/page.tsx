"use client";
import React from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import Contact from "@/components/Contact/Contact";
import { useTheme } from "@/Context/ThemeContext";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";

function About() {
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
    <>
      <SectionOne />
      <SectionTwo />
      <div className={variantStyles.contact}>
        <Contact />
      </div>
    </>
  );
}

export default About;

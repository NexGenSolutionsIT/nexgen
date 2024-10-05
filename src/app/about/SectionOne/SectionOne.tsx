"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";

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
      <div>
        <p>Section One</p>
      </div>
    </section>
  );
}

export default SectionOne;

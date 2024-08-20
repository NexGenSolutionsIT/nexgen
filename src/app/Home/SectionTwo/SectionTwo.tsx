import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import React from "react";

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
  return <div className={variantStyles.container}>SectionTwo</div>;
}

export default SectionTwo;

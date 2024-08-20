import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import React from "react";

function SubHero() {
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
  return <div className={variantStyles.container}>SubHero</div>;
}

export default SubHero;

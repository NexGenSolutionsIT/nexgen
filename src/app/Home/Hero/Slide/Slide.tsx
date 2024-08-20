import React from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import { useTheme } from "@/Context/ThemeContext";

function Slide() {
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
  return <div className={variantStyles.container}>Slide</div>;
}

export default Slide;

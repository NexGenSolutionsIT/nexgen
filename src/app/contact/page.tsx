"use client";
import Contact from "@/components/Contact/Contact";
import React from "react";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import { useTheme } from "@/Context/ThemeContext";

function ContactPage() {
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
      <Contact />
    </div>
  );
}

export default ContactPage;

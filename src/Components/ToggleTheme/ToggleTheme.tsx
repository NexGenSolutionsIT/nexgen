"use client";
import React from "react";
import styles from "./toggleTheme.module.scss";
import { useTheme } from "@/Context/ThemeContext";
import {
  IoSunnyOutline,
  IoSunny,
  IoMoon,
  IoMoonOutline,
} from "react-icons/io5";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.button}>
      {theme === "light" ? (
        <span className={styles.container}>
          <span className={`${styles.iconNormal} ${styles.lightIcon}`}>
            <IoMoonOutline />
          </span>
          <span className={`${styles.iconHover} ${styles.lightIconHover}`}>
            <IoMoon />
          </span>
        </span>
      ) : (
        <span className={styles.container}>
          <span className={`${styles.iconNormal} ${styles.darkIcon}`}>
            <IoSunnyOutline />
          </span>
          <span className={`${styles.iconHover} ${styles.darkIconHover}`}>
            <IoSunny />
          </span>
        </span>
      )}
    </button>
  );
}

export default ThemeToggleButton;

import React, { useState, useEffect } from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Hero from "../../../../../public/images/Hero.png";
import { motion, AnimatePresence } from "framer-motion";

const images = [Hero, Hero, Hero];

function Slide() {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const getStyles = () => {
    switch (theme) {
      case "light":
        return light;
      default:
        return dark;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variantStyles = getStyles();

  return (
    <div className={variantStyles.container}>
      <AnimatePresence initial={false} custom={current}>
        <motion.div
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className={variantStyles.imageWrapper}
        >
          <Image
            alt={`Hero ${current + 1}`}
            src={images[current]}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className={variantStyles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${variantStyles.indicator} ${
              index === current ? variantStyles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slide;

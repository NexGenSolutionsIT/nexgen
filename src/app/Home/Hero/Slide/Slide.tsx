"use client";
import React, { useState, useEffect } from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import { useTheme } from "@/Context/ThemeContext";
import Image from "next/image";
import Hero from "../../../../../public/images/Hero.png";
import arrowSrc from "/public/BsArrowRight.svg";
import initialImage from "/public/Image.svg";

const images = [Hero, Hero, Hero];

function Slide() {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const getStyles = () => {
    switch (theme) {
      case "light":
        return light;
      default:
        return dark;
    }
  };

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variantStyles = getStyles();

  if (!isClient) {
    return null;
  }

  return (
    <div className={variantStyles.container}>
      <div
        className="dark_container__pCYKC"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "20px",
          marginTop: "8%",
        }}
      >
        <div className="dark_textContainer__9zKL1">
          <h2
            className="dark_title__7kzRp"
            style={{
              fontFamily: "Ubuntu",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "73.54px",
            }}
          >
            Inovação com <br /> soluções <br /> modernas <br />{" "}
            <span
              className="dark_markTitle__5vu2C"
              style={{
                color: "#FF5733",
              }}
            >
              NexGen
            </span>
          </h2>
          <a
            href="/contact"
            style={{
              fontFamily: "Ubuntu",
              color: "#A98BED",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "16px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            Solicitar serviço
            <Image
              src={arrowSrc}
              alt="Seta para a direita"
              style={{ marginLeft: "8px" }}
            />
          </a>
        </div>
        <div
          className="dark_groupImages__cRHXd"
          style={{ textAlign: "center" }}
        >
          <Image
            src={initialImage}
            alt="Grupo de imagens"
            loading="lazy"
            decoding="async"
            className="dark_image__gaDTd"
            style={{ width: "100%", height: "auto", marginBottom: "20%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slide;

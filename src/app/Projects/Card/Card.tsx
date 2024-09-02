"use client";
import React from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import { useTheme } from "@/Context/ThemeContext";
import Image, { StaticImageData } from "next/image";
import Links from "@/components/Links/Links";

interface CardProps {
  image: StaticImageData;
  link: string;
  project: string;
  href: string;
  alt: string;
}

function Card({ image, link, project, href, alt }: CardProps) {
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
    <div className={variantStyles.card}>
      <div className={variantStyles.image}>
        <Image width={0} height={48} alt={alt} src={image} />
      </div>
      <div className={variantStyles.caption_container}>
        <div className={variantStyles.content}>
          <p className={variantStyles.name}>{project}</p>
          <Links href={href} target="_blank">
            <p className={variantStyles.link}>{link}</p>
          </Links>
        </div>
      </div>
    </div>
  );
}

export default Card;

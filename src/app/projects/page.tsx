"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import Card from "./Card/Card";
import Link from "next/link";
import projects from "../../../projects.json";
import neeforexLight from "../../../public/images/neeforex-light.png";
import neeforexDark from "../../../public/images/neeforex.png";
import cryptoWalletLight from "../../../public/images/crypto-wallet-light.png";
import cryptoWalletDark from "../../../public/images/crypto-wallet.png";
import nexgenLight from "../../../public/images/nexgen-light.svg";
import nexgenDark from "../../../public/images/nexgen.svg";
import { StaticImageData } from "next/image";

const images: Record<ImageKey, StaticImageData> = {
  neeforexLight,
  neeforexDark,
  cryptoWalletLight,
  cryptoWalletDark,
  nexgenLight,
  nexgenDark,
};

function Projects() {
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
      <div className={variantStyles.title_subtitle}>
        <p className={variantStyles.title}>
          / <span className={variantStyles.title_span}>Projetos</span>.
        </p>
        <p className={variantStyles.subtitle}>
          Nossos projetos com maior destaque.
        </p>

        <div className={variantStyles.cards}>
          {projects.map((card, index) => {
            const imageKey =
              theme === "light"
                ? (card.imageLight as ImageKey)
                : (card.imageDark as ImageKey);

            return (
              <Link
                href={`/projects/${card.id}`}
                key={index}
                className={variantStyles.link}
              >
                <Card
                  alt={card.alt}
                  href={card.href}
                  image={images[imageKey]}
                  link={card.link}
                  project={card.project}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

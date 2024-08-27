"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import Card from "./Card/Card";
import youtube from "../../../public/images/logos_youtube.svg";
import neeforex from "../../../public/images/neeforex.png";
import neeforexLight from "../../../public/images/neeforex-light.png";
import nexgen from "../../../public/images/nexgen.svg";
import nexgenLight from "../../../public/images/nexgen-light.svg";
import cryptoWalletLight from "../../../public/images/crypto-wallet-light.png";
import cryptoWallet from "../../../public/images/crypto-wallet.png";

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

  const cardData = [
    {
      project: "Nee Forex",
      href: "https://neeforex.vercel.app/",
      image: theme === "light" ? neeforexLight : neeforex,
      alt: "Nee forex",
      link: "neeforex.com",
    },
    {
      project: "Crypto Wallet",
      href: "https://wallet-crypto-tau.vercel.app/",
      image: theme === "light" ? cryptoWalletLight : cryptoWallet,
      alt: "Wallet Crypto",
      link: "cryptoWallet.com",
    },
    {
      project: "YouTube",
      href: "https://www.youtube.com/",
      image: youtube,
      alt: "youtube",
      link: "youtube.com",
    },
    {
      project: "Nexgen IT Solutions",
      href: "https://nexgen-rho.vercel.app/",
      image: theme === "light" ? nexgenLight : nexgen,
      alt: "Nexgen IT Solutions",
      link: "nexgenitsolutions.com",
    },
    {
      project: "YouTube",
      href: "https://www.youtube.com/",
      image: youtube,
      alt: "youtube",
      link: "youtube.com",
    },
    {
      project: "YouTube",
      href: "https://www.youtube.com/",
      image: youtube,
      alt: "youtube",
      link: "youtube.com",
    },
    {
      project: "YouTube",
      href: "https://www.youtube.com/",
      image: youtube,
      alt: "youtube",
      link: "youtube.com",
    },
  ];

  return (
    <div className={variantStyles.container}>
      <div className={variantStyles.title_subtitle}>
        <p className={variantStyles.title}>
          / <span className={variantStyles.title_span}>Projects</span>.
        </p>
        <p className={variantStyles.subtitle}>
          Nossos projetos com maior destaque.
        </p>

        <div className={variantStyles.cards}>
          {cardData.map((card, index) => (
            <Card
              alt={card.alt}
              href={card.href}
              image={card.image}
              link={card.link}
              project={card.project}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

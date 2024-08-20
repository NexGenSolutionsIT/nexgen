import Image from "next/image";
import React from "react";
import Button from "@/Components/Button/Button";
import Logo from "../../../public/logo.svg";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import Links from "../Links/Links";
import { useTheme } from "@/Context/ThemeContext";

const linksData = [
  {
    text: "Inicio",
    href: "/inicio",
  },
  {
    text: "Projetos",
    href: "/project",
  },
  {
    text: "Quem Somos",
    href: "/weAre",
  },
  {
    text: "Serviços",
    href: "/jobs",
  },
];

interface HeaderProps {}

function Header({}: HeaderProps) {
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
    <header className={variantStyles.header}>
      <div className={variantStyles.logoContent}>
        <Image src={Logo} alt="" className={variantStyles.logo} />
        <h2 className={variantStyles.title}>NEXGEN SOLUTIONS</h2>
      </div>
      <div className={variantStyles.links}>
        {linksData.map((link, index) => (
          <Links key={index} href={link.href} text={link.text} />
        ))}
      </div>
      <div>
        <Button label="Contato" />
      </div>
    </header>
  );
}

export default Header;

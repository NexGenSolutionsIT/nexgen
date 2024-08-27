"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "@/Components/Button/Button";
import Logo from "../../../public/logo.svg";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import Links from "../Links/Links";
import { useTheme } from "@/Context/ThemeContext";
import ThemeToggleButton from "../ToggleTheme/ToggleTheme";
import { FiMenu } from "react-icons/fi";

const linksData = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Projetos",
    href: "/Projects",
  },
  {
    text: "Quem Somos",
    href: "/About",
  },
  {
    text: "Serviços",
    href: "/Services",
  },
];

interface HeaderProps {}

function Header({}: HeaderProps) {
  const { theme } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

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
          <Links key={index} href={link.href}>
            {link.text}
          </Links>
        ))}
      </div>
      <div className={variantStyles.button}>
        <ThemeToggleButton />
        <Button label="Contato" />
      </div>
      <div
        className={variantStyles.menuIcon}
        onClick={() => setModalOpen(true)}
      >
        <FiMenu className={variantStyles.menu} />
      </div>

      {isModalOpen && (
        <div className={variantStyles.modal}>
          <div className={variantStyles.modalContent}>
            <div className={variantStyles.button}>
              <ThemeToggleButton />
              <button
                className={variantStyles.closeButton}
                onClick={() => setModalOpen(false)}
              />
            </div>

            <div className={variantStyles.links}>
              {linksData.map((link, index) => (
                <Links key={index} href={link.href}>
                  {link.text}
                </Links>
              ))}
            </div>
            <Button label="Contato" type="button" variant="mobile" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

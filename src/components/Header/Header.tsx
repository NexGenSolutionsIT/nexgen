"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/Button/Button";
import Logo from "../../../public/logo.svg";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import Links from "../Links/Links";
import { useTheme } from "@/Context/ThemeContext";
import { FiMenu } from "react-icons/fi";
import ThemeToggleButton from "../ToggleTheme/ToggleTheme";
import Link from "next/link";

const linksData = [
  {
    text: "Inicio",
    href: "/",
  },
  // {
  //   text: "Projetos",
  //   href: "/projects",
  // },
  {
    text: "Quem Somos",
    href: "/about",
  },
  {
    text: "Serviços",
    href: "/services",
  },
];

function Header() {
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
        <h2 className={variantStyles.title}>NEXGEN IT SOLUTIONS</h2>
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
        <Link href="/contact">
          <Button label="Contato" />
        </Link>
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
            <Link href="/contact">
              <Button label="Contato" type="button" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

"use client";
import React from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import Links from "../Links/Links";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "@/Context/ThemeContext";
import Logo from "../../../public/logo.svg";
import Image from "next/image";

const nexgenData = [
  {
    text: "Sobre nós",
    href: "/about",
  },
  {
    text: "Nosso time",
    href: "/about",
  },
  {
    text: "Serviços",
    href: "/jobs",
  },
];

const resourcesData = [
  {
    text: "Desenvolvimento",
    href: "/projects",
  },
  {
    text: "Design",
    href: "/project",
  },
  {
    text: "Projetos",
    href: "/projects",
  },
];

const contactData = [
  {
    text: "+55 41 9535-7517",
    href: "https://api.whatsapp.com/send?phone=5555419535751&text=Nexgen,%20Inovando%20o%20futuro,%20hoje!",
  },
  {
    text: "contato@nexgen.com.br",
    href: "comercial@nexgensolutions.com.br",
  },
  // {
  //   text: "Pedro Ivo 379, 864-970 - Centro - Curtiba /PR",
  //   href: "https://www.google.com.br/maps/place/R.+Pedro+Ivo,+864-970+-+Centro,+Curitiba+-+PR,+82590-300/@-25.4320374,-49.2659588,19z/data=!3m1!4b1!4m15!1m8!3m7!1s0x94dce35351cdb3dd:0x6d2f6ba5bacbe809!2sCuritiba,+PR!3b1!8m2!3d-25.4268985!4d-49.2651984!16zL20vMDI4bXBy!3m5!1s0x94dce46a6cde2189:0x649ed93284ef3435!8m2!3d-25.4320386!4d-49.2647411!16s%2Fg%2F11g642ms3b?entry=ttu",
  // },
];

const termsData = [
  {
    text: "Termos",
    href: "",
  },
  {
    text: "Privacidade",
    href: "",
  },
  {
    text: "Cookies",
    href: "",
  },
  {
    text: "Confiança e Segurança",
    href: "",
  },
];

function Footer() {
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
    <div className={variantStyles.footer}>
      <div className={variantStyles.container_footer}>
        <div className={variantStyles.content}>
          <div className={variantStyles.column}>
            <p className={variantStyles.subtitle}>NexGen</p>
            {nexgenData.map((link, index) => (
              <Links key={index} href={link.href}>
                {link.text}
              </Links>
            ))}
          </div>
          <div className={variantStyles.column}>
            <p className={variantStyles.subtitle}>Recursos</p>
            {resourcesData.map((link, index) => (
              <Links key={index} href={link.href}>
                {link.text}
              </Links>
            ))}
          </div>
          <div className={variantStyles.column}>
            <p className={variantStyles.subtitle}>Contato</p>
            {contactData.map((link, index) => (
              <Links key={index} href={link.href} target="_blank">
                {link.text}
              </Links>
            ))}
          </div>
          <div className={variantStyles.column}>
            <p className={variantStyles.subtitle}>Redes Sociais</p>
            <Links href="https://github.com/NexGenSolutionsIT" target="_blank">
              <FaGithub className={variantStyles.icon} />
              <span className={variantStyles.socialText}>&nbsp;GitHub</span>
            </Links>

            <Links href="https://twitter.com/NexGenSolutionsIT" target="_blank">
              <FaXTwitter className={variantStyles.icon} />
              <span className={variantStyles.socialText}>&nbsp;Twitter</span>
            </Links>
            <Links
              href="https://www.linkedin.com/company/nexgen-systems-solutions/"
              target="_blank"
            >
              <FaLinkedin className={variantStyles.icon} />
              <span className={variantStyles.socialText}>&nbsp;Linkedin</span>
            </Links>
            {/* </div> */}
          </div>
        </div>
        <div className={variantStyles.line}></div>
      </div>
      <div className={variantStyles.container_bottom}>
        <div>
          <p className={variantStyles.copyright}>© 2024 Nexgen IT Solutions</p>
        </div>
        <div className={variantStyles.terms_container}>
          {termsData.map((link, index) => (
            <Link className={variantStyles.terms} key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

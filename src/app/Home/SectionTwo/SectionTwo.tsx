"use client";
import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import React, { useState } from "react";
import Button from "@/Components/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import Links from "@/Components/Links/Links";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { createTheme } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

function SectionTwo() {
  const { theme } = useTheme();
  const getStyles = () => {
    switch (theme) {
      case "light":
        return light;
      default:
        return dark;
    }
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const variantStyles = getStyles();

  const customAccordionStyle = {
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: "0",
  };

  const customSummaryStyle = {
    color: theme === "dark" ? "#fff" : "000",
  };

  return (
    <div className={variantStyles.container}>
      <div className={variantStyles.content}>
        <p className={variantStyles.subtitle}>
          Do micro ao grande empresário, todos precisam de tecnologia para seus
          resultados escalarem
        </p>
        <p className={variantStyles.text}>
          8 anos de experiência em desenvolvimento de sistemas web e mobile.
          Especialistas no desenvolvimento de sites com alta performance para o
          segmento financeiro.
        </p>
        <div className={variantStyles.links}>
          <Button label="Entrar em contato" />
          <Links href="">
            <div>
              <p className={variantStyles.link}>
                Conheça nossos serviços
                <span>
                  <BsArrowRight className={variantStyles.icon} />
                </span>
              </p>
            </div>
          </Links>
        </div>
      </div>
      <div className={variantStyles.acordion_group}>
        <div>
          <button
            className={variantStyles.toggleAccordion}
            onClick={() => toggleAccordion(0)}
          >
            Websites Institucionais
            <IoIosArrowDown
              className={variantStyles.accordionIcon}
              style={{
                transform:
                  activeIndex === 0 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <motion.div
            className={`${variantStyles.accordionContent} ${activeIndex === 0 ? variantStyles.accordionContentOpen : ""}`}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: activeIndex === 0 ? 1 : 0,
              height: activeIndex === 0 ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Fortalecemos a presença digital do seu negócio, através de sites de
            alta qualidade profissional e de estratégias personalizadas. hr
          </motion.div>
        </div>
        <div>
          <button
            className={variantStyles.toggleAccordion}
            onClick={() => toggleAccordion(1)}
          >
            Landing Page
            <IoIosArrowDown
              className={variantStyles.accordionIcon}
              style={{
                transform:
                  activeIndex === 1 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <motion.div
            className={`${variantStyles.accordionContent} ${activeIndex === 1 ? variantStyles.accordionContentOpen : ""}`}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: activeIndex === 1 ? 1 : 0,
              height: activeIndex === 1 ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Landing pages de alta conversão é uma das nossas especialidades, com
            design guiado e performance incomparável.
          </motion.div>
        </div>
        <div>
          <button
            className={variantStyles.toggleAccordion}
            onClick={() => toggleAccordion(2)}
          >
            E-commerces
            <IoIosArrowDown
              className={variantStyles.accordionIcon}
              style={{
                transform:
                  activeIndex === 2 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <motion.div
            className={`${variantStyles.accordionContent} ${activeIndex === 2 ? variantStyles.accordionContentOpen : ""}`}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: activeIndex === 2 ? 1 : 0,
              height: activeIndex === 2 ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Fornecemos soluções personalizadas e escaláveis, para que você
            alcance os seus objetivos, agora e no futuro, de forma consistente e
            prática.
          </motion.div>
        </div>
        <div>
          <button
            className={variantStyles.toggleAccordion}
            onClick={() => toggleAccordion(3)}
          >
            Sistemas Web personalizados
            <IoIosArrowDown
              className={variantStyles.accordionIcon}
              style={{
                transform:
                  activeIndex === 3 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <motion.div
            className={`${variantStyles.accordionContent} ${activeIndex === 3 ? variantStyles.accordionContentOpen : ""}`}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: activeIndex === 3 ? 1 : 0,
              height: activeIndex === 3 ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Oferecemos uma equipe de desenvolvedores de elite sob demanda para
            entregar a solução ideal para o seu negócio, e claro, para a sua
            audiência.
          </motion.div>
        </div>
        <div>
          <button
            className={variantStyles.toggleAccordion}
            onClick={() => toggleAccordion(4)}
          >
            Aplicativos Mobile
            <IoIosArrowDown
              className={variantStyles.accordionIcon}
              style={{
                transform:
                  activeIndex === 4 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <motion.div
            className={`${variantStyles.accordionContent} ${activeIndex === 4 ? variantStyles.accordionContentOpen : ""}`}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: activeIndex === 4 ? 1 : 0,
              height: activeIndex === 4 ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Fortalecemos a presença digital do seu negócio, através de sites de
            alta qualidade profissional e de estratégias personalizadas.
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;

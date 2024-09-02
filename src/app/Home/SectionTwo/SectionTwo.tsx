import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import React from "react";
import Button from "@/components/Button/Button";
import { BsArrowRight } from "react-icons/bs";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import symbol from "../../../../public/images/symbol.svg";
import Image from "next/image";
import Links from "@/Components/Links/Links";

const accordionData = [
  {
    summary: "Websites Institucionais",
    details:
      "Fortalecemos a presença digital do seu negócio, através de sites de alta qualidade profissional e de estratégias personalizadas.",
  },
  {
    summary: "Landing Pages",
    details:
      "Landing pages de alta conversão é uma das nossas especialidades, com design guiado e performance incomparável.",
  },
  {
    summary: "E-commerces",
    details:
      "Fornecemos soluções personalizadas e escaláveis, para que você alcance os seus objetivos, agora e no futuro, de forma consistente e prática.",
  },
  {
    summary: "Sistemas Web personalizados",
    details:
      " Oferecemos uma equipe de desenvolvedores de elite sob demanda para entregar a solução ideal para o seu negócio, e claro, para a sua audiência.",
  },
  {
    summary: "Aplicativos Mobile",
    details:
      "Fortalecemos a presença digital do seu negócio, através de sites de alta qualidade profissional e de estratégias personalizadas.",
  },
];

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
  const variantStyles = getStyles();

  return (
    <div className={variantStyles.container}>
      <div className={variantStyles.symbol}>
        <Image src={symbol} alt="" />
      </div>
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
            {
              <div className={variantStyles.link}>
                <p>Conheça nossos serviços</p>
                <p>
                  <BsArrowRight className={variantStyles.icon} />
                </p>
              </div>
            }
          </Links>
        </div>
      </div>
      <div className={variantStyles.acordion_group}>
        {accordionData.map((accordion, index) => (
          <Accordion key={index} className={variantStyles.acordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={variantStyles.icon} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={variantStyles.summary}
            >
              {accordion.summary}
            </AccordionSummary>
            <AccordionDetails className={variantStyles.details}>
              {accordion.details}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;

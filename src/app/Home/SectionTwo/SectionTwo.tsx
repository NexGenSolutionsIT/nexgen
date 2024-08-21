import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import React from "react";
import Button from "@/Components/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import Links from "@/Components/Links/Links";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme } from "@mui/material";

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
                <p>
                  Conheça nossos serviços
                  <span>
                    <BsArrowRight />
                  </span>
                </p>
              </div>
            }
          </Links>
        </div>
      </div>
      <div className={variantStyles.acordion_group}>
        <Accordion className={variantStyles.acordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={variantStyles.summary}
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails className={variantStyles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default SectionTwo;

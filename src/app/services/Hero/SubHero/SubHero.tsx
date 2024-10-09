import { useTheme } from "@/Context/ThemeContext";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import React from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
import { BsPalette2 } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

function SubHero() {
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
        <div className={variantStyles.circle}>
          <HiOutlineCursorClick />
        </div>
        <div className={variantStyles.text}>
          <p className={variantStyles.subtitle}>Qualidade Excepcional</p>
          <p className={variantStyles.subtext}>
            A NexGen foi criada para tornar sua vida mais fácil. Sistemas e
            ferramentas com a mais alta qualidade do mercado.
          </p>
        </div>
      </div>
      <div className={variantStyles.content}>
        <div className={variantStyles.circle}>
          <BsPalette2 />
        </div>
        <div className={variantStyles.text}>
          <p className={variantStyles.subtitle}>Projetado Para Ser Moderno</p>
          <p className={variantStyles.subtext}>
            Projetado com as últimas tendências de design. Modernidade em cada
            detalhe, combinando elegância e simplicidade.
          </p>
        </div>
      </div>
      <div className={variantStyles.content}>
        <div className={variantStyles.circle}>
          <BiCodeAlt />
        </div>
        <div className={variantStyles.text}>
          <p className={variantStyles.subtitle}>Web e Mobile</p>
          <p className={variantStyles.subtext}>
            Desenvolvimento web e mobile com foco em soluções ágeis e
            inovadoras, alinhadas às suas necessidades.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubHero;

import React, { useState, useEffect } from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import { useTheme } from "@/Context/ThemeContext";
import Image from "next/image";
import Hero from "../../../../../public/images/Hero.png";
import { motion, AnimatePresence } from "framer-motion";
import arrowSrc from "/public/BsArrowRight.svg";
import initialImage from "/public/Image.svg";

const images = [Hero, Hero, Hero];

function Slide() {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const getStyles = () => {
    switch (theme) {
      case "light":
        return light;
      default:
        return dark;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variantStyles = getStyles();

  return (
    <div className={variantStyles.container}>
      <div
        className="dark_container__pCYKC"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "20px",
          marginTop: "8%",
        }}
      >
        <div className="dark_textContainer__9zKL1">
          <h2
            className="dark_title__7kzRp"
            style={{
              fontFamily: "Ubuntu",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "73.54px",
            }}
          >
            Inovação com <br /> soluções <br /> modernas <br />{" "}
            <span
              className="dark_markTitle__5vu2C"
              style={{
                color: "#FF5733",
              }}
            >
              NexGen
            </span>
          </h2>
          <a
            href="/contact"
            style={{
              fontFamily: "Ubuntu",
              color: "#A98BED",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "16px",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            Solicitar serviço
            <Image
              src={arrowSrc}
              alt="Seta para a direita"
              style={{ marginLeft: "8px" }} // Adiciona espaço entre o texto e a imagem
            />
          </a>
        </div>
        <div
          className="dark_groupImages__cRHXd"
          style={{ textAlign: "center" }}
        >
          <Image
            src={initialImage}
            alt="Grupo de imagens"
            loading="lazy"
            decoding="async"
            className="dark_image__gaDTd"
            style={{ width: "100%", height: "auto", marginBottom: "20%" }}
          />
          {/* <img src="/_next/static/media/Group.71fb7aff.svg" /> */}
        </div>
      </div>

      {/* <AnimatePresence initial={false} custom={current}> */}
      {/* <motion.div
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          classNameName={variantStyles.imageWrapper}
        >
          <Image
            alt={`Hero ${current + 1}`}
            src={images[current]}
            layout="fill"
            objectFit="cover"
          />
        </motion.div> */}
      {/* </AnimatePresence> */}
      {/* <div classNameName={variantStyles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            classNameName={`${variantStyles.indicator} ${
              index === current ? variantStyles.active : ""
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Slide;

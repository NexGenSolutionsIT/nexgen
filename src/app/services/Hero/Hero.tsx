import React from "react";
import SubHero from "./SubHero/SubHero";
import styles from "./Hero.module.scss";
import Slide from "@/components/Slide/Slide";
import hero from "../../../../public/images/service-cover.svg";

function Hero() {
  return (
    <div className={styles.container}>
      <Slide variant="full" images={[hero]} />
      <SubHero />
    </div>
  );
}

export default Hero;

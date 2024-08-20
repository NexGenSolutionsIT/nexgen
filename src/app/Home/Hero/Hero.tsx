import React from "react";
import Slide from "./Slide/Slide";
import SubHero from "./SubHero/SubHero";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.container}>
      <Slide />
      <SubHero />
    </div>
  );
}

export default Hero;
